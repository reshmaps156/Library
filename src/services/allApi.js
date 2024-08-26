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
//remove book by admin
export const removeBookApi = async(bookId)=>{
   return await commonApi('DELETE',`${serverUrl}/remove-book/${bookId}`)
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

export const reserveBookApi = async (userId, bookData) => {
   return await commonApi('POST', `${serverUrl}/reserve-book/${userId}`, bookData);
};

export const getReservedBooksApi = async () => {
   return await commonApi('GET', `${serverUrl}/reserved-books`);
 };

 export const rejectReservedBookApi = async (userId, bookId) => {
   return await commonApi('DELETE', `${serverUrl}/reserved-book/${userId}/${bookId}`);
};

export const acceptReservationApi = async (reservationData) => {
   return await commonApi('POST', `${serverUrl}/accept-reservation`, reservationData);
 };

 export const getAcceptedReservationsApi = async () => {
   return await commonApi('GET', `${serverUrl}/accepted-reservations`);
 };

 export const getUserBorrowedBooksApi = async (userId) => {
   return await commonApi('GET', `${serverUrl}/user-borrowed-books/${userId}`);
 };

 export const markBookReturnedApi = async(id)=>{
   return await commonApi('DELETE',`${serverUrl}/return-book/${id}`)
 }