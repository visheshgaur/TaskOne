import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import Popup from '../others/Popup'
import { useState } from 'react'
import { useEffect } from 'react'
const EmployeeDashboard = (props,{data}) => {
  const [showPopUp, setshowPopUp] = useState(false)

  useEffect(() => {
   setshowPopUp(true)
  const timer=setTimeout(()=>{
    setshowPopUp(false)
  },3000)
    return ()=>{
      clearTimeout(timer)
    }
  },[])
  

  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
      {showPopUp && <Popup data={props.data}/>}
        <Header  changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard