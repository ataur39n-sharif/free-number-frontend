import {
    Button,
    Form,
    Input,
    message
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

const SingleCountryPage = ({ pageData }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const updateData = await axios.put('https://api.receivesmsonline.io/page/single_country_page', {
                title: values?.title,
                meta_description: values?.meta_description,
                keyword: values?.keywords
            })
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
            <div>
                <h5>Hints :</h5>
                <p>1 .use "country_name" code where Country name will set dynamically</p>
            </div>
        </div>
    );
};

export default SingleCountryPage;