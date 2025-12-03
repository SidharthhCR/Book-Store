import axiosConfig from "./axiosConfig"
import { baseURL } from "./baseURL"


export const registerUser = async(reqBody)=>{
    return await axiosConfig('post',baseURL+'/registerUser',reqBody);
}