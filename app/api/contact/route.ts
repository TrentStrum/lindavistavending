import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/actions/send-email';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const result = await sendEmail(body);

		if ('error' in result) {
			return NextResponse.json(
				result,
				{ status: result.details ? 400 : 500 }
			);
		}

		return NextResponse.json(result);
	} catch (error) {
		console.error('Request error:', error);
		return NextResponse.json(
			{
				error: 'Internal server error',
				details: process.env.NODE_ENV === 'development' ? error : undefined,
			},
			{ status: 500 }
		);
	}
}
