import React from 'react'
import { useState } from 'react'
const NewTask = ({task,data}) => {
  const [accept, setaccept] = useState(false)
  
  const handleClick=()=>{
    setaccept(true)
    data.taskCount.active++

data.taskCount.new++
localStorage.setItem("employees",JSON.stringify(data))
// (data?.tasks||[]).forEach(function(elem){
//   if(task.assignTo==elem.firstName){
//     elem.taskCount.active++
//     elem.taskCount.new--
//   }
// })
  }
  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
    <div className='flex justify-between items-center text-white'>
        <h3 className=' bg-red-500 rounded-md px-3 py-1'>{task.category}</h3>
        <h4 className='text-md font-medium'>{task.taskDate}</h4>
    </div>
    <h2 className=' text-white mt-5 text-2xl font-medium'>{task.taskTitle}</h2>
    <p className='text-sm text-white mt-5'>{task.taskDescription}</p>
{ accept?<div className='flex justify-center mt-4'>
            <button className=' py-2 px-2 text-sm rounded font-medium bg-green-600 w-full'>Accepted</button>
        </div>:
<div className='flex justify-center mt-4'>
    <button className='bg-green-500 py-2 px-2 text-sm rounded font-medium   w-full' onClick={handleClick}>Accept task</button>
    
</div>}
</div>

  )
}

export default NewTask