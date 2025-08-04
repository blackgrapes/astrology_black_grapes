import DashboardLayout from "@/app/components/admin/DashboardLayout";
import StatCards from "@/app/components/admin/Starcard";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Welcome Admin 👋</h1>
      <StatCards />
      <div className="mt-8">
        {/* Add upcoming features here, e.g., charts, logs */}
        <p className="text-gray-600">Recent Activity, Chart Reports, etc.</p>
      </div>
    </>
  );
}
