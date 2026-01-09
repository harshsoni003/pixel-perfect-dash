import { Wallet, Users, UserPlus, BarChart3 } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WelcomeCard } from "@/components/dashboard/WelcomeCard";
import { SatisfactionCard } from "@/components/dashboard/SatisfactionCard";
import { ReferralCard } from "@/components/dashboard/ReferralCard";
import { SalesOverviewChart } from "@/components/dashboard/SalesOverviewChart";
import { ActiveUsersChart } from "@/components/dashboard/ActiveUsersChart";
import { ProjectsTable } from "@/components/dashboard/ProjectsTable";
import { OrdersOverview } from "@/components/dashboard/OrdersOverview";

const statsData = [
  { title: "Today's Money", value: "$53,000", change: "+55%", isPositive: true, icon: Wallet },
  { title: "Today's Users", value: "2,300", change: "+5%", isPositive: true, icon: Users },
  { title: "New Clients", value: "+3,052", change: "-14%", isPositive: false, icon: UserPlus },
  { title: "Total Sales", value: "$173,000", change: "+8%", isPositive: true, icon: BarChart3 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 p-6">
        <Header title="Dashboard" breadcrumb={["Pages", "Dashboard"]} />

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          {statsData.map((stat, index) => (
            <StatsCard key={stat.title} {...stat} index={index} />
          ))}
        </div>

        {/* Welcome, Satisfaction, Referral Row */}
        <div className="grid grid-cols-12 gap-5 mb-6">
          <div className="col-span-5">
            <WelcomeCard />
          </div>
          <div className="col-span-3">
            <SatisfactionCard percentage={95} />
          </div>
          <div className="col-span-4">
            <ReferralCard invited={145} bonus={1465} safetyScore={9.3} />
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-12 gap-5 mb-6">
          <div className="col-span-7">
            <SalesOverviewChart />
          </div>
          <div className="col-span-5">
            <ActiveUsersChart />
          </div>
        </div>

        {/* Projects and Orders Row */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <ProjectsTable />
          </div>
          <div className="col-span-4">
            <OrdersOverview />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
