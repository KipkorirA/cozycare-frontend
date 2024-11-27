import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Modal, Form, Input, message, Space, Upload } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const BlogManage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [fileList, setFileList] = useState({ image: [], video: [] });
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('https://cozycare-backend-g56w.onrender.com/blogs');
      setBlogs(data);
    } catch {
      message.error('Failed to fetch blogs');
    }
  };

  const handleAdd = () => {
    setEditingId(null);
    form.resetFields();
    setIsModalVisible(true);
    setFileList({ image: [], video: [] });
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    form.setFieldsValue({
      title: record.title,
      name: record.name,
      description: record.description,
      image_url: record.image_url,
      video_url: record.video_url
    });
    setFileList({
      image: record.image_url ? [{ url: record.image_url, uid: '-1', name: 'image.png' }] : [],
      video: record.video_url ? [{ url: record.video_url, uid: '-1', name: 'video.mp4' }] : [],
    });
    setIsModalVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://cozycare-backend-g56w.onrender.com/blogs/${id}`);
      message.success('Blog deleted successfully');
      fetchBlogs();
    } catch {
      message.error('Failed to delete blog');
    }
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('name', values.name);
      formData.append('description', values.description);
  
      const { image } = fileList;
      if (image && image[0]) {
        formData.append('image', image[0].originFileObj);
      }
  
      const { video } = fileList;
      if (video && video[0]) {
        formData.append('video', video[0].originFileObj);
      }
  
      const url = editingId
        ? `https://cozycare-backend-g56w.onrender.com/blogs/${editingId}`
        : 'https://cozycare-backend-g56w.onrender.com/blogs';
  
      const method = editingId ? 'put' : 'post';
  
      await axios[method](url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      message.success(editingId ? 'Blog updated successfully' : 'Blog added successfully');
      setIsModalVisible(false);
      fetchBlogs();
    } catch {
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
            className="bg-blue-500 hover:bg-blue-600"
          />
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            className="bg-red-500 hover:bg-red-600"
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex items-center mb-4 space-x-4">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="bg-gray-500 hover:bg-gray-600"
        >
          Back
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600"
        >
          Add Blog
        </Button>
      </div>

      <div className="overflow-x-auto">
        <Table 
          columns={columns} 
          dataSource={blogs} 
          rowKey="id"
          className="min-w-full"
          scroll={{ x: true }}
        />
      </div>

      <Modal
        title={editingId ? 'Edit Blog' : 'Add Blog'}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        className="w-full max-w-lg mx-auto"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4"
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input className="w-full rounded-md" />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input className="w-full rounded-md" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input the description!' }]}
          >
            <Input.TextArea className="w-full rounded-md" />
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
              beforeUpload={() => false}
              className="w-full"
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
              beforeUpload={() => false}
              className="w-full"
            >
              {fileList.video.length < 1 && '+ Upload Video'}
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit"
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-600"
            >
              {editingId ? 'Update' : 'Submit'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BlogManage;