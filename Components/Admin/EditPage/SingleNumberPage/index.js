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

const NumberPage = ({ pageData }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        //console.log('Received values of form: ', values);
        try {
            const updateData = await axios.put('https://api.receivesmsonline.io/update-number-page-data', {
                page_title: values?.page_title,
                meta_description: values?.meta_description,
                blog_title: values?.blog_title,
                blog_description: values?.blog_description,
                keywords: values?.keywords
            })
            //console.log(updateData);
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
                    page_title: pageData?.page_title,
                    meta_description: pageData?.meta_description,
                    blog_title: pageData?.blog_title,
                    blog_description: pageData?.blog_description,
                    keywords: pageData?.keywords
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <h5>Page info :</h5>
                <Form.Item
                    name="page_title"
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

                <Form.Item
                    name="keywords"
                    label="Keywords"
                >
                    <Input showCount />
                </Form.Item>

                {/* <h5>Blog info :</h5>

                <Form.Item
                    name="blog_title"
                    label="Blog title"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="blog_description"
                    label="Blog description"
                >
                    <Input.TextArea showCount />
                </Form.Item> */}

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>

            <div>
                <h5>Note :</h5>
                <p>1 .use "country_name" code where Country name will set dynamically</p>
                <p>2 .use "phone_number" code where Phone number will set dynamically</p>

            </div>
        </div>
    );
};

export default NumberPage;