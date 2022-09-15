import { useEffect, useState } from "react"

const SingleNumPageBlog = ({ countryName, blogData, number }) => {
    const [blogAddCount, setBlogAddCount] = useState(0)

    useEffect(() => {
        if (blogAddCount === 0) {
            //for title 
            const blogTitleDiv = document.createElement('div')
            const blogTitle = blogData && blogData?.title?.split('country_name').join(countryName)?.split('phone_number').join(`+${number}`)
            blogTitleDiv.innerHTML = blogTitle

            const mainTitleDiv = document.getElementById('title')
            mainTitleDiv.appendChild(blogTitleDiv)

            //for discription

            const blogDescriptionDiv = document.createElement('div')
            const blogDescription = blogData && blogData?.description?.split('country_name').join(countryName)?.split('phone_number').join(`+${number}`)
            blogDescriptionDiv.innerHTML = blogDescription

            const mainDescriptionDiv = document.getElementById('description')
            mainDescriptionDiv.appendChild(blogDescriptionDiv)

            blogAddCount++;
        }
    }, [])

    return (
        <div className=" m-5">
            {/* <h5 className="text-center">About this free {countryName} Phone Number</h5> */}
            <div className="text-center" id="title">

            </div>
            <div id="description">

            </div>
            {/* <div className="text-center">{blogData?.title?.split('country_name').join(countryName)?.split('phone_number').join(`+${number}`)}</div> */}
            {/* <div className="">
                <p>
                    This is from {countryName} Temporary mobile number. Use this {countryName} Temporary mobile number to verify your account without having to use your own phone number. Temporary means that the number is online only for a few days, weeks or months, but not permanently online.
                </p>
                <p>
                    Because this number is a {countryName} temporary mobile number. Please do not use this phone number to receive important Messages. Anyone can reset the password by this phone number, so you should pay attention to personal information when registering. No liability for any economic loss arising therefrom.
                </p>
                <p>
                    Some websites have restrictions on how often you receive verification text messages on a single phone number. Therefore, sometimes our phone number may be blocked on certain websites. But don't worry. Just use the other temporary numbers on our website!
                </p>
            </div> */}
            {/* <div className="">
                {blogData?.description?.split('country_name').join(countryName)?.split('phone_number').join(`+${number}`)}
            </div> */}
        </div>
    )
}

export default SingleNumPageBlog