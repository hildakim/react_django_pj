import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Comment, Button } from 'antd';

const PostDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState();
  const navigate = useNavigate();

  const getPost = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`);
    const postData = response.data;
    const commentData = response.data.comments;

    setPost(postData);
    setComments(commentData);
  }

  const deletePost = async () => {
    const response = await axios.delete(`http://127.0.0.1:8000/posts/${id}`);
    console.log(response);
    if (response.status === 204){
      navigate("/");
    }
  }

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    if (post) {
      setLoading(false);
    }
  }, [post, comments]);

  return (<div>
    <h2>PostDetail</h2>
    <Button type="primary" danger onClick={deletePost}>
      삭제!
    </Button>
    <Button type="primary" href={`/post/${id}/update`}>
      수정
    </Button>
    {loading ? "loading.." : 
      <div>
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.user}</p>
          <p>최근 수정:{post.updatedAt}</p>
          <p>등록일: {post.createdAt}</p>
        </div>
        {comments.length && <div>
          {comments.map(({ id, user, comment, createdAt }) => 
            <Comment
              key={id}
              author={user}
              content={
                <p>
                  {comment}
                </p>
              }
            />
          )}
        </div>
        }
      </div>
    }
  </div>);

};

export default PostDetail;