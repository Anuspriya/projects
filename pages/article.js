import React from 'react'
import axios from 'axios'

const article = ({articles}) => {
  return (
    <>
    <div>
      {articles.map((article)=>{
            return(
                <div key={article.id}>
                    <p style={{fontWeight:'600'}}>Article Name:&nbsp;<span style={{fontWeight:'400'}}>{article.aname} </span></p>
                    <p style={{fontWeight:'600'}}>Author:&nbsp;<span style={{fontWeight:'400'}}>{article.author} </span></p>
                    <hr/>
                </div>
            )
          })}
    </div>
    </>
  )
}

export default article

export const getStaticProps = async () =>{
    const res = await axios.get('http://localhost:5000/api/articles/getAll')
    return {
      props:{
        articles: res.data,
        revalidate: 10,
      }
    }
  }
