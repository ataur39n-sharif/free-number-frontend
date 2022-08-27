import { FacebookIcon, FacebookShareButton } from "next-share"

const FacebookComponent = ({ data, shape }) => {

    return (
        <FacebookShareButton
            url={data?.url}
            quote={
                data?.text_title
            }
            hashtag={data?.hashTag}
        >
            <FacebookIcon size={38} round={shape} />
        </FacebookShareButton>
    )
}

export default FacebookComponent