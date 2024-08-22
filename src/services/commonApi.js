import axios from "axios"

export const commonApi = async(httpRequest,url,reqBody)=>{
    const requestConfig = {
        method : httpRequest,
        url,
        data : reqBody,
        headers : {"Content-Type":"application/json"}
    }
  return  await axios(requestConfig).then((result)=>{
        return result
    }).catch((err)=>{
        console.log(err);
        
    })
}