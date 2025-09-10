// app/admin/layout.tsx

import DashboardLayout from "../components/admin/DashboardLayout";
import "../globals.css"; // optional: to keep global styles

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
