import React from 'react'


const FailedTask = ({task}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
    <div className='flex justify-between items-center text-white'>
        <h3 className=' bg-red-500 rounded-md px-3 py-1'>{task.category}</h3>
        <h4 className='text-md font-medium'>{task.taskDate}</h4>
    </div>
    <h2 className=' text-white mt-5 text-2xl font-medium'>{task.taskTitle}</h2>
    <p className='text-sm text-white mt-5'>{task.taskDescription}</p>
<div className='flex justify-center mt-4'>
    <button className='py-2 px-2 text-sm rounded font-medium bg-red-500'>Failed</button>
    </div>
</div>

  )
}

export default FailedTask