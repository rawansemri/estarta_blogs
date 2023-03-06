import React ,{useState} from 'react'
import './Frame.css'

function Frame({ children }) {
    const [darkMood, setDarkMood] = useState(false);

    return (
        <> {darkMood ? <div className='DarkFrame'>
            <button className='darkMood' onClick={() => setDarkMood(!darkMood)}>LightMode</button>
            {children}
        </div> : <div className='Frame'>
            <button className='darkMood' onClick={() => setDarkMood(!darkMood)}>DarkMode</button>
            {children}
        </div>}

        </>
    )
}
export default Frame;
