import { Link } from 'react-router-dom';
import './Head.css';

function Head() {
    return (
        <div className='HeadContainer'>
            <h1>Estarta Blog</h1>
            <div className='Links'>
                <Link id='home' to={"/"}>Home</Link>
                <Link className='btnNewBlog'to={"/Create"}>New Blog</Link>
            </div>
        </div>
    );
}

export default Head;
