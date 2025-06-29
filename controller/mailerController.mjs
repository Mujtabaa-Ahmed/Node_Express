import nodemailer from "nodemailer";
import 'dotenv/config'

const userName = process.env.Gmail_UserName;
const gmailAccount = process.env.Gmail_Email;
const mailProvider = process.env.mail_provider;
const passward = process.env.Gmail_smtp_password

const transporter = nodemailer.createTransport({
        host: `${mailProvider}`,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: `${gmailAccount}`,
            pass: `${passward}`,
        },
        });

export const SendMail = async (req,res)=>{
    try{
        (async () => {
        const info = await transporter.sendMail({
            from: `${userName} <${gmailAccount}>`,
            to: "saadmuhammad679@gmail.com",
            subject: `Message from ${userName}`,
            text: "Hello world?", // plain‑text body
            html: `<b>Hellow this is ${userName}</b>`, // HTML body
        });
        res.status(200).send("Message sent");
        console.log("Message sent:", info.messageId);
        })();
    }catch(error){
        res.status(500).send({message: error});
        console.log("catch of SendMail error on sending mail");
    }
}

const OTPGenerator = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    return code;
};


export const SendOTP = async (req,res)=>{
    try{
        const OTP = OTPGenerator();
        (async () => {
        const info = await transporter.sendMail({
            from: `${userName} <${gmailAccount}>`,
            to: "saadmuhammad679@gmail.com",
            subject: `Your One-Time Password (OTP) from ${userName}`,
            text: `Hello,
            Your One-Time Password (OTP) is: ${OTP}
            Please enter this code to proceed. The code will expire in 10 minutes.
            If you did not request this, please ignore this email.
            Thanks,
            ${userName}
            `,
            html: `
            <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
            <p>Hi there,</p>
            <p><strong>Your One-Time Password (OTP) is:</strong></p>
            <h2 style="color: #0b57d0;">${OTP}</h2>
            <p>Please enter this code to proceed. It will expire in <strong>10 minutes</strong>.</p>
            <br />
            <p>If you did not request this OTP, please ignore this email.</p>
            <p>Thanks,<br /><strong>${userName}</strong></p>
            </div>`
        });
        res.status(200).send("OTP sent");
        console.log(`${OTP}  Sent`);
        })();
    }catch(error){
        res.status(500).send(`OTP Generate failed catch`);
    }
}