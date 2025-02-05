import React from 'react'
import Header from '../../others/Header'
import TaskNum from '../../others/TaskNum'
import TaskList from '../../../TaskList/TaskList'
const EmployeeDashboard = () => {
  return (
    <div className='h-screen w-full p-5'>
      <Header />
      <TaskNum />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
