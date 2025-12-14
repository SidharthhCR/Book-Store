import axiosConfig from "./axiosConfig"
import { baseURL } from "./baseURL"



export const registerUser = async (reqBody) => {
    return await axiosConfig('post', baseURL + '/registerUser', reqBody);
}

export const loginUser = async (reqBody) => {
    return await axiosConfig(`post`, baseURL + '/loginUser', reqBody)
}

export const googleLoginAPI = async (reqBody) => {
    return await axiosConfig(`post`, baseURL + '/googleLogin', reqBody)
}

export const addBook = async (reqBody,reqHeader) => {
    return await axiosConfig('post', baseURL + '/addBook', reqBody,reqHeader)
}