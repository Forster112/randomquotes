import React from 'react'
import { useEffect, useState } from 'react'


import QuoteWrap from '../../atom/QuoteWrap/Index'
import BlockQuote from '../../atom/BlockQuote/Index'
import Cite from '../../atom/Cite/Index'
import Button from '../../atom/Button/Index'

import "./style.css"

const Quotes = () => {

  const [quote, setQuote] = useState({ isLoading: true, newQuote: "", author: "" })
  const [error, setError] = useState("");

  async function next() {
    setQuote({...quote, isLoading: true})
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json()
    if (response.ok) {
      setQuote({ isLoading: false, newQuote: data.content, author: data.author })
    } else {
      setQuote({...quote, isLoading: false})
      setError("An error occured")
    }
  }
  useEffect(() => {
    next()
  }, [])


  return (
    <><QuoteWrap>{!quote.isLoading ? !error ? <><BlockQuote quote={quote.newQuote}/><Cite cite={quote.author}/></> : <BlockQuote className="text-red-600" quote={error}/> : <div class="loadingio-spinner-rolling-hu7ewgco7l"><div class="ldio-zgu3e29es8">
<div></div>
</div></div>}</QuoteWrap><Button onClick={next}/></>
  )
}

export default Quotes