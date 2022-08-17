import { Breadcrumb, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ContentSection from '../../Components/Admin/ContentSection';
import SideBar from '../../Components/Admin/Sidebar';
const { Header, Content, Footer, Sider } = Layout;

const Admin = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {

    }, [router])
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <SideBar />
            <ContentSection />
        </Layout>
    );
};

export default Admin;