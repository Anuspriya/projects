import React from 'react'
import BackButton from '@/components/BackButton'
import { useState,useEffect } from 'react'
import dynamic from "next/dynamic";
import Head from 'next/head'

const csr = () => {
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>clearInterval(interval)
    },[])

  return (
    <div>
    <Head>
      <title>Client Side Rendering</title>
    </Head>
    <div>
        <BackButton />
        <h1>Client Side Rendering</h1>
        <p style={{textAlign:'center'}}>In client side rendering , you are completely running ReactJS on the browser.</p>
    </div><br/><br/>
    <div style={{textAlign:'center'}}>
    <h5>Current Date and Time is </h5><span>{time.toLocaleTimeString()}</span>
    
   </div>
    </div>
  )
}

export default dynamic (() => Promise.resolve(csr), {ssr: false})
