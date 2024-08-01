import React from 'react'
import { useState,createContext } from 'react'


const ListContext = createContext()
function ListContexProvider(data) {
    
    const [slist, setslist] = useState(["Raja", "John", "Kamal", "Vignesh", "Rani", "Sathya", "Rosy", "Kamala", "Rajesh"])
    const [flist, setflist] = useState([])

    return (
        <div>
            <ListContext.Provider value={{ slist, setslist ,flist,setflist}}>
                {data.children}
               </ListContext.Provider>

    </div >
  )
}

export default ListContexProvider
export {ListContext}