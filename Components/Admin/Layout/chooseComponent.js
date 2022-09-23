import DashBoard from "../Dashboard";
import IndexPage from "../EditPage/IndexPage";
import SocialMedia from "../SocialMedia";

import {
    Button,
    Form,
    Input,
    message,
} from 'antd';
import axios from 'axios';
import React from 'react';
import ContactUsPage from "../EditPage/ContactUs";
import AllCountryPage from "../EditPage/AllCountry";
import SingleCountryPage from "../EditPage/SingleCountry";
import CountryPageBlog from "../EditBlog/CountryPageBlog";
import NumberPage from "../EditPage/SingleNumberPage";
import NumberPageBlog from "../EditBlog/NumberPageBlog";
import HomePage from "../EditPage/HomePage";
import HomePageBlog from "../EditBlog/HomePageBlog";
import AdminNumberComponent from "../Numbers";
import InactiveNumber from "../EditPage/InactiveNumber";

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

const ChooseComponent = ({ pathName, pageData, blogList }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        //console.log('Received values of form: ', values);
        try {
            const updateData = await axios.put('https://api.receivesmsonline.io/update-social-media', {
                url: values?.url,
                text_title: values?.title,
                hashTag: values?.hashtag,
                appId: values?.appId,
                media_name: values?.media_name,
                subject: values?.subject,
                body: values?.body
            })
            //console.log(updateData.data);
            message.success('Success')
        } catch (error) {
            message.error(error.message)
        }
    };

    const setData = (data) => {
        form.setFieldsValue({
            url: data?.url,
            title: data?.title,
            hashtag: data?.hashtag,
            appId: data?.appId,
            media_name: data?.media_name,
            subject: data?.subject,
            body: data?.body,
        })
    }

    switch (pathName) {
        case 'number-list':
            return <AdminNumberComponent />;
        case 'index_page':
            return <IndexPage pageData={pageData?.indexPage} />;
        case 'inactive_number_page':
            return <InactiveNumber pageData={pageData?.allPagesData.find(eachPage => eachPage?.page_name === 'inactive_number')} />;
        case 'number_page':
            return <NumberPage pageData={pageData?.numberPage} />;
        case 'single_country_page':
            return <SingleCountryPage pageData={pageData?.allPagesData.find(eachPage => eachPage?.page_name === 'single_country_page')} />;
        case 'all_country_page':
            return <AllCountryPage pageData={pageData?.allPagesData.find(eachPage => eachPage?.page_name === 'all_country_page')} />;
        case 'contact_us_page':
            return <ContactUsPage pageData={pageData?.allPagesData.find(eachPage => eachPage?.page_name === 'contact_us')} />;
        case 'homepage_blog':
            return <HomePageBlog pageData={blogList?.find((eachBlog => eachBlog?.blog_page_name === 'homepage_blog'))} />;
        case 'single_number_blog':
            return <NumberPageBlog pageData={blogList?.find((eachBlog => eachBlog?.blog_page_name === 'number_page'))} />;
        case 'single_country_blog':
            return <CountryPageBlog pageData={blogList?.find((eachBlog => eachBlog?.blog_page_name === 'country_page'))} />;

        case 'fb':
            const fb = pageData?.socialMedia.find((each) => each.media_name === 'fb')
            setData({
                url: fb ? fb.url : "",
                media_name: "fb",
                title: fb ? fb.text_title : "",
                hashtag: fb ? fb.hashTag : "",
                media_name: 'fb'
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"fb"} />
                </Form>
            );
        case 'twitter':
            const twitter = pageData?.socialMedia.find((each) => each.media_name === 'twitter')
            setData({
                url: twitter ? twitter.url : "",
                title: twitter ? twitter.text_title : "",
                hashtag: twitter ? twitter.hashTag : "",
                media_name: "twitter"
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"twitter"} />
                </Form>
            );
        case 'telegram':
            const telegram = pageData?.socialMedia.find((each) => each.media_name === 'telegram')
            setData({
                url: telegram ? telegram.url : "",
                title: telegram ? telegram.text_title : "",
                media_name: "telegram"
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"telegram"} />
                </Form>
            );
        case 'pinterest':
            const pinterest = pageData?.socialMedia.find((each) => each.media_name === 'pinterest')
            setData({
                url: pinterest ? pinterest.url : "",
                title: pinterest ? pinterest.text_title : "",
                media_name: 'pinterest'
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"pinterest"} />
                </Form>
            );
        case 'reddit':
            const reddit = pageData?.socialMedia.find((each) => each.media_name === 'reddit')
            setData({
                url: reddit ? reddit.url : "",
                title: reddit ? reddit.text_title : "",
                media_name: 'reddit'
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"reddit"} />
                </Form>
            );
        case 'linkedin':
            const linkedin = pageData?.socialMedia.find((each) => each.media_name === 'linkedin')
            setData({
                url: linkedin ? linkedin.url : "",
                title: linkedin ? linkedin.text_title : '',
                media_name: 'linkedin'
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"linkedin"} />
                </Form>
            );
        case 'messenger':
            const messenger = pageData?.socialMedia.find((each) => each.media_name === 'messenger')
            setData({
                url: messenger ? messenger.url : "",
                title: messenger ? messenger.text_title : "",
                appId: messenger ? messenger.appId : "",
                media_name: "messenger"
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"messenger"} />
                </Form>
            );
        case 'mail':
            const mail = pageData?.socialMedia.find((each) => each.media_name === 'mail')
            setData({
                url: mail ? mail.url : "",
                title: mail ? mail.text_title : "",
                subject: mail ? mail.subject : "",
                body: mail ? mail.body : "",
                media_name: 'mail'
            })
            return (
                <Form
                    {...formItemLayout}
                    form={form}
                    name="indexData"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <SocialMedia mediaName={"mail"} />
                </Form>
            );

        default:
            return <DashBoard />
    }
}

export default ChooseComponent