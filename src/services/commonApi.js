import axios from "axios";

export const commonApi = async (httpRequest, url, reqBody) => {
  // Retrieve token from session or local storage
  const token = sessionStorage.getItem('token'); // or localStorage.getItem('token')

  // Configure request headers
  const requestConfig = {
    method: httpRequest,
    url,
    data: reqBody,
    headers: {
      "Content-Type": "application/json",
      // Add Authorization header if token is available
      ...(token && { "Authorization": `Bearer ${token}` })
    }
  };

  try {
    const result = await axios(requestConfig);
    return result;
  } catch (err) {
    console.log(err);
    throw err; // Re-throw error to handle it in the calling code
  }
};
