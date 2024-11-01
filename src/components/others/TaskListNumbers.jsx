import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    // <div className=' mt-10 flex gap-5 justify-between screen'>
    //     <div className='py-6 px-9 rounded-xl w-[45%] bg-red-400'>
    //         <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
    //         <h3 className='text-xl font-medium'>New Task</h3>
    //     </div>
    //     <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-400'>
    //         <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
    //         <h3 className='text-xl font-medium'>Completed Task</h3>
    //     </div>
    //     <div className='py-6 px-9 rounded-xl w-[45%] bg-green-400'>
    //         <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
    //         <h3 className='text-xl font-medium'>Accepted Task</h3>
    //     </div>
    //     <div className='py-6 px-9 rounded-xl w-[45%] bg-yellow-400'>
    //         <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
    //         <h3 className='text-xl font-medium'>Failed Task</h3>
    //     </div>


    // </div>
    <div className='mt-10 flex flex-wrap gap-5 justify-between'>
    <div className='py-6 px-9 rounded-xl w-full sm:w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.new}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
    </div>
    <div className='py-6 px-9 rounded-xl w-full sm:w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
    </div>
    <div className='py-6 px-9 rounded-xl w-full sm:w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
    </div>
    <div className='py-6 px-9 rounded-xl w-full sm:w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
    </div>
</div>
  )
}

export default TaskListNumbers