
import React, { useState } from 'react'
import { lazy, Suspense } from 'react'
import './Blogs.css';
import useFetch from '../CustomHook/useFetch'
import { Helmet } from 'react-helmet';
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react';
const Blog = lazy(() => import('./Blog'));
const Frame = lazy(() => import('./Frame'));

function Blogs() {
    const {data,isloaded,error}=useSelector((state)=>state.BlogsReducer)   
    const dispatch=useDispatch();
     const [search, setSearch] = useState("");

     useEffect(() => {

        async function getData() {
            dispatch({type:"LOADING"})

            try {
                const res = await fetch("http://localhost:8000/blogs")
                const Data = await res.json();
                dispatch({type:"FETCH_SUCCESS",payload:Data})
            } catch (error) {
          
                dispatch({type:"FETCH_FAILD",payload:error})
            }
        }

        getData();

    }, [])

    if (isloaded) return (<div className='loading'> Loading...</div>)
    if (error) return (<div className='error'> Error</div>)

    return (

        <div className='BlogsContainer'>
            <Suspense fallback='Loading...'>
                <div>
                    <Helmet>
                        <meta charSet='utf-8' />
                        <title>Blogs</title>
                    </Helmet>
                </div>

                <input className='search' type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                <Frame>
                {
                    data?.filter((blogs) => blogs.author.toLowerCase().includes(search))
                        ?.map((blog) => (<Blog key={blog?.id} blog={blog} />))


                }</Frame>
            </Suspense>
        </div>)
};

export default Blogs;