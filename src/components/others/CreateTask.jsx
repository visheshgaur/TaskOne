import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, settaskTitle] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')
  const [taskdescription, settaskdescription] = useState('')
  // const [Newtask, setNewtask] = useState({})


  const submitHandler=(e)=>{
e.preventDefault()
const newTask={
  taskTitle, taskDate, category, taskdescription,active:true, newTask:true, completed:false, failed:false
}

// setNewtask({taskTitle, taskDate, category, taskdescription,active:true, newTask:true, completed:false, failed:false})
const data=userData.employees
console.log(data)
data.forEach(function(elem){
if(assignTo==elem.firstName){
  console.log("yahi h")


elem.tasks.push(newTask)
elem.taskCount.new++
console.log(elem)


}
})
settaskTitle('')
settaskDate('')
setassignTo('')
setcategory('')
settaskdescription('')

  }
  
  return (
    // <div className='text-white p-5 bg-[#1c1c1c] mt-7 rounded h-80' >
    //         <form onSubmit={(e)=>{
    //           submitHandler(e)
    //         }} 
    //         className=' w-full flex-wrap  flex items-start justify-between'>
    //             <div className='w-1/2 '>
    //             <div>
    //             <div>
    //             <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Task Title</h3>
    //             <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3' type='text' placeholder='enter title'
    //             value={taskTitle}
    //             onChange={(e)=>{
    //               settaskTitle(e.target.value)
                 
    //             }}
    //             ></input>
    //             </div>
    //           <h3 className='text-sm text-gray-300 mb-0.5 font-medium' >Date</h3>
    //           <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3 ' type='date'
    //           value={taskDate}
    //           onChange={(e)=>{
    //             settaskDate(e.target.value)
    //           }}></input>
    //           </div>
    //         <div>
    //         <h3  className='text-sm text-gray-300 mb-0.5 font-medium'>Assign To</h3>
    //         <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3' type='text' placeholder='enter name'
    //         value={assignTo}
    //         onChange={(e)=>{
    //           setassignTo(e.target.value)
    //         }}></input>
    //         </div>
    //            <div>
    //            <h3  className='text-sm text-gray-300 mb-0.5 font-medium'>Category</h3>
    //            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-3' type='text' placeholder='enter category'
    //            value={category}
    //            onChange={(e)=>{
    //             setcategory(e.target.value)
    //            }}></input>
    //            </div>
    //             </div>
               
    //            <div className='w-2/5 flex flex-col items-start'>
    //            <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Description</h3>
    //            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] mb-3'rows={5} cols={30} placeholder='enter description'
    //            value={taskdescription}
    //            onChange={(e)=>{
    //             settaskdescription(e.target.value)
    //            }}></textarea>
    //            <button className='  mt-5 w-full bg-emerald-500 px-5 py-2 text-white font-medium rounded hover:bg-emerald-600'>Create Task</button>
    //            </div>
              
                
    //         </form>
    //     </div>
    <div className='text-white p-5 bg-[#1c1c1c] mt-7 rounded h-80 overflow-y-auto'>
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className='w-full flex flex-wrap items-start justify-between'
    >
      <div className='w-full md:w-1/2'>
        <div className='mb-3'>
          <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Task Title</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400'
            type='text'
            placeholder='Enter title'
            value={taskTitle}
            onChange={(e) => {
              settaskTitle(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Date</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400'
            type='date'
            value={taskDate}
            onChange={(e) => {
              settaskDate(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Assign To</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400'
            type='text'
            placeholder='Enter name'
            value={assignTo}
            onChange={(e) => {
              setassignTo(e.target.value);
            }}
          />
        </div>
        <div className='mb-3'>
          <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Category</h3>
          <input
            className='text-sm py-1 px-2 w-full rounded outline-none bg-transparent border border-gray-400'
            type='text'
            placeholder='Enter category'
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
      </div>
  
      <div className='w-full md:w-2/5 flex flex-col items-start'>
        <h3 className='text-sm text-gray-300 mb-0.5 font-medium'>Description</h3>
        <textarea
          className='w-full h-32 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-3'
          rows={4}
          placeholder='Enter description'
          value={taskdescription}
          onChange={(e) => {
            settaskdescription(e.target.value);
          }}
        />
        <button className='mt-5 w-full bg-emerald-500 px-5 py-2 text-white font-medium rounded hover:bg-emerald-600'>
          Create Task
        </button>
      </div>
    </form>
  </div>
  
  )
}

export default CreateTask