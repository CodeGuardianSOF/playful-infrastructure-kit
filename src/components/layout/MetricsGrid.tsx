import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import ServerCard from "../metrics/ServerCard";
import MetricChart from "../metrics/MetricChart";
import { fetchServerMetrics, fetchMetricsData } from "@/services/infraApi";

const MetricsGrid = () => {
  const { toast } = useToast();

  const { data: servers = [], isError: isServersError } = useQuery({
    queryKey: ["servers"],
    queryFn: fetchServerMetrics,
    refetchInterval: 5000,
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to fetch server metrics",
        variant: "destructive",
      });
    },
  });

  const { data: metrics, isError: isMetricsError } = useQuery({
    queryKey: ["metrics"],
    queryFn: fetchMetricsData,
    refetchInterval: 5000,
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to fetch performance metrics",
        variant: "destructive",
      });
    },
  });

  if (isServersError || isMetricsError) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-error-light/10 border border-error-light text-error-dark p-4 rounded-lg">
          Error loading metrics data. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servers.map((server) => (
          <ServerCard key={server.name} {...server} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <MetricChart
          title="CPU Usage"
          data={metrics?.cpu || []}
          color="#059669"
          unit="%"
        />
        <MetricChart
          title="Memory Usage"
          data={metrics?.memory || []}
          color="#D97706"
          unit="%"
        />
        <MetricChart
          title="Network Traffic"
          data={metrics?.network || []}
          color="#6366F1"
          unit=" MB/s"
        />
      </div>
    </div>
  );
};

export default MetricsGrid;