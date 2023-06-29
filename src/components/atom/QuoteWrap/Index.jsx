import React from 'react'

const QuoteWrap = (props) => {
  return (
    <div className='bg-slate-700 rounded-md shadow-2xl shadow-slate-800 w-1/2 h-52 flex flex-col justify-center items-center p-6'>
      {props.children}
    </div>
  )
}

export default QuoteWrap