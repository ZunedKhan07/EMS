import React from 'react'
import Header from '../../others/Header'
import TaskNum from '../../others/TaskNum'
import TaskList from '../../../TaskList/TaskList'
const EmployeeDashboard = ({data}) => {
  return (
    <div className='h-screen w-full p-5'>
      <Header data={data} />
      <TaskNum data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
