import HomePageBlog from "../EditPage/HomePageBlog";
import IndexPage from "../EditPage/IndexPage";
import NumberPageBlog from "../EditPage/NumberPageBlog/Index";

const ChooseComponent = ({ pathName }) => {
    console.log('choose comp', pathName);
    switch (pathName) {
        case 'index_page':
            return <IndexPage />
        case 'index_page_home':
            return <IndexPage />
        case 'homepage_blog':
            return <HomePageBlog/>;
        case 'number_page':
            return <NumberPageBlog/>;
        case '':
            return;
        case '':
            return;
        case '':
            return;
        case '':
            return;
        case '':
            return;

        default:
            return (<div>"this is other page"</div>)
    }
}

export default ChooseComponent