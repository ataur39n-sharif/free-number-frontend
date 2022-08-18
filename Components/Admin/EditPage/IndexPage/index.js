import {
    Button,
    Form,
    Input,
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

const IndexPage = ({ pageData }) => {
    const [form] = Form.useForm();
    const [indexPageData, setIndexPageData] = useState({})

    // useEffect(() => {
    //     const getData = async () => {
    //         const info = await axios.get('http://localhost:5000/index-data')
    //         console.log(info.data.data);
    //         if (info.data.success) {
    //             setIndexPageData(info.data.data)
    //         }
    //         keywords: "keyword1,keyword2,keyword3"
    //         meta_description: "demo meta_description"
    //         updatedAt: "2022-08-17T18:40:14.661Z"
    //         website_title: " update demo_title "
    //     }
    //     getData()
    // }, [])
    console.log('page data', pageData);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    // console.log(indexPageData);

    return (
        <div className='m-auto'>
            <Form
                {...formItemLayout}
                form={form}
                name="indexData"
                initialValues={{
                    // "title": indexPageData ? indexPageData.website_title : "hello",
                    // "meta_description": indexPageData.meta_description
                }}
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="title"
                    label="Website title"
                    rules={[
                        {
                            required: true,
                            message: 'Website title is required.',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    name="meta-description"
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

                <Form.Item label="Favicon(optional)" valuePropName="fileList">
                    <Upload action={(e) => console.log(e)} listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
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

export default IndexPage;

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:5000/index-data')
    const pageData = await res.json()
    console.log('data', data);
    return {
        props: {
            pageData: pageData?.data
        }, // will be passed to the page component as props
    }
}