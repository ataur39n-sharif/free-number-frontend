import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import { Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contact = ({ pageData }) => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const { name, email, message } = data
            const sendMail = await axios.post('/api/contact-us', {
                name, email, message
            })
            //console.log(sendMail.data);
            setShow(true)
        } catch (error) {
            //console.log(error.message);
            setShow(true)
        }
    };

    return (<>
        <Head>
            <title>{pageData ? pageData?.title : "Demo Title"}</title>
            <meta name="description" content={pageData ? pageData?.meta_description : "Demo description"} />
            <meta name="keywords" content={pageData ? pageData?.keyword : "keywords list"} />
        </Head>
        <div className="container">
            <h1 className="text-center m-5">Contact us</h1>
            <Row className="d-flex justify-content-center">
                <Col md={8}>
                    <form onSubmit={handleSubmit(onSubmit)} className="m-5">

                        <div className="form-floating mb-3">
                            <input className="form-control mb-3" placeholder="Alex Jhon" id="name" {...register("name", { required: true })} />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input className="form-control mb-3" type="email" placeholder="abc@mail.com" id="email" {...register("email", { required: true })} />
                            <label htmlFor="email">Enter email address</label>
                        </div>

                        <div className="form-floating mb-3">
                            <textarea style={{ minHeight: "30vh" }} className="form-control mb-3" placeholder="Your message" id="message" {...register("message", { required: true })} />
                            <label htmlFor="message">Your message details</label>
                        </div>

                        <button className="btn btn-success m-2" type="submit" >Send Message</button>
                    </form>
                </Col>
                <ToastContainer className="mt-5 p-3" position={"top-end"}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="m-auto text-success">Success !!</strong>
                        </Toast.Header>
                        <Toast.Body bg="light">Thank You for your message. We will try to response you within 3 working day{"'"}s.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Row>

        </div>
    </>

    )
}

export default Contact

export async function getServerSideProps(context) {
    const pageDataReq = await fetch('https://api.receivesmsonline.io/page/contact_us')
    const pageData = await pageDataReq.json()

    return {
        props: {
            pageData: pageData.success ? pageData.data : null
        },
    };
}