import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { countryList } from "../../../utils/countries/countries"
import NumberListBlog from "../../Blogs/NumberList"

const NoNumberList = () => {

    return (
        <div id="no_number_list mt-5">
            <div className=" d-flex align-items-center" style={{ minHeight: '50vh' }}>
                <div className="text-center m-auto">
                    <h1>Sorry !!</h1>
                    <p>Currently No Number AvailAble</p>
                </div>
            </div>
        </div>
    )
}

export default NoNumberList