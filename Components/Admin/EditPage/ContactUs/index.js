import {
    Button,
    Form,
    Input,
    message,
    Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const formItemLayout = {
    labelCol: {
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        sm: {
            span: 12,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        // xs: {
        //     span: 24,
        //     offset: 0,
        // },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const ContactUsPage = ({ pageData }) => {
    const [form] = Form.useForm();

    // console.log('contact us page data', pageData);

    const onFinish = async (values) => {
        try {
            const updateData = await axios.put('https://api.receivesmsonline.io/page/contact_us', {
                title: values?.title,
                meta_description: values?.meta_description,
                keyword: values?.keywords
            })
            console.log(updateData);
            message.success('Success')
        } catch (error) {
            message.error(error.message)
        }
    };

    return (
        <div className='m-auto'>
            <Form
                {...formItemLayout}
                form={form}
                name="indexData"
                initialValues={{
                    "title": pageData?.title,
                    "meta_description": pageData?.meta_description,
                    "keywords": pageData?.keyword
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="title"
                    label="Page title"
                    rules={[
                        {
                            required: true,
                            message: 'Page title is required.',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="meta_description"
                    label="Meta-description"
                    rules={[
                        {
                            required: true,
                            message: 'Meta-description is required',
                        },
                    ]}
                >
                    <Input.TextArea showCount />
                </Form.Item>

                <Form.Item
                    name="keywords"
                    label="Keywords"
                    rules={[
                        {
                            required: true,
                            message: 'Keywords is required.',
                        },
                    ]}
                >
                    <Input placeholder='keyword1,keyword2,keyword3' />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactUsPage;