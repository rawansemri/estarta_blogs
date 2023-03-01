import React from 'react'
import './BlogDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../CustomHook/useFetch'
import {Helmet} from 'react-helmet';
function BlogDetails () {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: blog, isloaded, error } = useFetch(`http://localhost:8000/blogs/${id}`)

  async function HandleDelete() {
    await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE"
    })
    navigate("/")
  }

  if (error) return "Error";
  return (
    isloaded ? 'Loading...' :
      <div className='BlogDetailsContainer' key={blog.id}>
        {/* <Helmet>
          <meta charSet='utf-8' />
          <title>Blog Details</title>
        </Helmet> */}
        <h2>{blog.title}</h2>
        <div>{blog.author}</div>
        <div>{blog.text}</div>
        <button id='btnDelete' onClick={HandleDelete}>Delete</button>
      </div>
  )
}

export default BlogDetails;