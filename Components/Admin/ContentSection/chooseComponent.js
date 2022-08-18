import DashBoard from "../Dashboard";
import HomePageBlog from "../EditPage/HomePageBlog";
import IndexPage from "../EditPage/IndexPage";
import NumberPageBlog from "../EditPage/NumberPageBlog/Index";
import SocialMedia from "../SocialMedia";

const ChooseComponent = ({ pathName }) => {
    // console.log('choose comp', pathName);
    switch (pathName) {
        case 'index_page':
            return <IndexPage />
        case 'index_page_home':
            return <IndexPage />
        case 'homepage_blog':
            return <HomePageBlog />;
        case 'number_page':
            return <NumberPageBlog />;
        case 'fb':
            return <SocialMedia mediaName={"fb"} />;
        case 'twitter':
            return <SocialMedia mediaName={"twitter"} />;
        case 'telegram':
            return <SocialMedia mediaName={"telegram"} />;
        case 'pinterest':
            return <SocialMedia mediaName={"pinterest"} />;
        case 'reddit':
            return <SocialMedia mediaName={"reddit"} />;
        case 'linkedin':
            return <SocialMedia mediaName={"linkedin"} />;
        case 'messenger':
            return <SocialMedia mediaName={"messenger"} />;
        case 'mail':
            return <SocialMedia mediaName={"mail"} />;

        default:
            return <DashBoard />
    }
}

export default ChooseComponent