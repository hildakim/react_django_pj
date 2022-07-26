import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onClickCreatePost = async (e) => {
    e.preventDefault();
    const user = form.getFieldValue("user");
    const title = form.getFieldValue("title");
    const content = form.getFieldValue("content");
    console.log(user, title, content);

    const response = await axios.post('http://127.0.0.1:8000/posts', {
      user: user,
      title: title,
      content: content,
    })
    console.log(response);

    if (response.status === 201){
      navigate("/");
    }
  };

  return (<Form
    form={form}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    autoComplete="off"
  >
    <Form.Item
      label="User"
      name="user"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your title!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="content"
      name="content"
      rules={[
        {
          required: true,
          message: 'Please input your content!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={onClickCreatePost}>
        Submit
      </Button>
    </Form.Item>
  </Form>);
    
};

export default CreatePost;