const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${firstName} ${lastName}`,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "Message Sent" });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};