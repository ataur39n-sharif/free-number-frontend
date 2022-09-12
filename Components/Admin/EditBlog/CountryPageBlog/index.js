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

const CountryPageBlog = ({ pageData }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        try {
            const updateData = await axios.put('https://api.receivesmsonline.io/blog/country_page', {
                title: values?.title,
                description: values?.description
            })
            console.log(updateData)
            message.success('Success')
        } catch (error) {
            message.error(error.message)
        }
    };

    //console.log('homepage data', pageData);



    return (
        <div className='m-auto'>
            <Form
                {...formItemLayout}
                form={form}
                name="indexData"
                initialValues={{
                    title: pageData?.title,
                    description: pageData?.description
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="title"
                    label="Blog title"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Blog-description"
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

export default CountryPageBlog;