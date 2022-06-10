import { useEffect, useState } from "react"
import parsePhoneNumber from 'libphonenumber-js'
import axios from "axios"

const AllCountries = ({ data }) => {
    const [allData, setAllData] = useState([])
    const tempValue = {
        "0": {
            "id": "5940197",
            "phone": "79842686684"
        },
        "1": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "2": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "3": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "4": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "5": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "6": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "7": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "8": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "9": {
            "id": "5940137",
            "phone": "79842162271"
        },
        "10": {
            "id": "5940137",
            "phone": "79842162271"
        }
    }
    useEffect(() => {
        if (data.status === 'success') {
            const tempArray = Object.entries(data.values)
            tempArray.map(each => {
                const num = parsePhoneNumber(`+${each[1].phone}`)
                axios.get(`https://restcountries.com/v2/alpha/${num.country}`)
                    .then(res => {
                        const countryInfo = {
                            country: res.data.name,
                            flag: res.data.flags.png,
                            country_code: num.country,
                            numbers: [num.number]
                        }
                        const previousValue = allData.find(each => each?.country_code === countryInfo.country_code)
                        console.log('line 67',previousValue);
                        if (!previousValue) {
                            let tempValue = [...allData]
                            tempValue.push(countryInfo)
                            setAllData(tempValue)
                        } else {
                            let tempValue = { ...previousValue }

                            const alreadyListed = tempValue.numbers.find(each => each === num.number)
                            console.log('line 75',alreadyListed);
                            if (!alreadyListed) {
                                const tempAllData = [...allData]
                                tempAllData.find(each => {
                                    if (each.country_code === countryInfo.country_code) {
                                        each.numbers.push(num.number)
                                    }
                                })
                                console.log('line 83', tempAllData);
                                setAllData(tempAllData)

                            }

                        }

                    })
                    .catch(err => console.log(err))
            })
        }
    }, [])

    console.log(data);
    console.log(allData);
    return (
        <div>
            this is all country list
        </div>
    )
}

export default AllCountries

export async function getStaticProps() {
    const result = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getRentNumberList`)
    const value = await result.json()

    return {
        props: {
            data: value || null
        }
    }
}