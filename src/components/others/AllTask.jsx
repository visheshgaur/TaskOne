import React from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'
const AllTask = () => {
    const [userData,setUserData]=useContext(AuthContext)
 
  return (
   
//     <div  id="web"className='p-5 bg-[#1c1c1c] mt-7 rounded h-60 overflow-hidden '>
//         <div className='bg-red-400 mb-2 py-5 px-3 flex items-center justify-between rounded  h-[20%]'>
//      <h2 className='w-1/5 font-medium text-xl'>Employee Name</h2>
//      <h3 className='w-1/5 font-medium text-xl '>New Task</h3>
//      <h3 className='w-1/5 font-medium text-xl'>Active Task</h3>
//      <h3 className='w-1/5 font-medium text-xl'>Completed</h3>
//      <h3 className='w-1/5 font-medium text-xl'>Failed</h3>
//  </div>
 
//        <div id='web' className='h-[80%] overflow-auto' >
        
//          {userData.employees.map(function(elem ,idx){
     
//      return <div className='border-2 border-emerald-500 mb-2 py-5 px-3 flex items-center justify-between rounded h-[20%] ' key={idx}>
//      <h2 className='w-1/5 text-white font-medium text-xl'>{elem.firstName}</h2>
//      <h3 className='w-1/5 text-blue-600 font-medium text-xl'>{elem.taskCount.new}</h3>
//      <h3 className='w-1/5 text-yellow-400 font-medium text-xl'>{elem.taskCount.active}</h3>
//      <h3 className='w-1/5 text-white font-medium text-xl'>{elem.taskCount.completed}</h3>
//      <h3 className='w-1/5 text-red-600 font-medium text-xl'>{elem.taskCount.failed}</h3>
//  </div>
//         })}
//        </div>
//     </div>
<div id="web" className="p-5 bg-[#1c1c1c] mt-7 rounded h-60 overflow-hidden">
  <div className="bg-red-400 mb-2 py-3 px-2 flex items-center justify-between gap-x-2 rounded h-[20%]">
    <h2 className="w-1/5 font-medium text-sm md:text-lg lg:text-xl truncate">Employee Name</h2>
    <h3 className="w-1/5 font-medium text-sm md:text-lg lg:text-xl truncate">New Task</h3>
    <h3 className="w-1/5 font-medium text-sm md:text-lg lg:text-xl truncate">Active Task</h3>
    <h3 className="w-1/5 font-medium text-sm md:text-lg lg:text-xl truncate">Completed</h3>
    <h3 className="w-1/5 font-medium text-sm md:text-lg lg:text-xl truncate">Failed</h3>
  </div>

  <div id="web" className="h-[80%] overflow-auto">
    {userData.employees.map((elem, idx) => (
      <div
        className="border-2 border-emerald-500 mb-2 py-3 px-2 flex items-center justify-between gap-x-2 rounded h-[20%]"
        key={idx}
      >
        <h2 className="w-1/5 text-white font-medium text-sm md:text-lg lg:text-xl truncate">{elem.firstName}</h2>
        <h3 className="w-1/5 text-blue-600 font-medium text-sm md:text-lg lg:text-xl truncate">{elem.taskCount.new}</h3>
        <h3 className="w-1/5 text-yellow-400 font-medium text-sm md:text-lg lg:text-xl truncate">{elem.taskCount.active}</h3>
        <h3 className="w-1/5 text-white font-medium text-sm md:text-lg lg:text-xl truncate">{elem.taskCount.completed}</h3>
        <h3 className="w-1/5 text-red-600 font-medium text-sm md:text-lg lg:text-xl truncate">{elem.taskCount.failed}</h3>
      </div>
    ))}
  </div>
</div>

        
        
    
  )
}

export default AllTask