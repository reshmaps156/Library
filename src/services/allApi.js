import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//register request
export const registerApi = async (reqBody)=>{
   return await commonApi('POST',`${serverUrl}/register`,reqBody)
}
//login
export const loginApi = async (reqBody)=>{
   return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

//add-book
export const addBookApi = async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/add-book`,reqBody)
}
//get book
export const allBookApi = async()=>{
   return await commonApi('GET',`${serverUrl}/allbooks`,"")
}

//save book
export const saveBookApi = async (userId,sBook)=>{
   return await commonApi('POST',`${serverUrl}/save-book`,{userId,sBook})
}

export const getSavedBookApi = async(userId)=>{
   return await commonApi('GET',`${serverUrl}/save-book/${userId}`)
}
//delete saved
export const deleteBookApi = async (userId, bookId) => {
   return await commonApi('DELETE', `${serverUrl}/delete-book/${userId}/${bookId}`);
};
