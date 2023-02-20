
import React from 'react'
import './Blogs.css';
import useFetch from '../CustomHook/useFetch'
import { Link } from 'react-router-dom'
function Blogs() {

    const {data, isloaded, error} = useFetch("http://localhost:8000/blogs")
    if(isloaded) return "loading..."
    if(error) return "Error"
    return (
     
        <div className='BlogsContainer'>
            
            {
                data?.map((blogs)=> (<div className='blog'>
                    <div key={blogs.id}></div>
                    <Link  id='blog' to={`/BlogDetails/${blogs.id}`}>
                    <h3>{blogs.title}</h3>
                    <p>By: {blogs.author}</p>
                    <p>{blogs.text}</p>
                    </Link>
                    <br></br>
                </div>))
                    
                    
                }

        </div>)
};

export default Blogs;