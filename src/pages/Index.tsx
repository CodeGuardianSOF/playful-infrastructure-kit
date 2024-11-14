import DashboardHeader from "@/components/layout/DashboardHeader";
import MetricsGrid from "@/components/layout/MetricsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      <DashboardHeader />
      <MetricsGrid />
    </div>
  );
};

export default Index;