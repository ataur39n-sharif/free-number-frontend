import { TelegramIcon, TelegramShareButton } from "next-share"

const TelegramComponent = ({data,shape}) => {
    return (
        <TelegramShareButton
            url={data?.url}
            title={
                data?.text_title
            }
        >
            <TelegramIcon size={38} round={shape}/>
        </TelegramShareButton>
    )
}

export default TelegramComponent