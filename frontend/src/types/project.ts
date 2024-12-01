import { User } from './api';

export type ProjectStatus = 'in_progress' | 'completed' | 'on_hold' | 'cancelled';

export interface Project {
    id: string;
    name: string;
    description: string;
    status: ProjectStatus;
    startDate: string;
    endDate?: string;
    members?: User[];
    createdAt: string;
    updatedAt: string;
} 