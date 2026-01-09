import { Ship, TrendingUp, AlertTriangle, DollarSign, Zap, Clock } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { DeliveryForecastCard } from "@/components/dashboard/SatisfactionCard";
import { AIDocumentEngineCard } from "@/components/dashboard/ReferralCard";
import { FreightSpendChart } from "@/components/dashboard/SalesOverviewChart";
import { DelayRootCausesChart } from "@/components/dashboard/ActiveUsersChart";
import { LanePerformanceTable } from "@/components/dashboard/ProjectsTable";
import { RecentActivityFeed } from "@/components/dashboard/OrdersOverview";
import { DocumentErrorHeatmap } from "@/components/dashboard/DocumentErrorHeatmap";

const statsData = [
  { title: "Active Shipments", value: "142", icon: Ship, subtitle: "Real-time tracking" },
  { title: "On-Time Performance", value: "98.4%", change: "+2.1%", isPositive: true, icon: TrendingUp },
  { title: "Projected Late Arrivals", value: "3", change: "$12,400 at risk", isPositive: false, icon: AlertTriangle },
  { title: "Automation Savings MTD", value: "$45,200", change: "+$8,500 detention saved", isPositive: true, icon: Zap },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 p-6">
        <Header 
          title="Analytics & Insights" 
          breadcrumb={["FreightFlow AI", "Dashboard"]} 
          userRole="COO / Head of Operations"
        />

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          {statsData.map((stat, index) => (
            <StatsCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Welcome, Delivery Forecast, AI Document Engine Row */}
        <div className="grid grid-cols-12 gap-5 mb-6">
          <div className="col-span-5">
            <WelcomeCard />
          </div>
          <div className="col-span-3">
            <DeliveryForecastCard onTime={82} early={15} delayed={3} />
          </div>
          <div className="col-span-4">
            <AIDocumentEngineCard 
              documentsProcessed={1450} 
              ocrAccuracy="99.8%" 
              avgConfidence={0.96} 
            />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-12 gap-5 mb-6">
          <div className="col-span-7">
            <FreightSpendChart />
          </div>
          <div className="col-span-5">
            <DelayRootCausesChart />
          </div>
        </div>

        {/* Lane Performance, Activity, and Document Heatmap Row */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5">
            <LanePerformanceTable />
          </div>
          <div className="col-span-4">
            <RecentActivityFeed />
          </div>
          <div className="col-span-3">
            <DocumentErrorHeatmap />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
