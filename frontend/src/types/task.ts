export type TaskStatus = 'todo' | 'in_progress' | 'in_review' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: string;
    assigneeId?: string;
    projectId: string;
    createdAt: string;
    updatedAt: string;
    assignee?: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}

export const taskStatusColors = {
    todo: 'bg-gray-100',
    in_progress: 'bg-blue-100',
    in_review: 'bg-yellow-100',
    done: 'bg-green-100'
} as const;

export const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
    urgent: 'bg-purple-100 text-purple-800'
} as const; 