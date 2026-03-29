import DashbaordLayout from "@/app/features/dashboard/components/DashboardLayout";
import PatientOnBoardForm from "@/app/features/Forms/PatientOnBoardForm";


export default function DoctorDashboard() {
  return (
    <DashbaordLayout>
      <PatientOnBoardForm/>
    </DashbaordLayout>
  );
}
