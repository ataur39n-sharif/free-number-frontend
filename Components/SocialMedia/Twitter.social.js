import { TwitterIcon, TwitterShareButton } from "next-share"

const TwitterComponent = ({ data, shape }) => {
    return (
        <TwitterShareButton
            url={data?.url}
            title={
               data?.text_title
            }
        >
            <TwitterIcon size={38} round={shape} />
        </TwitterShareButton>
    )
}

export default TwitterComponent