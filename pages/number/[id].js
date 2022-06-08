import moment from "moment";
import { useRouter } from "next/router"
import { Table, Toast, ToastContainer } from "react-bootstrap";
import copy from 'copy-text-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import { useState } from "react";

const NumberPage = ({ data, allRentList }) => {
    const [show, setShow] = useState(false);
    const router = useRouter()
    const { id } = router.query
    const temp = {
        status: 'success',
        quantity: '2',
        values: {
            0: {
                phoneFrom: "79180230628",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis dolorem rem earum quidem repudiandae dignissimos minima officia minus ullam, maxime adipisci? Atque sequi ducimus nam natus voluptatum consequuntur molestiae!",
                service: "ot",
                date: "2020-01-30 14:31:58"
            },
            "1": {
                "phoneFrom": "79180230628",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia?",
                "service": "ot",
                "date": "2020-01-30 14:04:16"
            }
        }
    }
    const tempData = Object.entries(temp.values)
    const allNumList = allRentList ? Object.entries(allRentList.values) : []
    const currentNum = allNumList.find(each => each[1].id === id)

    const handleCopy = () => {
        copy(`+${currentNum[1].phone}`)
        setShow(true)
    }

    console.log();
    return (
        <div className="container mt-5 text-center">
            <div className="numberInfo">
                <h5><strong>+{currentNum[1].phone} <FaCopy onClick={() => handleCopy()} /></strong></h5>
            </div>
            <Table responsive striped borderless size="xl">
                <thead className="table-primary">
                    <tr>
                        <th>From</th>
                        <th>Time</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // data.status === 'success' && data.quantity > 0 &&
                        tempData.map((each, i) => {
                            return (
                                <tr key={i}>
                                    <td>+{each[1].phoneFrom.slice(0, 7)}****</td>
                                    <td>{moment(each[1].date).fromNow()}</td>
                                    <td colSpan={2}>{each[1].text}</td>
                                </tr>
                            )
                        })


                    }
                    {data.status === 'error' &&
                        < tr >
                            <td colSpan={4} className="table-warning">No data</td>
                        </tr>
                    }
                </tbody>
            </Table>
            <ToastContainer className="p-3" position={'top-end'}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="m-auto">Copied !!</strong>
                    </Toast.Header>
                    <Toast.Body>Number: +{currentNum[1].phone}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div >
    )
}

export default NumberPage

export async function getServerSideProps(context) {
    const result = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getNumberRentStatus/${context.query.id}`)
    const value = await result.json()

    const rentList = await fetch(`${process.env.CURRENT_SITE_LINK}/api/getRentNumberList`)
    const list = await rentList.json()

    return {
        props: {
            data: value || null,
            allRentList: list || null
        }
    }
}