import { Server } from "lucide-react";
import StatusIndicator from "./StatusIndicator";

interface ServerCardProps {
  name: string;
  status: "healthy" | "warning" | "error";
  uptime: string;
  load: number;
}

const ServerCard = ({ name, status, uptime, load }: ServerCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-neutral-200 p-4 hover:shadow-lg transition-all duration-300 animate-slide-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Server className="w-5 h-5 text-neutral-500" />
          <div>
            <h3 className="font-medium text-neutral-800">{name}</h3>
            <p className="text-sm text-neutral-500">{uptime} uptime</p>
          </div>
        </div>
        <StatusIndicator status={status} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Load</span>
          <span className="font-medium text-neutral-800">{load}%</span>
        </div>
        <div className="w-full bg-neutral-100 rounded-full h-2">
          <div
            className="bg-success-DEFAULT rounded-full h-2 transition-all duration-500"
            style={{ width: `${load}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServerCard;