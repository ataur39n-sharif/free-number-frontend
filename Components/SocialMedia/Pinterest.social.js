import { PinterestIcon, PinterestShareButton } from "next-share"

const PinterestComponent = ({data}) => {
    return (
        <PinterestShareButton
            url={data?.url}
            media={data?.text_title}
        >
            <PinterestIcon size={42} className="m-2" round />
        </PinterestShareButton>
    )
}

export default PinterestComponent