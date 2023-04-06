import React from 'react'
import {format} from 'date-fns'
import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

const ssgid = ({res,post}) => {
  console.log('post',post)
  return (
    <div>
    <Head>
      <title>Static side Generation</title>
    </Head>
    <div>
     <Link href='/ssg' className='btn'>Back</Link>
     <div>
         <h4 style={{textAlign:'center'}}>Title:{post && post.title}</h4> 
      </div><br/><br/>
      <h1>Static side Generation</h1>
      <p style={{textAlign:'center'}}>Static Generation describes the process of compiling and rendering a website or app at build time</p>
      <h3 style={{textAlign:'center'}}>Get Static Paths</h3>
      <p style={{textAlign:'center'}}>getStaticPaths allows you to control which pages are generated during the build instead of on-demand with fallback</p>
    </div><br/><br/>
    <div style={{textAlign:'center'}}>
    <h5 style={{textAlign:'center'}}>Current Date and Time is </h5><span>{res}</span>
    </div>
    </div>
  )
}

export default ssgid

export const getStaticPaths = async()=>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  const data = res.data
  const paths = data.map(post=>{
    return{
      params:{
        id: `${post.id}`
      }
    }
  })
  return{
    paths:[
      {
        params: {id: '1'},
      },
      {
        params: {id: '2'},
      },
      {
        params: {id: '3'},
      }
    ],
    paths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const {params} = context
    const det = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const currentDate= new Date()
    const res = format(currentDate,'h:mm:ss a')
    return {
      props: {
        res,
        post:det.data,
      }, 
    }
}