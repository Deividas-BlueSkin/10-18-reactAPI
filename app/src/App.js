import './App.css';
import { Route, Routes } from 'react-router-dom'
import UserPage from './AppParts/UserPage/UserPage';
import PostPage from './AppParts/PostPage/PostPage';
import AlbumPage from './AppParts/AlbumPage/AlbumPage';
import MainPage from './AppParts/MainPage/MainPage';
import SinglePostPage from './AppParts/PostPage/SinglePostPage';
import SingleUserPage from './AppParts/UserPage/SingleUserPage';
import SingleAlbumPage from './AppParts/AlbumPage/SingleAlbumPage';
import HeaderNav from './AppParts/HeaderNav/HeaderNav';
import SearchPage from './AppParts/SearchPage/SearchPage';


function App() {
  return (
    <div>


      <HeaderNav />

      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/users' element={<UserPage />} />
        <Route path='/users/:id' element={<SingleUserPage />} />

        <Route path='/posts' element={<PostPage />} />
        <Route path='/posts/:id' element={<SinglePostPage />} />

        <Route path='/albums' element={<AlbumPage />} />
        <Route path='/albums/:id' element={<SingleAlbumPage />} />

        <Route path='/search' element={<SearchPage />} />

        <Route path='*' element={<h1>404: Page not found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
