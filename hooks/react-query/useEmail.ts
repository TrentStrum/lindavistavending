import { useMutation, type UseMutationOptions } from '@tanstack/react-query';
import { apiClient } from '@/lib/apiClient';

interface EmailData {
	name: string;
	email: string;
	message: string;
	phone?: string;
}

interface EmailResponse {
	success: boolean;
	message?: string;
	id?: string;
	error?: string;
	details?: unknown;
}

export const useEmail = (
	options?: Omit<UseMutationOptions<EmailResponse, Error, EmailData>, 'mutationFn'>
) => {
	return useMutation({
		mutationFn: async (emailData: EmailData) => {
			return apiClient.post<EmailResponse>('/api/contact', emailData);
		},
		...options,
		onSuccess: (data, variables, context) => {
			console.log('Email sent successfully');
			options?.onSuccess?.(data, variables, context);
		},
		onError: (error, variables, context) => {
			console.error('Failed to send email:', error);
			options?.onError?.(error, variables, context);
		},
	});
};
