import { Row } from "react-bootstrap"
import SingleNumber from "./SingleNumber";

const NumberList = ({ value }) => {

    const arr = Object.entries(value)

    return (
        <div className="container" style={{ minHeight: '51vh' }}>
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