import {
    Button,
    Form,
    Input
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

const SocialMedia = ({ mediaName, pageData }) => {
    const [form] = Form.useForm();

    // const onFinish = async (values) => {
    //     //console.log('Received values of form: ', values);
    //     try {
    //         const updateData = await axios.put('https://api.receivesmsonline.io/update-social-media', {
    //             url: values?.url,
    //             text_title: values?.title,
    //             hashTag: values?.hashtag,
    //             appId: values?.appId,
    //             media_name: pageData?.media_name,
    //             subject: values?.subject,
    //             body: values?.body
    //         })
    //         //console.log(updateData);
    //         message.success('Success')
    //     } catch (error) {
    //         message.error(error.message)
    //     }
    // };

    //console.log('social media page', mediaName);

    return (
        <div >
            {/* <Form
                {...formItemLayout}
                form={form}
                name="indexData"
                initialValues={pageData}
                onFinish={onFinish}
                scrollToFirstError
            > */}

            <Form.Item
                name="media_name"
            >
                <Input hidden />
            </Form.Item>

            <Form.Item
                name="url"
                label="URL"
                rules={[
                    {
                        type: 'url',
                        warningOnly: true,
                    },
                    {
                        type: 'string',
                        min: 6,
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="title"
                label="Title/Quote"
            >
                <Input.TextArea showCount />
            </Form.Item>

            {
                mediaName === "fb" &&
                <Form.Item
                    name="hashtag"
                    label="Hashtag"
                >
                    <Input placeholder='#hashtag1,#hashtag2' />
                </Form.Item>
            }
            {
                mediaName === "twitter" &&
                <Form.Item
                    name="hashtag"
                    label="Hashtag"
                >
                    <Input placeholder='#hashtag1,#hashtag2' />
                </Form.Item>
            }

            {
                mediaName === 'messenger' &&
                <Form.Item
                    name="appId"
                    label="AppId"
                    rules={[
                        {
                            required: true,
                            message: 'AppId is required.',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            }
            {
                mediaName === 'mail' &&
                <>
                    <Form.Item
                        name="subject"
                        label="Subject"
                        rules={[
                            {
                                required: true,
                                message: 'Subject is required.',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="body"
                        label="Body"
                        rules={[
                            {
                                required: true,
                                message: 'Body is required.',
                            },
                        ]}
                    >
                        <Input.TextArea showCount />
                    </Form.Item>
                </>

            }



            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Update
                </Button>
            </Form.Item>
            {/* </Form> */}
        </div>
    );
};

export default SocialMedia;