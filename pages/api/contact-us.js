import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'receivesmsonline.io',
    port: 465,
    secure: true,
    auth: {
        user: 'support@receivesmsonline.io',
        pass: 'c%syvw$v7I#*',
    },
});

export default async function Contact(req, res) {
    try {
        const send = await transporter.sendMail({
            from: `Admin<support@receivesmsonline.io>`,
            to: "asiksarker112233@gmail.com",
            subject: "Contact - us",
            html: `
            <h5> New message  </h5>
            <p>  User name : <strong> ${req.body.name} </strong> </p>
            <p> User email :<strong> ${req.body.email} </strong> </p>
            <p> Message : <strong> ${req.body.message} </strong> </p>
            `
        })
        return res.status(200).json(send)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}