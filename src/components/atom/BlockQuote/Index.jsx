import React from 'react'

const BlockQuote = ({quote, className}) => {
  return (
    <blockquote className={`${className} 'mb-2 text-slate-100 text-center w-24'`}>{quote}</blockquote>
  )
}

export default BlockQuote