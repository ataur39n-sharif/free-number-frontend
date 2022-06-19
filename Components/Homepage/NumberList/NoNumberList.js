import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { countryList } from "../../../utils/countries/countries"
import NumberListBlog from "../../Blogs/NumberList"

const NoNumberList = () => {
    const router = useRouter()
    const { country_code } = router.query

    return (
        <div id="no_number_list">
            <div className=" d-flex align-items-center" style={{ minHeight: '25vh' }}>
                <div className="text-center m-auto">
                    <h1>Sorry !!</h1>
                    <p>Currently No Number AvailAble</p>
                </div>
            </div>
            <NumberListBlog country_code={country_code} />

        </div>
    )
}

export default NoNumberList