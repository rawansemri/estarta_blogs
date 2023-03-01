import React, { useState, useMemo } from 'react'
import './Blogs.css';
import { Link } from 'react-router-dom'
function Blog({ blog }) {
    const [isEditable, setEditable] = useState(false);
    const [editedBlog, seteditedBlog] = useState(blog);
    const [newTitle, setNewTitle] = useState("");
    function handleEdit() {
        setEditable(true);
    }

    function handleSave(){
        seteditedBlog(prev => {
            return {
                ...prev,
                title: newTitle,
            }
        });
        setEditable(false);
    }
    function handleCancel(){
        setEditable(false);
    }
    return (
        <div className='blog'>


            {isEditable ? (<span>
                <input type={"text"} defaultValue={editedBlog?.title} onChange={(e) => setNewTitle(e.target.value)} />
                <button onClick={handleSave} id="save"> save </button>
                <button id="cancel" onClick={handleCancel}> cancel </button>
            </span>)
                :
                (<>
                    <h3>{editedBlog.title}<button id='btnEdit' onClick={handleEdit}>Edit</button></h3>
                </>
                )}
            <Link id='blog' to={`/BlogDetails/${editedBlog.id}`}> <p>By: {editedBlog.author}  </p>
                <p>{editedBlog.text}</p>
            </Link><br></br>
        </div>
    )
}

export default Blog;
