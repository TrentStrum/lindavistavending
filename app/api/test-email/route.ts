import { NextResponse } from 'next/server';
import { testEmail } from '@/app/actions/send-email';

export async function GET() {
  try {
    const result = await testEmail();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Test email endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Failed to send test email',
        details: process.env.NODE_ENV === 'development' ? error : undefined,
      },
      { status: 500 }
    );
  }
} 