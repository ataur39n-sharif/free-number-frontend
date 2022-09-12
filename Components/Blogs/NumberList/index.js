import { useEffect, useState } from "react"
import { countryList } from "../../../utils/countries/countries"

const NumberListBlog = ({ country_code, blogData }) => {
    const [countryInfo, setCountryInfo] = useState({})
    const [blogAddCount, setBlogAddCount] = useState(0)

    useEffect(() => {
        const list = Object.entries(countryList)
        const data = list.find(each => each[0] === country_code?.toLowerCase())
        if (data) {
            setCountryInfo(data[1])
        }

        if (blogAddCount === 0) {
            //for title 
            const blogTitleDiv = document.createElement('div')
            const blogTitle = blogData && blogData?.title?.split('country_name').join(data[1].name)
            blogTitleDiv.innerHTML = blogTitle

            const mainTitleDiv = document.getElementById('title')
            mainTitleDiv.appendChild(blogTitleDiv)

            //for discription

            const blogDescriptionDiv = document.createElement('div')
            const blogDescription = blogData && blogData?.description?.split('country_name').join(data[1].name)
            blogDescriptionDiv.innerHTML = blogDescription

            const mainDescriptionDiv = document.getElementById('description')
            mainDescriptionDiv.appendChild(blogDescriptionDiv)

            blogAddCount++;
        }
    }, [])
console.log(blogAddCount)
    return (
        <div>
            <div>
                {/* <h3 className="text-center m-5">About Receive SMS Online {countryInfo?.name}</h3> */}
                {/* <h5 className="text-center m-5">Are you Looking for a way to receive SMS online without giving out your real number?</h5> */}
                <div className="text-center mt-5" id="title">

                </div>

                {/* <div>
                    <p>
                        This is a {countryInfo?.name} disposable/temporary mobile phone number.
                        The virtual number is a type of online mobile phone number. You can now receive SMS online with a free {countryInfo?.name} temporary number.
                    </p>
                    <p>
                        Our service allows you to use our free {countryInfo?.name} phone numbers to receive SMS online. You can receive
                        verification SMS messages from any website or app. Use this {countryInfo?.name} Temporary phone number to verify
                        your accounts without using your own phone number. If any website or application requires SMS/Phone number
                        verification while creating an account, then you can use our free phone numbers for SMS verification.
                    </p>
                </div> */}

                <div className="" id="description">
                    {/* {blogData?.description?.split('country_name').join(countryInfo?.name)} */}
                </div>
            </div>
        </div>
    )
}

export default NumberListBlog