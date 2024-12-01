interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

const LoadingSpinner = ({ fullScreen = true }: LoadingSpinnerProps) => {
  const containerClass = fullScreen
    ? "flex items-center justify-center min-h-screen"
    : "flex items-center justify-center min-h-[400px]";

  return (
    <div className={containerClass}>
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 animate-pulse-soft">
          <div className="h-full w-full rounded-full bg-green-500/20 blur-xl"></div>
        </div>
        <div className="absolute inset-0 animate-spin">
          <div className="h-full w-full rounded-full border-2 border-transparent border-t-green-500/50"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 