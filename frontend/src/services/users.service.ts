import api from './api';
import { User, PaginatedResponse, ApiResponse } from '../types/api';

export const usersService = {
    async getUsers(page = 1, limit = 10): Promise<PaginatedResponse<User>> {
        const response = await api.get(`/api/users?page=${page}&limit=${limit}`);
        return response.data;
    },

    async getUserById(id: number): Promise<ApiResponse<User>> {
        const response = await api.get(`/api/users/${id}`);
        return response.data;
    },

    async updateProfile(data: Partial<User>): Promise<ApiResponse<User>> {
        const response = await api.patch('/api/users/profile', data);
        return response.data;
    },

    async updatePassword(currentPassword: string, newPassword: string): Promise<void> {
        await api.patch('/api/users/password', { currentPassword, newPassword });
    },

    async getUserTasks(userId: number, page = 1, limit = 10) {
        const response = await api.get(`/api/users/${userId}/tasks?page=${page}&limit=${limit}`);
        return response.data;
    },
}; 