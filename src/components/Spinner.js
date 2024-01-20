import React from 'react'
import './Spinner.css'
const Spinner = () => {
  return (
    <div className='flex flex-col items-center gap-y-2'>
    <div className='custom-loader'></div>
    <p className='text-bgDark text-lg font-semibold'>loading...</p>

    </div>
  )
}

export default Spinner