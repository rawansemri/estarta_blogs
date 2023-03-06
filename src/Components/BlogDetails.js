import React from 'react'
import './BlogDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../CustomHook/useFetch'
import {Helmet} from 'react-helmet';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
function BlogDetails () {
  const navigate = useNavigate()
  const { id } = useParams()
  // const { data: blog, isloaded, error } = useFetch(`http://localhost:8000/blogs/${id}`)

  const {activeBlog:blog,isloaded,error}=useSelector((state)=>state.BlogsReducer)   
  const dispatch=useDispatch();


  useEffect(() => {
          async function getData() {
          dispatch({type:"LOADING"})

          try {
              const res = await fetch(`http://localhost:8000/blogs/${id}`)
              const Data = await res.json();
              dispatch({type:"GET_SINGLE",payload:Data})
          } catch (error) {
        
              dispatch({type:"FETCH_FAILD",payload:error})
          }
      }

      getData();

  
    return () => {
      dispatch({type:"CLEAN"})
console.log(8)
    }
  }, [])
  

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
        <Helmet>
          <meta charSet='utf-8' />
          <title>Blog Details</title>
        </Helmet> 
        <h2>{blog.title}</h2>
        <div>{blog.author}</div><br></br>
        <div>{blog.text}</div>
        <button id='btnDelete' onClick={HandleDelete}>Delete</button>
      </div>
  )
}

export default BlogDetails;