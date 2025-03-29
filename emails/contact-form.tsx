import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  phone,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={message}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'left' as const,
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'left' as const,
  margin: '40px 0',
  padding: '0',
};

const text = {
  color: '#333',
  fontSize: '16px',
  margin: '12px 0',
};

const message = {
  color: '#333',
  fontSize: '16px',
  margin: '12px 0',
  whiteSpace: 'pre-wrap' as const,
}; 