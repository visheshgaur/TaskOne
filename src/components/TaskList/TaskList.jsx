import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'



const TaskList = ({data}) => {
  
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto overflow-y-hidden flex flex-nowrap justify-start items-start gap-5 w-full mt-10 py-5'>
    
        {data.tasks.map((elem, key) => (
            (elem.active || elem.newTask || elem.completed || elem.failed) &&(
            <div  className='w-full flex justify-start items-center gap-5 'key={key}>
              {elem.active && <AcceptTask task={elem} data={data} />}
              {elem.newTask && <NewTask  task={elem} data={data}/>}
              {elem.completed && <CompleteTask task={elem} data={data} />}
              {elem.failed && <FailedTask  task={elem}  />}
            </div>
            )
        
          ))}

    
 

     
    </div>


  )
}

export default TaskList