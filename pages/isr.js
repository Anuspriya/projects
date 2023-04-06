import React from 'react'
import {format} from 'date-fns'
import BackButton from '@/components/BackButton'
import { useState } from 'react'
import Head from 'next/head'

const isr = ({res}) => {
    const [num,setNum] = useState(0)

    const handleClick = () =>{
        setNum(num + 1)
    }
  return (
    <div>
    <Head>
      <title>Incremental Static Regeneration</title>
    </Head>
    <div>
      <BackButton />
      <h1>Incremental Static Regeneration</h1>
      <p style={{textAlign:'center'}}>Incremental static regeneration allows pages to be updated after a site has been built and deployed</p>
    </div><br/><br/>
    <div style={{textAlign:'center'}}>
     <h5>Current Date and Time is </h5><span>{res}</span><br/><br/>
     <button className="btn1" onClick={handleClick}>Click</button>
    <p>{num}</p>
   </div>
    </div>
  )
}

export default isr

export async function getStaticProps() {
    const currentDate= new Date()
    const res = format(currentDate,'h:mm:ss a')
    return {
      props: {res}, 
      revalidate: 10,
    }
}
