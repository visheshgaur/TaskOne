import React from 'react'
import { useState } from 'react'
const AcceptTask = ({task,data}) => {
  // console.log(task)
  // console.log({data})
  // console.log({data}.data.taskCount.new)
  // console.log(data.taskCount.active)
  const [completed, setcompleted] = useState(null)
const handleClick=()=>{
setcompleted(true)

data.taskCount.active--
data.taskCount.completed++
data.taskCount.new--
localStorage.setItem("employees",JSON.stringify(data))
// console.log(data)

// (data?.tasks||[]).forEach(function(elem){
//   if(task.assignTo==elem.firstName){
//     elem.taskCount.active--
//     elem.taskCount.completed++
//   }
// })

}

const handleFailedClick=()=>{

setcompleted(false)

data.taskCount.active--
data.taskCount.failed++
data.taskCount.new--
localStorage.setItem("employees",JSON.stringify(data))
console.log(completed)
}

  return (
    <div className=' flex-shrink-0 h-full w-[300px] bg-emerald-400 rounded-xl p-5'>
    <div className='flex justify-between items-center text-white'>
        <h3 className=' bg-red-500 rounded-md px-3 py-1'>{task.category}</h3>
        <h4 className='text-md font-medium'>{task.taskDate}</h4>
    </div>
    <h2 className=' text-white mt-5 text-2xl font-medium'>{task.taskTitle}</h2>
    <p className='text-sm text-white mt-5'>{task.taskDescription}</p>
{ completed? <div className='flex justify-center mt-4'>
            <button className=' py-2 px-2 text-sm rounded font-medium bg-green-600 w-full'>Completed</button>
        </div>
        : <div className='flex justify-between mt-4'>
    <button className='bg-green-500 py-2 px-2 text-sm rounded font-medium' onClick={handleClick}>Mark as Completed</button>
    <button className='bg-red-500 py-2 px-2 text-sm rounded font-medium 'onClick={handleFailedClick} >{completed==false?"Failed":"Mark as Failed"}</button>
</div>}
</div>

  )
}

export default AcceptTask