import React from 'react'
import {format} from 'date-fns'
import BackButton from '@/components/BackButton'
import Head from 'next/head'

const ssr = ({res}) => {
  
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
   </div>
    </div>
  )
}

export default ssr

export async function getServerSideProps() {
    const currentDate= new Date()
    const res = format(currentDate,'h:mm:ss a')
    return {
      props: {res}, 
    }
  }
