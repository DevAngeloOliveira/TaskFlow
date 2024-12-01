import { useQuery } from '@tanstack/react-query';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { tasksService } from '../../services';
import LoadingSpinner from '../../components/LoadingSpinner';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const { data: tasksData, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => tasksService.getTasks(),
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const tasks = tasksData?.data || [];

  // Calculate task statistics
  const tasksByStatus = {
    todo: tasks.filter((task) => task.status === 'todo').length,
    in_progress: tasks.filter((task) => task.status === 'in_progress').length,
    in_review: tasks.filter((task) => task.status === 'in_review').length,
    done: tasks.filter((task) => task.status === 'done').length,
  };

  const tasksByPriority = {
    low: tasks.filter((task) => task.priority === 'low').length,
    medium: tasks.filter((task) => task.priority === 'medium').length,
    high: tasks.filter((task) => task.priority === 'high').length,
    urgent: tasks.filter((task) => task.priority === 'urgent').length,
  };

  const statusChartData = {
    labels: ['To Do', 'In Progress', 'In Review', 'Done'],
    datasets: [
      {
        data: [
          tasksByStatus.todo,
          tasksByStatus.in_progress,
          tasksByStatus.in_review,
          tasksByStatus.done,
        ],
        backgroundColor: [
          'rgba(156, 163, 175, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(59, 130, 246, 0.5)',
          'rgba(22, 163, 74, 0.5)',
        ],
        borderColor: [
          'rgba(156, 163, 175, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(22, 163, 74, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const priorityChartData = {
    labels: ['Low', 'Medium', 'High', 'Urgent'],
    datasets: [
      {
        data: [
          tasksByPriority.low,
          tasksByPriority.medium,
          tasksByPriority.high,
          tasksByPriority.urgent,
        ],
        backgroundColor: [
          'rgba(34, 197, 94, 0.5)',
          'rgba(234, 179, 8, 0.5)',
          'rgba(239, 68, 68, 0.5)',
          'rgba(168, 85, 247, 0.5)',
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(168, 85, 247, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Task Status Chart */}
        <div className="glass-card">
          <h2 className="text-lg font-semibold text-white/90 mb-4">Task Status</h2>
          <div className="aspect-square">
            <Doughnut
              data={statusChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Task Priority Chart */}
        <div className="glass-card">
          <h2 className="text-lg font-semibold text-white/90 mb-4">Task Priority</h2>
          <div className="aspect-square">
            <Doughnut
              data={priorityChartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 