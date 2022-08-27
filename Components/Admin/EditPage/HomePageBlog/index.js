import {
    Button,
    Form,
    Input,
    message,
} from 'antd';
import axios from 'axios';
import React from 'react';

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

const HomePageBlog = ({ pageData }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        // console.log('Received values of form: ', values);
        try {
            const updateData = await axios.put('https://test-api.ataur.dev/update-homepage-data', {
                page_title: values?.title,
                meta_description: values?.meta_description
            })
            message.success('Success')
        } catch (error) {
            message.error(error.message)
        }
    };

    console.log('homepage data', pageData);



    return (
        <div className='m-auto'>
            <Form
                {...formItemLayout}
                form={form}
                name="indexData"
                initialValues={{
                    "title": pageData?.page_title,
                    "meta_description": pageData?.meta_description
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="title"
                    label="Page title"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="meta_description"
                    label="Meta-description"
                >
                    <Input.TextArea showCount />
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

export default HomePageBlog;