import axios from "axios"
import Link from "next/link"
import BackButton from "@/components/BackButton"
import Head from "next/head"

const ssg = ({posts}) => {
  return (
    <div>
    <Head>
        <title>Static side Generation</title>
    </Head>
     <BackButton />
      <div>
        <h1>Static side Generation - getStaticPaths</h1> 
        <h2>List of Posts </h2><br/>
        <div>
          {posts.map((post)=>{
            return(
                <div key={post.id}>
                    <p>{post.title}</p>
                    <Link href={`/ssg/${post.id}`} >
                    <button className="btn1">Details</button>
                    </Link>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ssg

export const getStaticProps = async () =>{
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
  return {
    props:{
      posts: res.data.slice(0,3)
    }
  }
}