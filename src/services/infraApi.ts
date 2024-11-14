// Simulated API endpoints with realistic delays and random variations
export const fetchServerMetrics = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      name: "prod-web-01",
      status: Math.random() > 0.9 ? "warning" : "healthy",
      uptime: `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h`,
      load: Math.floor(Math.random() * 100)
    },
    {
      name: "prod-web-02",
      status: Math.random() > 0.9 ? "warning" : "healthy",
      uptime: `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h`,
      load: Math.floor(Math.random() * 100)
    },
    {
      name: "prod-db-01",
      status: Math.random() > 0.95 ? "error" : Math.random() > 0.8 ? "warning" : "healthy",
      uptime: `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h`,
      load: Math.floor(Math.random() * 100)
    },
    {
      name: "prod-cache-01",
      status: Math.random() > 0.9 ? "warning" : "healthy",
      uptime: `${Math.floor(Math.random() * 30)}d ${Math.floor(Math.random() * 24)}h`,
      load: Math.floor(Math.random() * 100)
    }
  ];
};

export const fetchMetricsData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const now = new Date();
  const last24Hours = Array.from({ length: 24 }, (_, i) => {
    const date = new Date(now);
    date.setHours(date.getHours() - i);
    return date.getHours() + ":00";
  }).reverse();

  return {
    cpu: last24Hours.map(hour => ({
      timestamp: hour,
      value: 30 + Math.random() * 40
    })),
    memory: last24Hours.map(hour => ({
      timestamp: hour,
      value: 45 + Math.random() * 30
    })),
    network: last24Hours.map(hour => ({
      timestamp: hour,
      value: Math.random() * 100
    }))
  };
};