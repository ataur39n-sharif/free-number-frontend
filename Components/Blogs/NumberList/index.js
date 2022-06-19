import { useEffect, useState } from "react"
import { countryList } from "../../../utils/countries/countries"

const NumberListBlog = ({ country_code }) => {
    const [countryInfo, setCountryInfo] = useState({})

    useEffect(() => {
        const list = Object.entries(countryList)
        const data = list.find(each => each[0] === country_code.toLowerCase())
        setCountryInfo(data[1])
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-center m-5">About Receive SMS Online {countryInfo?.name}</h3>
                <div>
                    <p>
                        1). The service we provide is free forever. You can receive SMS online {countryInfo?.name} from all over the world, without registration, and without any additional conditions. You can use free {countryInfo?.name} phone number to register the website or app whatsapp,google voice,yahoo, apple id, telegram, gmail, facebook, twitter, instagram and more.
                    </p>
                    <p>
                        2). Increase your online privacy by avoiding exposing your mobile number on any website. By placing one of our {countryInfo?.name} mobile numbers to receive the SMS verification code, you will then obtain the respective code in the list of messages received by this number, then just copy your code and complete the SMS verification request.
                    </p>
                    <p>
                        3). We are not responsible for any possible consequences of using our site. Any illegal activity related to the use of our {countryInfo?.name} temporary phone numbers is strictly prohibited, and your data can be transferred to the appropriate authorities.
                    </p>
                    <p>
                        4). Also, we do not recommend attaching important personal accounts to these free {countryInfo?.name} Virtual phone number, since later these accounts can be retrieved by other users via SMS.
                    </p>
                    <p>
                        5). When used, it means that the above terms have been agreed.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NumberListBlog