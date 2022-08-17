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

const HomePageBlog = () => {
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