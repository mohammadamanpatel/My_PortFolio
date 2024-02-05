import nodemailer from 'nodemailer';
const mailSender = async function (email, title, body) {
    console.log("email, title, body",email, title, body);
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })
        let info = await transporter.sendMail({
            from: 'Aman',
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log("info in mailSender",info);
        return info;
}
catch(error) {
    console.log(error.message);
}
}


export const contactUs = async (req, res, next) => {
    // Destructuring the required data from req.body
    const { name, email, message } = req.body;

    // Checking if values are valid
    if (!name || !email || !message) {
        return res.status(400).json({
            message: "please fill all the fields"
        })
    }

    try {
        const subject = 'Contact Us Form';
        const textMessage = `${name} - ${email} <br /> ${message}`;
        // Await the send email
        await mailSender(process.env.CONTACT_US_EMAIL, subject, textMessage);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal Server Error",
            error: error.message
        })
    }

    res.status(200).json({
        success: true,
        message: 'Your request has been submitted successfully',
    });
};