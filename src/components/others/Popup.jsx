import React from 'react'

const Popup = (props,{data}) => {
   
  return (
 <div className='flex items-center justify-center'>
       <div className='w-[300px] bg-blue-400 rounded-xl m-5 text-white  px-3 py-3'>
  {props.data==undefined?<h1> Welcome Admin</h1>:<h1> Welcome {props.data.firstName}</h1>}
    </div>
 </div>
  )
}

export default Popup