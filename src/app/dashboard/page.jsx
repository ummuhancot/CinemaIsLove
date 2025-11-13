import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import { DashboardNavigation } from "@/components/dashboard/home/DashboardNavigation";



export default function Page() {
  return <div>
    <Spacer />
    <PageHeader title="Dashboard" />
    <Spacer />
    <DashboardNavigation />
    <Spacer />
    <PageHeader title="Welcome to the Dashboard!" />
    <Spacer />
  </div>;
}
