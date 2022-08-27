import { FacebookMessengerIcon, FacebookMessengerShareButton } from "next-share"

const MessengerComponent = ({ data }) => {
    return (
        <FacebookMessengerShareButton
            url={data?.url}
            title={data?.text_title}
            appId={data?.appId}
        >
            <FacebookMessengerIcon size={42} className="m-2" round />
        </FacebookMessengerShareButton>
    )
}

export default MessengerComponent