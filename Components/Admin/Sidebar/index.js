import {
    EditOutlined, HomeOutlined, FolderOpenOutlined, NumberOutlined, MediumOutlined,
    FacebookOutlined, TwitterOutlined, MessageOutlined, MailOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Index Page', 'index_page_home', <HomeOutlined />),
    getItem('Edit', 'edit', <EditOutlined />, [
        getItem('Index Page', 'index_page', <FolderOpenOutlined />),
        getItem('Homepage', 'homepage_blog', <HomeOutlined />),
        getItem('Number page', 'number_page', <NumberOutlined />)
    ]),
    getItem('Social Media', 'social_media', <MediumOutlined />, [
        getItem('Facebook', 'fb', <FacebookOutlined />),
        getItem('Twitter', 'twitter', <TwitterOutlined />),
        getItem('Telegram', 'telegram', <MessageOutlined />),
        getItem('Pinterest', 'pinterest', <MessageOutlined />),
        getItem('Reddit', 'reddit', <EditOutlined />),
        getItem('LinkedIn', 'linkedin', <EditOutlined />),
        getItem('Messenger', 'messenger', <MessageOutlined />),
        getItem('Mail', 'mail', <MailOutlined />),

    ]),
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter()

    // useEffect(() => {

    // }, [router])

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo p-4" >
                <h5 className='text-light'>Admin panel</h5>
            </div>
            <Menu theme="dark"
                defaultSelectedKeys={['dashboard']}
                mode="inline" items={items}
                onClick={(e) => {
                    // router.push(`${router.pathname}${e.key}`)
                    // //console.log(e);
                    // <Link href={`/${e.key}`} />
                    router.replace(`/asik/${e.key}`)
                    // //console.log('clicked');
                }}
            />
        </Sider>
    );
};

export default SideBar;