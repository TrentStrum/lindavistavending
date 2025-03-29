'use server';

import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/lib/validations/contact';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function createEmailTemplate(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  return {
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
    `
  };
}

export async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    // Validate the input using Zod
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      return {
        error: 'Validation failed',
        details: result.error.flatten().fieldErrors,
      };
    }

    const emailContent = createEmailTemplate(data);
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'LindaVistaVending <noreply@lindavistavending.com>',
      to: process.env.SMTP_TO || 'trent.strum@gmail.com',
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: emailContent.html,
      text: emailContent.text,
    });

    return { 
      success: true,
      id: info.messageId
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error : undefined,
    };
  }
} 