export const formatDate = (date: string): string => {
    if (!date) return 'No date';

    try {
        const dateObj = new Date(date);
        return dateObj.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (error) {
        return 'Invalid date';
    }
};

export const isOverdue = (date: string): boolean => {
    if (!date) return false;

    try {
        const dueDate = new Date(date);
        const today = new Date();
        return dueDate < today;
    } catch (error) {
        return false;
    }
};

export const formatDateTime = (date: string): string => {
    if (!date) return 'No date';

    try {
        const dateObj = new Date(date);
        return dateObj.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        return 'Invalid date';
    }
}; 