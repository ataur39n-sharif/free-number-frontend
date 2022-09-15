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
        console.log('Received values of form: ', values);
        try {
            const data = {
                title: values?.title,
                others: {
                    sub_title: values.sub_title,
                    section1_description: values.section1_description,
                    section1_title: values.section1_title,
                    section2_description: values.section2_description,
                    section2_title: values.section2_title,
                    section3_description: values.section3_description,
                    section3_title: values.section3_title,
                    section4_description: values.section4_description,
                    section4_title: values.section4_title,

                }
            }
            console.log(data)
            const updateData = await axios.put('http://localhost:8080/blog/homepage_blog', data)
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
                    sub_title: pageData?.others?.sub_title,
                    section1_description: pageData?.others?.section1_description,
                    section1_title: pageData?.others?.section1_title,
                    section2_description: pageData?.others?.section2_description,
                    section2_title: pageData?.others?.section2_title,
                    section3_description: pageData?.others?.section3_description,
                    section3_title: pageData?.others?.section3_title,
                    section4_description: pageData?.others?.section4_description,
                    section4_title: pageData?.others?.section4_title,
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
                    name="sub_title"
                    label="Blog sub-title"
                >
                    <Input />
                </Form.Item>

                <section>
                    <div>
                        <p>Section : 1</p>
                    </div>
                    <Form.Item
                        name="section1_title"
                        label="Section-1 title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="section1_description"
                        label="Section 1 description"
                    >
                        <Input.TextArea showCount />
                    </Form.Item>
                </section>
                <section>
                    <div>
                        <p>Section : 2</p>
                    </div>
                    <Form.Item
                        name="section2_title"
                        label="Section-2 title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="section2_description"
                        label="Section 2 description"
                    >
                        <Input.TextArea showCount />
                    </Form.Item>
                </section>
                <section>
                    <div>
                        <p>Section : 3</p>
                    </div>
                    <Form.Item
                        name="section3_title"
                        label="Section-3 title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="section3_description"
                        label="Section 3 description"
                    >
                        <Input.TextArea showCount />
                    </Form.Item>
                </section>
                <section>
                    <div>
                        <p>Section : 4</p>
                    </div>
                    <Form.Item
                        name="section4_title"
                        label="Section-4 title"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="section4_description"
                        label="Section 4 description"
                    >
                        <Input.TextArea showCount />
                    </Form.Item>
                </section>


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