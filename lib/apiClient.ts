import axios from 'axios';
import type { AxiosError } from 'axios';

declare module 'axios' {
	export interface InternalAxiosRequestConfig {
		retryCount?: number;
	}
}

// Create axios instance with default config
const axiosInstance = axios.create({
	baseURL: '/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// Request interceptor
axiosInstance.interceptors.request.use(
	async (config) => {
		// Add auth token if available
		const token = localStorage.getItem('authToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		console.error('Request error:', error);
		return Promise.reject(error);
	}
);

// Response interceptor with retry logic
axiosInstance.interceptors.response.use(
	(response) => response.data,
	async (error: AxiosError) => {
		const config = error.config;

		// Retry logic for specific status codes
		if (
			config &&
			error.response &&
			[408, 429, 500, 502, 503, 504].includes(error.response.status) &&
			config.retryCount &&
			config.retryCount < 3
		) {
			config.retryCount = (config.retryCount || 0) + 1;
			const delay = Math.min(1000 * 2 ** config.retryCount, 10000);

			await new Promise((resolve) => setTimeout(resolve, delay));
			return axiosInstance(config);
		}

		return Promise.reject(error);
	}
);



export const apiClient = {
	get: async <T>(url: string, config?: object): Promise<T> => {
		try {
			const response = await <T>(axiosInstance.get(url, config));
			return response;
		} catch (error) {
			handleApiError(error);
			throw error;
		}
	},

	post: async <TResponse, TPayload = unknown>(
		url: string,
		payload?: TPayload,
		config?: object
	): Promise<TResponse> => {
		try {
			const response = await (axiosInstance.post<TResponse>(url, payload, config));
			return response.data;
		} catch (error) {
			handleApiError(error);
			throw error;
		}
	},

	put: async <T>(url: string, payload?: object, config?: object): Promise<T> => {
		try {
			const response = await (axiosInstance.put<T>(url, payload, config));
			return response.data;
		} catch (error) {
			handleApiError(error);
			throw error;
		}
	},

	patch: async <T>(url: string, payload?: object, config?: object): Promise<T> => {
		try {
			const response = await (axiosInstance.patch<T>(url, payload, config));
			return response.data;
		} catch (error) {
			handleApiError(error);
			throw error;
		}
	},

	delete: async <T>(url: string, config?: object): Promise<T> => {
		try {
			const response = await (axiosInstance.delete<T>(url, config));
			return response.data;
		} catch (error) {
			handleApiError(error);
			throw error;
		}
	},


};

interface EnhancedError extends Error {
	status?: number;
	code?: string;
}

function handleApiError(error: unknown): never {
	if (axios.isAxiosError(error)) {
		const enhancedError = new Error(
			error.response?.data?.message || error.message
		) as EnhancedError;
		enhancedError.status = error.response?.status;
		enhancedError.code = error.code;
		throw enhancedError;
	}
	throw error;
}

