import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from '../util/axios.customize'; // axios instance

const ResetPasswordTestSimple = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const { email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận không khớp!');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('/v1/api/forgot-password', { email, password });
      if (res && res.email) {
        alert('Mật khẩu đã được cập nhật!');
      }
      else {
        alert('Cập nhật mật khẩu thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      console.log(error);
      alert('Có lỗi xảy ra khi cập nhật mật khẩu.');
    }

    setLoading(false);
  };

  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col xs={24} md={16} lg={8}>
        <fieldset style={{ padding: 20, borderRadius: 5, border: '1px solid #ccc' }}>
          <legend>Quên mật khẩu (Test)</legend>
          <Form name="reset-password-test" layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              name="password"
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Xác nhận mật khẩu"
              name="confirmPassword"
              rules={[{ required: true, message: 'Vui lòng xác nhận mật khẩu!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Cập nhật mật khẩu
              </Button>
            </Form.Item>
          </Form>

          <Divider />
          <div style={{ textAlign: 'center' }}>
            <Link to="/login"><ArrowLeftOutlined /> Quay lại đăng nhập</Link>
          </div>
        </fieldset>
      </Col>
    </Row>
  );
};

export default ResetPasswordTestSimple;
