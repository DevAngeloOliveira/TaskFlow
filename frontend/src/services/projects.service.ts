import api from './api';
import { PaginatedResponse, ApiResponse } from '../types/api';
import { Project } from '../types/project';

export const projectsService = {
    async getProjects(page = 1, limit = 10): Promise<PaginatedResponse<Project>> {
        const response = await api.get(`/api/projects?page=${page}&limit=${limit}`);
        return response.data;
    },

    async getProjectById(id: string): Promise<ApiResponse<Project>> {
        const response = await api.get(`/api/projects/${id}`);
        return response.data;
    },

    async createProject(project: Partial<Project>): Promise<ApiResponse<Project>> {
        const response = await api.post('/api/projects', project);
        return response.data;
    },

    async updateProject(id: string, project: Partial<Project>): Promise<ApiResponse<Project>> {
        const response = await api.patch(`/api/projects/${id}`, project);
        return response.data;
    },

    async deleteProject(id: string): Promise<void> {
        await api.delete(`/api/projects/${id}`);
    },

    async addMember(projectId: string, userId: string): Promise<ApiResponse<Project>> {
        const response = await api.post(`/api/projects/${projectId}/members/${userId}`);
        return response.data;
    },

    async removeMember(projectId: string, userId: string): Promise<ApiResponse<Project>> {
        const response = await api.delete(`/api/projects/${projectId}/members/${userId}`);
        return response.data;
    },
}; 