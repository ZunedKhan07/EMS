import React from 'react'

const TaskList = () => {
  return (
    <div>
      <div id='tasklist' className='h-[55%] flex overflow-auto items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
       
       
         <div className='h-[300px] flex-shrink-0 w-[300px] bg-indigo-500 p-5 rounded-xl py-2'> 
           <div className='flex justify-between items-center'>
           <h3 className='bg-indigo-700 font-semibold px-3 py-1 text-sm rounded'>High</h3>
             <h4 className=' font-semibold'>05 feb 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-bold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio odit reiciendis iste debitis laudantium quod deserunt perferendis hic quae amet temporibus excepturi ad nulla vero, illo voluptates. Veniam, unde ea?
           </p>
       </div>

       <div className='h-[300px] flex-shrink-0 w-[300px] bg-lime-400 p-5 rounded-xl py-2'> 
           <div className='flex justify-between items-center'>
           <h3 className='bg-lime-700 font-semibold px-3 py-1 text-sm rounded'>High</h3>
             <h4 className=' font-semibold'>05 feb 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-bold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio odit reiciendis iste debitis laudantium quod deserunt perferendis hic quae amet temporibus excepturi ad nulla vero, illo voluptates. Veniam, unde ea?
           </p>
       </div>

       <div className='h-[300px] flex-shrink-0 w-[300px] bg-orange-400 p-5 rounded-xl py-2'> 
           <div className='flex justify-between items-center'>
           <h3 className='bg-orange-700 font-semibold px-3 py-1 text-sm rounded'>High</h3>
             <h4 className=' font-semibold'>05 feb 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-bold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio odit reiciendis iste debitis laudantium quod deserunt perferendis hic quae amet temporibus excepturi ad nulla vero, illo voluptates. Veniam, unde ea?
           </p>
       </div>

       <div className='h-[300px] flex-shrink-0 w-[300px] bg-red-400 p-5 rounded-xl py-2'> 
           <div className='flex justify-between items-center'>
           <h3 className='bg-red-700 font-semibold px-3 py-1 text-sm rounded'>High</h3>
             <h4 className=' font-semibold'>05 feb 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-bold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio odit reiciendis iste debitis laudantium quod deserunt perferendis hic quae amet temporibus excepturi ad nulla vero, illo voluptates. Veniam, unde ea?
           </p>
       </div>
      </div>
    </div>
  )
}

export default TaskList
