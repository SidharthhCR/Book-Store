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

export const addBook = async (reqBody, reqHeader) => {
    return await axiosConfig('post', baseURL + '/addBook', reqBody, reqHeader)
}

export const getLimitedBooks = async () => {
    return await axiosConfig('get', baseURL + '/getSomeBooks', "")
};

export const getAllBooks = async (reqHeader,searchKey)=>{
    return await axiosConfig('get',`${baseURL}/getAllBooks/?search=${searchKey}`,"",reqHeader)
}

export const getSingleBook = async (id,reqHeader)=>{
    return await axiosConfig('get',`${baseURL}/getSingleBook/${id}`,"",reqHeader)
}

export const getUserDetails = async (reqHeader)=>{
    return await axiosConfig('get',`${baseURL}/userDetails`,"",reqHeader)
}

export const updateProfile=async(id,reqBody,reqHeader)=>{
    return await axiosConfig('patch',`${baseURL}/${id}/updateProfile`,reqBody,reqHeader)
}