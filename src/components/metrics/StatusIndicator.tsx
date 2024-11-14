interface StatusIndicatorProps {
  status: "healthy" | "warning" | "error";
  pulse?: boolean;
}

const StatusIndicator = ({ status, pulse = true }: StatusIndicatorProps) => {
  const colors = {
    healthy: "bg-success-DEFAULT",
    warning: "bg-warning-DEFAULT",
    error: "bg-error-DEFAULT",
  };

  return (
    <div className="relative">
      <div
        className={`w-2.5 h-2.5 rounded-full ${colors[status]} ${
          pulse ? "animate-pulse-subtle" : ""
        }`}
      />
      {pulse && (
        <div
          className={`absolute inset-0 rounded-full ${
            colors[status].replace("bg-", "bg-opacity-30 bg-")
          } animate-ping`}
        />
      )}
    </div>
  );
};

export default StatusIndicator;