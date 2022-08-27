import { RedditIcon, RedditShareButton } from "next-share"

const RedditComponent = ({data}) => {
    return (
        <RedditShareButton
            url={data?.url}
            title={data?.text_title}
        >
            <RedditIcon size={42} className="m-2" round />
        </RedditShareButton>
    )
}

export default RedditComponent