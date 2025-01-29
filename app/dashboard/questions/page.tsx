"use client"
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  FileText,
  BookOpen,
  Users,
  Info,
} from "lucide-react";
import Link from "next/link"; // Import Link
import { useTheme } from "next-themes"; // Import useTheme for theme handling

import { useState, useEffect } from "react"; // Import useState and useEffect

export default function StudentDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  // Set isMounted to true when the component has mounted on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Avoid rendering the theme-based content until after mount to prevent SSR mismatch
  if (!isMounted) {
    return null; // Or you can return a loading state or placeholder
  }

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "19rem",
      } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard">Bosh sahifa</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/dashboard/questions">Testlar</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* shu joyidan boshlandi */}


        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
