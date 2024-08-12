import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
  <div className='max-w-screen-2xl container max-auto md:px-20 px-4 '>
<div className=' mt-28 items-center justify-center  text-center '>
    <h1 className='text-2xl  md:text-4xl '>
        we're delighted to have you <span className='text-pink-400'>Here :) </span>
    </h1>
    <p className='mt-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nam nostrum porro tempora maiores alias deleniti esse veritatis explicabo quo itaque quia iure laboriosam fugit ipsam odio delectus, laborum quis recusandae possimus numquam. Adipisci, qui.
    </p>

    <Link to={'/'}>
    <button className='bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
    </Link>
    
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-4">
    {
       list.map((item)=>(
<Cards key={item.id} item={item} />
       ))
        
    }
</div>

  </div>
    </>
  )
}

export default Course