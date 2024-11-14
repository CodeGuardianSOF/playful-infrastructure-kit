import ServerCard from "../metrics/ServerCard";
import MetricChart from "../metrics/MetricChart";

const mockServers = [
  { name: "prod-web-01", status: "healthy" as const, uptime: "15d 4h", load: 65 },
  { name: "prod-web-02", status: "healthy" as const, uptime: "12d 7h", load: 45 },
  { name: "prod-db-01", status: "warning" as const, uptime: "8d 12h", load: 82 },
  { name: "prod-cache-01", status: "healthy" as const, uptime: "20d 3h", load: 35 },
];

const mockCpuData = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: 30 + Math.random() * 40,
}));

const mockMemoryData = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: 45 + Math.random() * 30,
}));

const mockNetworkData = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: Math.random() * 100,
}));

const MetricsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockServers.map((server) => (
          <ServerCard key={server.name} {...server} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <MetricChart
          title="CPU Usage"
          data={mockCpuData}
          color="#059669"
          unit="%"
        />
        <MetricChart
          title="Memory Usage"
          data={mockMemoryData}
          color="#D97706"
          unit="%"
        />
        <MetricChart
          title="Network Traffic"
          data={mockNetworkData}
          color="#6366F1"
          unit=" MB/s"
        />
      </div>
    </div>
  );
};

export default MetricsGrid;