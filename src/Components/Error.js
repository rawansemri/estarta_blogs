import React from 'react'
import './Error.css';
import {Helmet} from 'react-helmet';
export const Error = () => {
    return (
        <div className='error'>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Error</title>
            </Helmet>
            <h2>404</h2>
            <h3>Page not found</h3>
        </div>
    )
}
