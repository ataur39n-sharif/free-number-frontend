import nodemailer from 'nodemailer';




export default async function Contact(req, res) {
    try {

        // create reusable transporter object using the default SMTP transport
        const transporter = await nodemailer.createTransport({
            host: process.env.HOST, //email host
            port: 587, // with ssl = 465 , without ssl = 587
            // secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.USERNAME, // mail address
                pass: process.env.PASSWORD, // mail password
            },
        });

        const send = await transporter.sendMail({
            from: `"Name<${process.env.USERNAME}>"`, //use mail
            to: "reciver@gmail.com", //reciver mail
            subject: "Contact - us",
            html: `
            <h5> New message  </h5>
            <p>  User name : <strong> ${req.name} </strong> </p>
            <p> User email :<strong> ${req.email} </strong> </p>
            <p> Message : <strong> ${req.message} </strong> </p>
            `
        })
        return res.status(200).json(send)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}