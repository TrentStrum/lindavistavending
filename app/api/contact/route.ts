import { NextResponse } from 'next/server';
import { sendEmail } from '@/app/actions/send-email';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		
		// Log the request
		console.log('Received contact form request:', {
			hasBody: !!body,
			bodyKeys: body ? Object.keys(body) : [],
		});

		const result = await sendEmail(body);

		if ('error' in result) {
			console.error('Email sending failed:', result);
			return NextResponse.json(
				{
					error: result.error,
					details: result.details,
					message: process.env.NODE_ENV === 'development' 
						? 'Check server logs for more details' 
						: 'An error occurred while sending the email',
				},
				{ status: result.details ? 400 : 500 }
			);
		}

		return NextResponse.json(result);
	} catch (error) {
		console.error('Request error:', {
			error,
			message: error instanceof Error ? error.message : 'Unknown error',
			stack: error instanceof Error ? error.stack : undefined,
		});
		
		return NextResponse.json(
			{
				error: 'Internal server error',
				message: process.env.NODE_ENV === 'development' 
					? error instanceof Error ? error.message : 'Unknown error'
					: 'An unexpected error occurred',
				details: process.env.NODE_ENV === 'development' ? error : undefined,
			},
			{ status: 500 }
		);
	}
}
