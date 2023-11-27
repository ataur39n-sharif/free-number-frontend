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
            <div>
                <h5>Note :</h5>
                <p>1. use "country_name" code where Country name will set dynamically</p>
                <p>2. use "phone_number" code where Phone number will set dynamically</p>
                <p>3. Use any rich text editor and paste here only html code . example : i.<a href="https://richtexteditor.com/" target="_blank">Richtext editor</a>, ii. <a href="https://onlinehtmleditor.dev/" target="_blank">Online text editor</a></p>
            </div>
        </div>
    );
};

export default CountryPageBlog;