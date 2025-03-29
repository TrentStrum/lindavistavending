'use server';

import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';

// Validate API key exists
if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    // Log the incoming data (excluding sensitive info)
    console.log('Received contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      messageLength: data.message.length,
    });

    // Validate the input using Zod
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
      console.log('Validation failed:', result.error.flatten().fieldErrors);
      return {
        error: 'Validation failed',
        details: result.error.flatten().fieldErrors,
      };
    }

    // Log API key presence (not the actual key)
    console.log('Resend API key present:', !!process.env.RESEND_API_KEY);

    // Create email content without using React components
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${data.phone}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin: 10px 0;">${data.message.replace(/\n/g, '<br>')}</p>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
    `;

    const { data: emailData, error } = await resend.emails.send({
      from: 'LindaVistaVending <onboarding@resend.dev>',
      to: ['trent.strum@gmail.com'],
      reply_to: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error('Resend API error:', {
        error,
        message: error.message,
        statusCode: error.statusCode,
        type: error.type,
      });
      return {
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error : undefined,
      };
    }

    console.log('Email sent successfully:', { id: emailData?.id });
    return { 
      success: true,
      id: emailData?.id 
    };
  } catch (error) {
    console.error('Email sending error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      env: {
        hasApiKey: !!process.env.RESEND_API_KEY,
        apiKeyLength: process.env.RESEND_API_KEY?.length,
      },
    });
    return {
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error : undefined,
    };
  }
} 