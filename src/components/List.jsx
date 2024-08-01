import React, { useContext, useState } from 'react'
import { ListContext } from '../components/ListContexProvider'
import FavouriteStudent from './FavouriteStudent'

function List() {
   const { slist } = useContext(ListContext)
   const { setslist } = useContext(ListContext)
   const { flist, setflist } = useContext(ListContext)
   const [isbuttondisabled, setisbuttondisabled] = useState(false)




   const handleClick = (item, id) => {
      setflist([...flist, item])

   }


   return (



      <div className='w-[1200px] h-[500px]'>
         <div className='flex p-12 m-9 '>

            <div className='w-[600px]  text-gray-800 p-12 flex flex-col justify-center items-center shadow-2xl'>
               <h1 className='text-3xl font-medium py-4 text-center capitalize mb-12'>List of students</h1>
               <div className='flex flex-col gap-4'>
                  {
                     slist.map((item, i) => {
                        return <div className='flex justify-around items-center'><h2>{item} </h2> <button className='w-[200px] h-[30px] shadow border text-white rounded-xl' style={{ backgroundColor: isbuttondisabled[i] || flist.includes(item) ? "#deaed8" : "#790977" }} onClick={() => handleClick(item, i)} disabled={isbuttondisabled[i] || flist.includes(item)}>Add to favourite list</button></div>
                     })
                  }
               </div>
            </div>



         </div>
      </div>
   )
}

export default List