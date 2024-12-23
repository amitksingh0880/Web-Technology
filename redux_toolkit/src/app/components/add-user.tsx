"use client"
import React, { useState } from 'react'
import { addUsers } from '../Redux/slice';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [name, setName] = useState("");
    // const dispatcher = useDispatch();
    const addUsername = () => {
        // dispatcher(addUsers(name));
        // alert("User Added Successfully!!");

    }
    return (
        <div className='flex justify-center border border-spacing-4 p-5 mb-1'>
            <div className='flex flex-col mt-20'>
                <h1 className='flex font-bold text-4xl'>Add User to the Redux</h1>
                <label className='mt-10 font-serif font-medium text-[23px]'>Username:</label>
                <input className='rounded h-10 border border-red-500' type='text' placeholder=' Enter the Name!' onChange={(e) => setName(e.target.value)} />
                <button className='text-green-500 border border-green-500 rounded mt-10 self-center py-3  px-14 flex justify-center' onClick={addUsername}>Add User</button>
            </div>
        </div>
    )
}

export default AddUser;

