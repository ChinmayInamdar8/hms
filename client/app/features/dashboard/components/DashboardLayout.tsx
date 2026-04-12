import DashboardSidebarWrapper from "./DashboardWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen flex flex-col text-teal-800">
      <DashboardSidebarWrapper>{children}</DashboardSidebarWrapper>
    </div>
  );
}
