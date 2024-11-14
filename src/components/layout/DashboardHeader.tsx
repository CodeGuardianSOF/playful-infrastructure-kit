import { Activity, Server, Cpu, HardDrive } from "lucide-react";

const DashboardHeader = () => {
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
              <span className="text-sm text-neutral-600">12 Servers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">86% CPU</span>
            </div>
            <div className="flex items-center space-x-2">
              <HardDrive className="w-5 h-5 text-neutral-500" />
              <span className="text-sm text-neutral-600">1.2TB Storage</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;