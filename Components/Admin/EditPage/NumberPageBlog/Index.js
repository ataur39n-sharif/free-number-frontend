import {
    Button,
    Form,
    Input,
} from 'antd';
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

const NumberPageBlog = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };



    return (
        <div className='m-auto'>
            <Form
                {...formItemLayout}
                form={form}
                name="indexData"
                initialValues={{
                    "title": "abc"
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <h5>Page info :</h5>
                <Form.Item
                    name="title"
                    label="Page title"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="meta-description"
                    label="Meta-description"
                >
                    <Input.TextArea showCount />
                </Form.Item>

                <h5>Blog info :</h5>

                <Form.Item
                    name="blog"
                    label="Blog title"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="blog-description"
                    label="Blog-description"
                >
                    <Input.TextArea showCount />
                    <small>"Note : use "country_name" code where country name will set dynamically"</small>
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

export default NumberPageBlog;