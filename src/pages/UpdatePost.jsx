import { Button } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";


const UpdatePost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState();
  
  const [userInput, setUserInput] = useState();
  const [titleInput, setTitleInput] = useState();
  const [contentInput, setContentInput] = useState();


  const getPost = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/posts/${id}`);
    const postData = response.data;
    
    setPost(postData);
  }


  const onClickUpdatePost = async (e) => {
    e.preventDefault();
    console.log(userInput, titleInput, contentInput);
    const response = await axios.put(`http://127.0.0.1:8000/posts/${id}`, {
      user: userInput,
      title: titleInput,
      content: contentInput,
    })
    console.log(response);

    if (response.status === 200){
      navigate(`/post/${id}`);
    }
  };

  useEffect(() => {
    getPost();
    
  }, []);

  useEffect(() => {
    if (post) {
      setUserInput(post.user);
      setTitleInput(post.title);
      setContentInput(post.content);
    }
  }, [post]);


  return (
    <div>
      <form>
        <label for="user">글쓴이</label>
        <input type="text" id="user" name="user" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <br />
        <label for="title">제목</label>
        <input type="text" id="title" name="title" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
        <br />
        <label for="content">내용</label>
        <textarea name="content"id="content" value={contentInput} onChange={(e) => setContentInput(e.target.value)} />
        <br />
        <Button type="primary" htmlType="submit" onClick={onClickUpdatePost}>Update</Button>
      </form>
    </div>
  );
  
};

export default UpdatePost;