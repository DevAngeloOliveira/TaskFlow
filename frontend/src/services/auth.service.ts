import api from './api';
import { AuthResponse, LoginCredentials } from '../types/api';

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

export const authService = {
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/api/auth/login', credentials);
        return response.data;
    },

    async register(data: RegisterData): Promise<AuthResponse> {
        const response = await api.post<AuthResponse>('/api/auth/register', data);
        return response.data;
    },

    async logout(): Promise<void> {
        localStorage.removeItem('token');
    },

    async getCurrentUser(): Promise<AuthResponse['user']> {
        const response = await api.get<AuthResponse['user']>('/api/auth/me');
        return response.data;
    },
}; 