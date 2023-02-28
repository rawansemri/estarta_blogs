
import React, { useState } from 'react'
import './Blogs.css';
import useFetch from '../CustomHook/useFetch'
import Blog from './Blog';
function Blogs() {
  
    const { data, isloaded, error } = useFetch("http://localhost:8000/blogs");
    const [search, setSearch] = useState("");
    
    if (isloaded) return (<div className='loading'> Loading...</div>)
    if (error) return (<div className='error'> Error</div>)

    return (

        <div className='BlogsContainer'>
            <input className='search' type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
            {
                data?.filter((blogs) => blogs.author.toLowerCase().includes(search))
                    ?.map((blog) => (<Blog key={blog?.id} blog={blog}/>))


            }

        </div>)
};

export default Blogs;