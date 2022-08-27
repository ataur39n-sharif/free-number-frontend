import { Breadcrumb, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ContentSection from '../../Components/Admin/ContentSection';
import SideBar from '../../Components/Admin/Sidebar';
const { Header, Content, Footer, Sider } = Layout;

const Admin = ({ pageData }) => {
    const router = useRouter()

    console.log(pageData);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SideBar />
            <ContentSection pageData={pageData} />
        </Layout>
    );
};

export default Admin;


export async function getServerSideProps(context) {
    const res = await fetch('https://test-api.ataur.dev/all-page-data')
    const pageData = await res.json()
    console.log('data abc', pageData);
    return {
        props: {
            pageData:pageData?.pageData
        }, // will be passed to the page component as props
    }
}