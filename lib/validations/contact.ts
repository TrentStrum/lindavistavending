import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>; 