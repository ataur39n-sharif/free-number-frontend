import { Layout } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import ContentSection from '../../Components/Admin/Layout';
import SideBar from '../../Components/Admin/Sidebar';
const { Header, Content, Footer, Sider } = Layout;

const Admin = ({ pageData, blogList }) => {
    const router = useRouter()
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SideBar />
            <ContentSection pageData={pageData} blogList={blogList} />
        </Layout>
    );
};

export default Admin;


export async function getServerSideProps(context) {
    const res = await fetch('https://api.receivesmsonline.io/all-page-data')
    const pageData = await res.json()

    const blog = await fetch('https://api.receivesmsonline.io/blog')
    const blogResult = await blog.json()
    return {
        props: {
            pageData: pageData?.pageData,
            blogList: blogResult?.blogList
        },
    }
}