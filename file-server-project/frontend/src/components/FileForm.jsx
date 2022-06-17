import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { upload, reset} from '../features/auth/authSlice'

function FileForm() {
  const { register, handleSubmit } = useForm();
  const [fileData, setFileData] = useState("");

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {user, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (e) => {
    e.preventDefault()
      setFileData(JSON.stringify(fileData))
      dispatch(upload(fileData))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="file" 
        {...register("file")} 
        placeholder="Title of file" />

      <input type="text" 
        {...register("fileTitle")} 
        placeholder="Title of file" 
        />

      <textarea 
        {...register("fileDescription")} 
        placeholder="Description of file" />
      <p>{fileData}</p>
      <input type="submit" />
    </form>);
}

export default FileForm