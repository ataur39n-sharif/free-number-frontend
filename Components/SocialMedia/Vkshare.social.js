import { VKIcon, VKShareButton } from "next-share"

const VkshareComponent = ({ data }) => {
    return (
        <VKShareButton
            url={data?.url}
            title={data?.text_title}
        // image={'./next-share.png'}
        >
            <VKIcon size={42} className="m-2" round />
        </VKShareButton>
    )
}

export default VkshareComponent