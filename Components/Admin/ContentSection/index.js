import { Breadcrumb, Layout } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import IndexPage from "../EditPage/IndexPage";
import ChooseComponent from "./chooseComponent";

const { Header, Content, Footer, Sider } = Layout;

const ContentSection = ({pageData}) => {
    const [pathList, setPathList] = useState([])
    const router = useRouter()
    const { pageName } = router.query
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

    console.log('props',pageData);

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

                <ChooseComponent pathName={pageName} pageData={pageData} />

            </Content>
        </Layout>
    )
}

export default ContentSection

export async function getServerSideProps(context) {
    const res = await fetch('https://test-api.ataur.dev/index-data')
    const pageData = await res.json()
    console.log('data abc', pageData);
    return {
        props: {
            hello:'hello',
            pageData: pageData
        }, // will be passed to the page component as props
    }
}