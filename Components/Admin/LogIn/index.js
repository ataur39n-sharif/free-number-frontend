import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

const AdminLogin = () => {
    const router = useRouter()

    const onFinish = async (values) => {
        try {
            //console.log('Received values of form: ', values);
            const { data } = await axios.post('/api/auth', values)
            data.success && router.push('/asik/dashboard')
        } catch (error) {
            alert(error?.response?.data?.message);
        }
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <h1 className=''>Welcome, Admin</h1>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default AdminLogin;