import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!email || !name || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // change this if you're using something else like Zoho, Outlook, etc.
    auth: {
      user: process.env.EMAIL_USER,      // your Gmail address
           // your Gmail app password
    },
  });

  const mailOptions = {
    from: `"Rishikul Yogshala Goa" <${process.env.EMAIL_USER}>`,
    to: email, // Send email to the user
    subject: `Thanks for contacting us, ${name}!`,
    html: `
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to us. We've received your message and will get back to you soon.</p>
      <h4>Your Message:</h4>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <br />
      <p>With love & light,<br>Rishikul Yogshala Goa Team</p>
    `,
  };

// Inside /pages/api/contact.ts
try {
  await transporter.sendMail(mailOptions);
  return res.status(200).json({ message: 'Email sent successfully' });
} catch (err: any) {
  console.error('Email error:', err); // <--- Add this line
  return res.status(500).json({ message: 'Failed to send email' });
}

}
