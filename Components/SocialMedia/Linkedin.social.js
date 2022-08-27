import { LinkedinIcon, LinkedinShareButton } from "next-share"

const LinkedinComponent = ({data}) => {
    return (
        <LinkedinShareButton url={data?.url} title={data?.text_title}>
            <LinkedinIcon size={42} className="m-2" round />
        </LinkedinShareButton>
    )
}

export default LinkedinComponent