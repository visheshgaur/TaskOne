import React from 'react'
import { useState } from 'react'
const Header = (props ,{data}) => {
  // const [userName,setUserName]=useState('')
  // if(!data){
  //   setUserName("admin")
  // }
  // else{
  //   setUserName(data.firstName)
  // }

  const logOutUser=()=>{
    localStorage.setItem("loggedInUser","")
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <>
    {/* <div className='flex items-end justify-between text-white'>
       <h1 className='text-2xl font-medium'>Hello<span className='text-3xl font-semibold'><br/>{props.data==undefined?"admin":props.data.firstName}👋</span></h1>
       <button className='bg-red-600 px-5 py-2 text-white font-medium rounded-sm' onClick={logOutUser}>Log Out</button>
    </div> */}
  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between text-white p-4">
  <div>
    <h1 className="text-lg sm:text-2xl font-medium">Hello</h1>
    <span className="text-xl sm:text-3xl font-semibold block">
      {props.data == undefined ? "admin" : props.data.firstName} 👋
    </span>
  </div>
  <button
    className="bg-red-600 px-4 py-2 text-white font-medium rounded-sm mt-3 sm:mt-0 sm:ml-4 text-sm sm:text-base"
    onClick={logOutUser}
  >
    Log Out
  </button>
</div>
    </>
  )
}

export default Header