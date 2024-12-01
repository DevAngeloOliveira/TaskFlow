import api from './api';
import { Task, ApiResponse } from '../types/api';

export const tasksService = {
    async getTasks(): Promise<ApiResponse<Task[]>> {
        const response = await api.get<ApiResponse<Task[]>>('/api/tasks');
        return response.data;
    },

    async getTaskById(id: string): Promise<ApiResponse<Task>> {
        const response = await api.get<ApiResponse<Task>>(`/api/tasks/${id}`);
        return response.data;
    },

    async createTask(task: Partial<Task>): Promise<ApiResponse<Task>> {
        const response = await api.post<ApiResponse<Task>>('/api/tasks', task);
        return response.data;
    },

    async updateTask(id: string, task: Partial<Task>): Promise<ApiResponse<Task>> {
        const response = await api.patch<ApiResponse<Task>>(`/api/tasks/${id}`, task);
        return response.data;
    },

    async deleteTask(id: string): Promise<void> {
        await api.delete(`/api/tasks/${id}`);
    },

    async assignTask(taskId: string, userId: string): Promise<ApiResponse<Task>> {
        const response = await api.patch<ApiResponse<Task>>(`/api/tasks/${taskId}/assign`, { userId });
        return response.data;
    },

    async updateTaskStatus(taskId: string, status: Task['status']): Promise<ApiResponse<Task>> {
        const response = await api.patch<ApiResponse<Task>>(`/api/tasks/${taskId}/status`, { status });
        return response.data;
    },
}; 