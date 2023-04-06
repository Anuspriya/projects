import React from 'react'
import {format} from 'date-fns'
import BackButton from '@/components/BackButton'
import Head from 'next/head'

const staticProps = ({res}) => {
  return (
    <div>
    <Head>
        <title>Static side Generation</title>
    </Head>
    <div>
      <BackButton />
      <h1>Static side Generation</h1>
      <p style={{textAlign:'center'}}>Static Generation describes the process of compiling and rendering a website or app at build time</p>
      <h3 style={{textAlign:'center'}}>Get Static Props</h3>
      <p style={{textAlign:'center'}}>It helps generates the HTML page on the build time. It is efficient for static data that changes less frequently.</p>
    </div><br/><br/>
     <div style={{textAlign:'center'}}>
     <h5 style={{textAlign:'center'}}>Current Date and Time is </h5><span>{res}</span>
   </div>
   </div>
  )
}

export default staticProps

export async function getStaticProps() {
    const currentDate= new Date()
    const res = format(currentDate,'h:mm:ss a')
    return {
      props: {res}, 
    }
  }
