// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config()

// Check for required environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error("Provide EMAIL_USER and EMAIL_PASSWORD in the .env file");
}

// 1. Configure the Nodemailer Transporter
const transporter = nodemailer.createTransport({
    // Using Gmail as the SMTP service
    host: "smtp.gmail.com",
    port: 587, // Use TLS port
    secure: false, // Must be false for port 587 (TLS)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
    },
});

// Optional: Verify the connection (Good practice for setup)
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Gmail connection failed:", error.message);
    } else {
        console.log("✅ Nodemailer transporter is configured and ready to send email.");
    }
});

/**
 * Sends an email using Nodemailer, matching the original Resend function signature.
 * @param {object} options
 * @param {string} options.sendTo - The recipient email address.
 * @param {string} options.subject - The subject line of the email.
 * @param {string} options.html - The HTML content of the email body.
 * @returns {object|null} The message information object on success, or null on failure.
 */
const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        const mailOptions = {
            // The 'from' field uses the EMAIL_USER environment variable
            // and the 'Binkeyit' name, similar to your original code.
            from: `Binkeyit <${process.env.EMAIL_USER}>`, 
            to: sendTo,
            subject: subject,
            html: html,
        };

        const info = await transporter.sendMail(mailOptions);
        
        // Nodemailer returns an 'info' object on success (messageId, etc.)
        // This is returned to mimic a successful data response from Resend.
        return info;

    } catch (error) {
        // Log the error, similar to the original Resend error handling
        console.error("🚨 Error sending email via Nodemailer:", error);
        
        // To match the behavior of the original Resend function (which returns on error),
        // we return null/undefined to signal failure.
        return null; 
    }
};

export default sendEmail;
// If using ES modules in your project (since you use import/export in controllers), use:
// export default sendEmail;