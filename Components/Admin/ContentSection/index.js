import { Breadcrumb, Layout } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import IndexPage from "../EditPage/IndexPage";
import ChooseComponent from "./chooseComponent";

const { Header, Content, Footer, Sider } = Layout;

const ContentSection = () => {
    const [pathList, setPathList] = useState([])
    const router = useRouter()
    const { pageName } = router.query
    console.log(pageName);
    useEffect(() => {
        let finalArr = []
        let listArr = window.location.pathname.split('/')
        listArr.forEach((eachPath) => {
            if (eachPath !== "") {
                finalArr.push(eachPath)
            }
        })
        setPathList(finalArr)
    }, [router])

    // const checkComponent = () => {
    //     switch (pageName) {
    //         case 'index_page' || 'index_page_home':
    //             return <IndexPage />;
    //         case 'homepage_blog':
    //             return;
    //         case 'number_page':
    //             return;
    //         case 'fb':
    //             return;
    //         case 'twitter':
    //             return;
    //         case 'telegram':
    //             return;
    //         case 'pinterest':
    //             return;
    //         case 'reddit':
    //             return;
    //         case 'linkedin':
    //             return;
    //         case 'messenger':
    //             return;
    //         case 'mail':
    //             return;

    //         default:
    //             return;
    //     }
    // }

    return (
        <Layout className="site-layout">
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                }}
            />
            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    {
                        pathList.map((eachPath,i) => {
                            return (<Breadcrumb.Item key={i}>{eachPath}</Breadcrumb.Item>)
                        })
                    }
                </Breadcrumb>

                <ChooseComponent pathName={pageName} />

            </Content>
        </Layout>
    )
}

export default ContentSection