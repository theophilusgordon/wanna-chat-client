import axios from "axios";

const API_URL = "/api/files/";

// create a new file
const createFile = async (fileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, fileData, config);
  return response.data;
};

// delete a file
const deleteFile = async (fileId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + fileId, config);
  return response.data;
};

// get all files for  user
const getFiles = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const fileService = {
  createFile,
  deleteFile,
  getFiles,
};

export default fileService;
