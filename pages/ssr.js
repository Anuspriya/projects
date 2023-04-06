import React from 'react'
import {format} from 'date-fns'
import BackButton from '@/components/BackButton'
import Head from 'next/head'
import { useState } from 'react'

const ssr = ({res,n1}) => {
    const [num,setNum] = useState(n1)

    const handleClick = () =>{
        setNum( n1++ )
        console.log(n1)
    }
    console.log(n1)
  return (
    <div>
    <Head>
      <title>Server Side Rendering</title>
    </Head>
    <div>
      <BackButton />
      <h1>Server Side Rendering</h1> 
      <div style={{textAlign:'center'}}>
      <p>Server-side rendering means that the content of your site is generated on the server, then sent to the browser.</p>
      <p>This is useful for SEO purposes, because search engines can "see" the content of your site before they send it to users.</p>
      </div>
      <h3 style={{textAlign:'center'}}>Get Serverside Props</h3>
      <p style={{textAlign:'center'}}>It renders the data at every request. It runs on the server-side and never on the browser.</p>
    </div><br/><br/>
    <div style={{textAlign:'center'}}>
    <h5>Current Date and Time is </h5><span>{res}</span><br/><br/>
     <button className="btn1" onClick={handleClick}>Click</button>
    <p>{num}</p>
   </div>
    </div>
  )
}

export default ssr

export async function getServerSideProps() {
    let no = 0
    let n1 = no.toString()
    const currentDate= new Date()
    const res = format(currentDate,'h:mm:ss a')
    return {
      props: {res,n1}, 
    }
  }
