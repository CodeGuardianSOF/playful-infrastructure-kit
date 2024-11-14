import { Activity, Server, Cpu, HardDrive } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchServerMetrics } from "@/services/infraApi";

const DashboardHeader = () => {
  const { data: servers = [] } = useQuery({
    queryKey: ["servers"],
    queryFn: fetchServerMetrics,
    refetchInterval: 5000,
  });

  const totalServers = servers.length;
  const avgCpuLoad = Math.round(
    servers.reduce((acc, server) => acc + server.load, 0) / totalServers
  );
  const storageSize = "1.2"; // This would come from a real API

  return (
    <div className="w-full bg-white/50 backdrop-blur-lg border-b border-neutral-200 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-6 h-6 text-success-DEFAULT" />
            <h1 className="text-2xl font-semibold text-neutral-800">InfraVision</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Server className="w-5 h-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">{totalServers} Servers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">{avgCpuLoad}% CPU</span>
            </div>
            <div className="flex items-center space-x-2">
              <HardDrive className="w-5 h-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">{storageSize}TB Storage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;