import { useEffect, useState } from "react";
import axios from 'axios';
import Post from '../components/Post';
import { Button } from 'antd';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  const getPosts = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/posts');
  
    setPosts(data);
    setLoading(false);
  }

  useEffect( () => {
    getPosts();
  }, []);

  return ( <div>
    {loading ? "loading..." : 
    <div>
      <h1>post페이지</h1>
      <ul>
      {posts.map((post) => 
        <Post 
          key={post.id}
          item={post} 
        />)}
      </ul>
    </div>}
    <Button type="primary" href="/create">
      Create go!
    </Button>
  </div>);

};

export default Home;

