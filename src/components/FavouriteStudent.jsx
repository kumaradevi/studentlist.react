import React, { useState, useContext } from 'react'
import { ListContext } from './ListContexProvider'


function FavouriteStudent() {
  const { flist, setflist } = useContext(ListContext)
  const removeStudent = (removeid) => {
    const updatedList = flist.filter((item, id) => {
      return id !== removeid

    })
    setflist(updatedList)


  }
  return (
    <div className='flex p-12 m-9 ' >
      <div className='w-[600px]  p-12 text-gray-800  shadow-2xl min-h-[600px]'>
        <h1 className='text-3xl font-medium py-4 text-center capitalize mb-12 '>favourite students</h1>
        <div className='flex flex-col  gap-4 '>
          {
            flist.length > 0 ? (
              flist.map((item, i) => {
                return <div className='flex justify-around items-center'> <h2 >{item} </h2><button type="button" className='w-[200px] h-[30px] shadow border  bg-red-700 rounded-xl text-white' onClick={() => removeStudent(i)}>Remove students</button></div>
              })
            ) : <h3></h3>
          }
        </div>
      </div>
    </div>
  )
}

export default FavouriteStudent