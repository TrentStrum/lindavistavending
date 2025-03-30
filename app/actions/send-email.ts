'use server';

import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const { data: emailData, error } = await resend.emails.send({
      from: 'Linda Vista Vending <onboarding@resend.dev>',
      to: ['trent.strum@gmail.com'],
      reply_to: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: emailContent.html,
      text: emailContent.text,
    });

    if (error) {
      console.error('Resend API error:', error);
      return {
        error: 'Failed to send email',
        details: error,
      };
    }

    return { 
      success: true,
      message: 'Email sent successfully',
      id: emailData?.id
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error : undefined,
    };
  }
}

// Test function to verify email sending
export async function testEmail() {
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      message: 'This is a test email from the contact form system.',
    };

    const result = await sendEmail(testData);
    console.log('Test email result:', result);
    return result;
  } catch (error) {
    console.error('Test email error:', error);
    return {
      error: 'Test email failed',
      details: process.env.NODE_ENV === 'development' ? error : undefined,
    };
  }
} 