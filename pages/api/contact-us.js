import nodemailer from 'nodemailer';




export default async function Contact(req, res) {
    try {

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'receivesmsonline.io',
            port: 465,
            secure: true,
            auth: {
                user: 'support@receivesmsonline.io',
                pass: 'MF7pyWWlwlo8',
            },
        });

        const send = await transporter.sendMail({
            from: `"Name<${process.env.USERNAME}>"`,
            to: "rahman.sharif39n@gmail.com",
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