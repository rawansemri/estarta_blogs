import React from 'react'
import './Create.css';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {Helmet} from 'react-helmet';
export const Create = () => {

  const navigate = useNavigate();
  const myRef = useRef(
    {
      id: crypto.randomUUID().toString(),
      title: '',
      author: '',
      text: '',
    }
  );

  console.log(myRef);
  const handleChange = (e) => {
    myRef.current = { ...myRef.current, [e.target.name]: e.target.value }
  }


  function AddInfo(e) {
    e.preventDefault();
    console.log(myRef);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myRef.current)
    })

    navigate('/');
  }

  return (
    <div className='Create'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Create Blog</title>
      </Helmet>
      <form onSubmit={AddInfo}>
        <div className='AddBlog'>

          <h2>Add New Blog</h2>
          <label className='addBlogInfo'>Blog Title</label><br></br>
          <input name='title' type='text' id='title' onChange={handleChange}></input><br></br>

          <label className='addBlogInfo'>Blog Body</label><br></br>
          <textarea name='text' id='body' type='text' onChange={handleChange}></textarea><br></br>

          <label className='addBlogInfo'>Blog Author</label><br></br>
          <input name='author' type='text' id='author' onChange={handleChange}></input><br></br>

          <button id='btnAdd' type='submit'> Add</button>
        </div>
      </form>
    </div>
  )

}
export default Create;