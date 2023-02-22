
import React, { useState, useEffect } from 'react'
import './Blogs.css';
import useFetch from '../CustomHook/useFetch'
import { Link } from 'react-router-dom'
function Blogs() { 
    const [refresh, setRefresh] = useState(true);
    const { data, isloaded, error } = useFetch("http://localhost:8000/blogs", refresh);
    const [search, SetSearch] = useState("");
    const [title, setTitle] = useState("");
    const [Data, setData] = useState(null);
    const [EditedData, setEditedData] = useState([]);
    function close(blog_id) {
        setEditedData((prev) => {
            let Arr = prev?.filter((id) => id != blog_id);
            return Arr == "" ? [] : Arr;
        });
    }
    useEffect(() => {
        if (Data) Submit();
    }, [Data]);
    const Submit = async () => {
        try {
            await fetch(`http://localhost:8000/Blogs/${Data.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Data),
            });
        } catch (error) {
            console.log(error);
        }
        setRefresh(!refresh);
    };


    if (isloaded) return "loading..."
    if (error) return "Error"


    return (

        <div className='BlogsContainer'>
            <input className='search' type="text" placeholder="Search" onChange={(e) => SetSearch(e.target.value.toLowerCase())} />
            {
                data?.filter((blogs) => blogs.author.toLowerCase().includes(search))
                    ?.map((blog, i) => (<div className='blog'>
                        {!EditedData?.includes(blog?.id) ? (
                            <><div key={blog.id}></div>
                                <h3>{blog.title}<button id='btnEdit' onClick={() => { setEditedData((prev) => [...prev, blog?.id]); setTitle(blog?.title); }}>Edit</button></h3>
                                </>
                        ) : (
                            <span>
                                <input type={"text"} defaultValue={title} onChange={(e) => {setTitle(e.target.value);}} />
                                <button onClick={() => { setData({ ...blog, title: title }); close(blog?.id); }} id="save"> save </button>
                                <button id="cancel" onClick={() => {close(blog?.id); }}> cancel </button>
                            </span>
                        )
                        }<Link id='blog' to={`/BlogDetails/${blog.id}`}> <p>By: {blog.author}  </p>
                        <p>{blog.text}</p>
                    </Link><br></br>
                    </div>))


            }

        </div>)
};

export default Blogs;