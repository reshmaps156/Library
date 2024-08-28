import React, { createContext, useState } from 'react'


export const addResponseContext = createContext({})
export const editResponseContext = createContext({})
export const deleteResponseContext = createContext({})
function DataShare({children}) {
    const [addResponse,setAddResponse] = useState({})
    const [editResponse,setEditResponse] = useState({})
    const [deleteResponse,setDeleteResponse] = useState({})
  return (
   <deleteResponseContext.Provider value={{deleteResponse,setDeleteResponse}}>
        <editResponseContext.Provider value={{editResponse,setEditResponse}}>
            <addResponseContext.Provider value={{addResponse,setAddResponse}}>
                {children}
            </addResponseContext.Provider>
        </editResponseContext.Provider>
   </deleteResponseContext.Provider>
  )
}

export default DataShare