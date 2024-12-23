"use client"
import React from 'react'

const DisplayUser = () => {
  return (
    <div className='flex justify-center border border-spacing-4 p-5 mt-2'>  
            <div className='flex flex-col mt-20'>
            <h1 className='flex font-bold text-4xl mb-10'>Display Added Username from Redux</h1>
            <textarea className='rounded text-gray-700 mt-15'>Username Displayed Here...</textarea>
            </div>
        </div>
  )
}

export default DisplayUser;