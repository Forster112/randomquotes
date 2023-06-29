import React from 'react'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className='bg-slate-700 rounded-md shadow-2xl shadow-slate-800 cursor-pointer w-15 h-14 text-lg font-semibold text-center text-slate-200'>MORE QUOTES</button>
  )
}

export default Button