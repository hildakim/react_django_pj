import './App.css';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post/:id" element={<PostDetail />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/create" element={<CreatePost />}>
        </Route>
        <Route path="/post/:id/update" element={<UpdatePost />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
