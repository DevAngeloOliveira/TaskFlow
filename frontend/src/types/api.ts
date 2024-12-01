export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'manager' | 'collaborator';
    createdAt: string;
    updatedAt: string;
}

export interface Project {
    id: string;
    name: string;
    description: string;
    status: 'in_progress' | 'completed' | 'on_hold' | 'cancelled';
    startDate: string;
    endDate?: string;
    createdAt: string;
    updatedAt: string;
    tasks?: Task[];
    members?: User[];
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in_progress' | 'in_review' | 'done';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    dueDate?: string;
    projectId: string;
    assigneeId?: string;
    createdAt: string;
    updatedAt: string;
    assignee?: User;
    project?: Project;
}

// Auth types
export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: Omit<User, 'password'>;
    token: string;
}

// API Response types
export interface ApiResponse<T> {
    data: T;
    message?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
} 