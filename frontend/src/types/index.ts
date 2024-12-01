export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'manager' | 'collaborator';
}

export interface Project {
    id: string;
    name: string;
    description?: string;
    status: 'not_started' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled';
    startDate?: string;
    endDate?: string;
    members: User[];
}

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in_progress' | 'in_review' | 'done';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    projectId: string;
    assigneeId?: string;
    assignee?: User;
    dueDate?: string;
    createdAt: string;
    updatedAt: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
} 