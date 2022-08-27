import { EmailIcon, EmailShareButton } from "next-share"

const MailComponent = ({ data }) => {
    return (
        <EmailShareButton
            url={data?.url}
            title={data?.text_title}
            subject={data?.subject}
            body={data?.body}
        >
            <EmailIcon size={42} className="m-2" round />
        </EmailShareButton>
    )
}

export default MailComponent