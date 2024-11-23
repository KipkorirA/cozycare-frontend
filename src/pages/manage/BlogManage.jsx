
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Button, Modal, Form, Input, message, Space } from 'antd';
// import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// const BlogManage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [form] = Form.useForm();
//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get('https://cozycare-backend-g56w.onrender.com/blogs');
//       setBlogs(response.data);
//     } catch (error) {
//       message.error('Failed to fetch blogs');
//     }
//   };

//   const handleAdd = () => {
//     setEditingId(null);
//     form.resetFields();
//     setIsModalVisible(true);
//   };

//   const handleEdit = (record) => {
//     setEditingId(record.id);
//     form.setFieldsValue(record);
//     setIsModalVisible(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://cozycare-backend-g56w.onrender.com/blogs/${id}`);
//       message.success('Blog deleted successfully');
//       fetchBlogs();
//     } catch (error) {
//       message.error('Failed to delete blog');
//     }
//   };

//   const handleSubmit = async (values) => {
//     try {
//       if (editingId) {
//         await axios.put(`https://cozycare-backend-g56w.onrender.com/blogs/${editingId}`, values);
//         message.success('Blog updated successfully');
//       } else {
//         await axios.post('https://cozycare-backend-g56w.onrender.com/blogs', values);
//         message.success('Blog added successfully');
//       }
//       setIsModalVisible(false);
//       fetchBlogs();
//     } catch (error) {
//       message.error('Failed to save blog');
//     }
//   };

//   const columns = [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       key: 'title',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//       ellipsis: true,
//     },
//     {
//       title: 'Image URL',
//       dataIndex: 'image_url',
//       key: 'image_url',
//       ellipsis: true,
//     },
//     {
//       title: 'Video URL',
//       dataIndex: 'video_url',
//       key: 'video_url',
//       ellipsis: true,
//     },
//     {
//       title: 'Created At',
//       dataIndex: 'created_at',
//       key: 'created_at',
//       render: (text) => new Date(text).toLocaleString(),
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (_, record) => (
//         <Space>
//           <Button
//             type="primary"
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record)}
//           />
//           <Button
//             type="primary"
//             danger
//             icon={<DeleteOutlined />}
//             onClick={() => handleDelete(record.id)}
//           />
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: '24px' }}>
//       <Button
//         type="primary"
//         icon={<PlusOutlined />}
//         onClick={handleAdd}
//         style={{ marginBottom: '16px' }}
//       >
//         Add Blog
//       </Button>

//       <Table columns={columns} dataSource={blogs} rowKey="id" />

//       <Modal
//         title={editingId ? 'Edit Blog' : 'Add Blog'}
//         open={isModalVisible}
//         onCancel={() => setIsModalVisible(false)}
//         footer={null}
//       >
//         <Form
//           form={form}
//           layout="vertical"
//           onFinish={handleSubmit}
//         >
//           <Form.Item
//             name="title"
//             label="Title"
//             rules={[{ required: true, message: 'Please input the title!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: 'Please input the name!' }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="description"
//             label="Description"
//             rules={[{ required: true, message: 'Please input the description!' }]}
//           >
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item
//             name="image_url"
//             label="Image URL"
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             name="video_url"
//             label="Video URL"
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               {editingId ? 'Update' : 'Submit'}
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default BlogManage;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, message, Space, Upload } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';

const BlogManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [fileList, setFileList] = useState({ image: [], video: [] });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/blogs');
      setBlogs(response.data);
    } catch (error) {
      message.error('Failed to fetch blogs');
    }
  };

  const handleAdd = () => {
    setEditingId(null);
    form.resetFields();
    setIsModalVisible(true);
    setFileList({ image: [], video: [] }); // Reset file lists when adding new blog
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setFileList({
      image: record.image_url ? [{ url: record.image_url }] : [],
      video: record.video_url ? [{ url: record.video_url }] : [],
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/blogs/${id}`);
      message.success('Blog deleted successfully');
      fetchBlogs();
    } catch (error) {
      message.error('Failed to delete blog');
    }
  };

  const handleSubmit = async (values) => {
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('name', values.name);
      formData.append('description', values.description);
  
      // Handle image upload
      const { image } = fileList;
      if (image && image[0]) {
        formData.append('image', image[0].originFileObj);
      }
  
      // Handle video upload
      const { video } = fileList;
      if (video && video[0]) {
        formData.append('video', video[0].originFileObj);
      }
  
      const url = editingId
        ? `http://127.0.0.1:5000/blogs/${editingId}`
        : 'http://127.0.0.1:5000/blogs';
  
      const method = editingId ? 'put' : 'post';
  
      const response = await axios[method](url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      message.success(editingId ? 'Blog updated successfully' : 'Blog added successfully');
      setIsModalVisible(false);
      fetchBlogs();
    } catch (error) {
      message.error('Failed to save blog');
    }
  };
  
  const handleFileChange = (info, type) => {
    const fileListUpdated = { ...fileList };
    fileListUpdated[type] = info.fileList;
    setFileList(fileListUpdated);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Image URL',
      dataIndex: 'image_url',
      key: 'image_url',
      ellipsis: true,
    },
    {
      title: 'Video URL',
      dataIndex: 'video_url',
      key: 'video_url',
      ellipsis: true,
    },
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => new Date(text).toLocaleString(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        style={{ marginBottom: '16px' }}
      >
        Add Blog
      </Button>

      <Table columns={columns} dataSource={blogs} rowKey="id" />

      <Modal
        title={editingId ? 'Edit Blog' : 'Add Blog'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="image_url"
            label="Image"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
          >
            <Upload
              action="https://your-upload-endpoint.com"
              listType="picture-card"
              fileList={fileList.image}
              onChange={(info) => handleFileChange(info, 'image')}
              beforeUpload={() => false} // Prevent automatic upload
            >
              {fileList.image.length < 1 && '+ Upload Image'}
            </Upload>
          </Form.Item>
          <Form.Item
            name="video_url"
            label="Video"
            valuePropName="fileList"
            getValueFromEvent={(e) => e && e.fileList}
          >
            <Upload
              action="https://your-upload-endpoint.com"
              listType="picture-card"
              fileList={fileList.video}
              onChange={(info) => handleFileChange(info, 'video')}
              beforeUpload={() => false} // Prevent automatic upload
            >
              {fileList.video.length < 1 && '+ Upload Video'}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingId ? 'Update' : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BlogManage;
