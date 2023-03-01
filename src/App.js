import './App.css';
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
const Header = lazy(() => import('./Components/Head'));
const Create = lazy(() => import('./Components/Create'));
const Blogs = lazy(() => import('./Components/Blogs'));
const BlogDetails = lazy(() => import('./Components/BlogDetails'));
const Error = lazy(() => import('./Components/Error'));
const Sign_in = lazy(() => import('./Components/Sign_in'));

function App() {

  return (
    <div className='Container'>
      <Header />
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='create' element={<Create />}></Route>
          <Route path='/' element={<Blogs />}></Route>
          <Route path='BlogDetails/:id' element={<BlogDetails />}></Route>
          <Route path='*' element={<Error />} />
          <Route path='Sign_in' element={<Sign_in />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
