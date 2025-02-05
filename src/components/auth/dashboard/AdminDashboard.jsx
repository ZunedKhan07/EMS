import React from 'react'
import Header from '../../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
      <Header />

      <div className='p-5 mt-7 bg-[#1c1c1c] rounded'>
        <form className='flex items-start justify-between w-full flex-wrap'>
       
<div className='w-1/2'>

<div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Text Title</h3>
      <input className='text-sm w-[450px] py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Make a Ui Desing'/>
      </div>

        <div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
      <input className='text-sm w-[450px] py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' type="date" />
      </div>
        
        <div>
        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
        <input className='text-sm w-[450px] py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Employee Name' name="" id="" />
        </div>

       <div>
       <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
        <input className='text-sm w-[450px] py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400' type="text" placeholder='Design, Dev, etc. ' name="" id="" />
       </div>

</div>

      <div className='flex-col flex w-2/5 items-start'>
      <h3 className='text-sm text-gray-300 mb-0.5'>Discription</h3>
      <textarea className='w-full w-[450px] h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols='50' rows={12} aria="10" ></textarea>
      <br />
      <button className='bg-slate-700 w-[450px] rounded py-2 px-6'>Create Task</button>
      </div>

        
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
