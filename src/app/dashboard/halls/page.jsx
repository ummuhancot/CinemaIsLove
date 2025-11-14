import { PageHeader } from "@/components/common/page-header/PageHeader";
import { Spacer } from "@/components/common/spacer/Spacer";
import HallForm from "@/components/dashboard/halls/HallForm";

export default function HallPage() {
  return (
    <div>
      <Spacer height={20} />
      <PageHeader title="Halls" />
      <Spacer height={20} />
      <HallForm />
      <Spacer height={20} />
    </div>
  );
}

