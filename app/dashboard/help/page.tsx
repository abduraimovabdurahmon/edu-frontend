"use client"
import AppHeader from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
// import {
//   FileText,
//   BookOpen,
//   Users,
//   Info,
// } from "lucide-react";
// import Link from "next/link"; // Import Link
// import { useTheme } from "next-themes"; // Import useTheme for theme handling

import { useState, useEffect } from "react"; // Import useState and useEffect

export default function StudentDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  // const { theme } = useTheme();

  // Set isMounted to true when the component has mounted on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid rendering the theme-based content until after mount to prevent SSR mismatch
  if (!isMounted) {
    return null; // Or you can return a loading state or placeholder.
  }

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>

        {/* header */}
        <AppHeader 
          breadcrumbs={[
            {
              href: "/dashboard",
              title: "Bosh sahifa"
            },
            {
              href: "/dashboard/help",
              title: "Yordam va qo'llab-quvvatlash"
            }
          ]}
        />
        {/* header */}

        {/* shu joyidan boshlandi */}


        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
