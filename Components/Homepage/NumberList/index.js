import { Row } from "react-bootstrap"
import SingleNumber from "./SingleNumber";

const NumberList = ({ value }) => {

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

    const arr = Object.entries(value)

    return (
        <div className="container">
            <Row lg={4} md={2} sm={1}>
                {
                    arr.map((each, i) => {
                        return (
                            <SingleNumber data={each} key={i} />
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default NumberList