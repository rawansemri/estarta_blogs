import './App.css';
import Header from './Components/Head';
import Blogs from './Components/Blogs';
import Create from './Components/Create';
import { Routes, Route } from 'react-router-dom';
import { BlogDetails } from './Components/BlogDetails';
import { Error } from './Components/Error';
import { Sign_in } from './Components/Sign_in';
function App() {
  
  return (
    <div className='Container'>
      <Header />
      <Routes>
        <Route path='create' element={<Create />}></Route>
        <Route path='/' element={<Blogs  />}></Route>
        <Route path='BlogDetails/:id' element={<BlogDetails  />}></Route>
        <Route path='*' element={<Error />} />
        <Route path='Sign_in' element={<Sign_in  />}></Route>
      </Routes>
    </div>
  );
}

export default App;
