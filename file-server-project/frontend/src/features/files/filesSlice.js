import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fileService from "./fileService";

const initialState = {
  files: [],
  isError: false,
  isSuccess: false,
  message: "",
};

// Create a new file
export const createFile = createAsyncThunk(
  "files/create",
  async (fileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fileService.createfile(fileData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get files
export const getFiles = createAsyncThunk(
  "files/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fileService.getfiles(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete file
export const deleteFile = createAsyncThunk(
  "files/delete",
  async (fileId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await fileService.deletefile(fileId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFile.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.files.push(action.payload);
      })
      .addCase(createFile.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.files = state.files.filter(
          (file) => file._id !== action.payload.id
        );
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.files = action.payload;
      })
      .addCase(getFiles.rejected, (state, action) => {
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = filesSlice.actions;
export default filesSlice.reducer;
