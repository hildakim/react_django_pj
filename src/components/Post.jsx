import { Card } from 'antd';
import { Link } from "react-router-dom";

const Post = ({ item }) => {
  const {
    id,
    title,
    content,
  } = item;

  return (
    <Card title={title} extra={<Link to={`/post/${id}`}>More</Link>} style={{ width: 300 }}>
      <p>{content}</p>
    </Card>
  );
  

};

export default Post;