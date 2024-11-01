import React, { useContext } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'
import { AuthContext } from '../../context/AuthProvider'
import Popup from '../others/Popup'
import { useState } from 'react'
import { useEffect } from 'react'


const AdminDashboard = (props,{data}) => {

  const [showpopup, setshowpopup] = useState(false)


useEffect(() => {
  setshowpopup(true)
  const timer=setTimeout(()=>{
    setshowpopup(false)
  },2000)

  return () => {
    clearTimeout(timer)
  }
}, [])
//  console.log(props)
//  console.log({data})
  return (

    <div className='h-screen w-full p-7 text-white px-10' >
      {showpopup&&<Popup data={data}/>}
        <Header changeUser={props.changeUser} />
        <CreateTask/>
        <AllTask/>
    </div>
      
      
  )
}

export default AdminDashboard