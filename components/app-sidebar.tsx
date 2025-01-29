"use client"

import * as React from "react"
import {
  Home,
  BookOpen,
  ClipboardList,
  FileEdit,
  Users,
  HelpCircle,
  Moon,
  Sun
} from "lucide-react"
import { useTheme } from "next-themes"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"


const data = {
  navMain: [
    {
      title: "Bosh sahifa",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Barcha Kurslar",
      url: "/dashboard/courses",
      icon: BookOpen
    },
    {
      title: "Mening Kurslarim",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Vazifalar",
      url: "#",
      icon: ClipboardList,
    },
    {
      title: "Testlar",
      url: "#",
      icon: FileEdit,
    },
    {
      title: "Forum",
      url: "#",
      icon: Users,
    },
    {
      title: "Yordam va Qo‘llab-quvvatlash",
      url: "#",
      icon: HelpCircle,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme, setTheme } = useTheme(); // Using next-themes hook to get and set theme

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">EDUCATION</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="flex items-center space-x-2 font-medium">
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2 flex justify-center">
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 text-sm font-medium"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-500" />
            )}
            <span className="text-gray-500 dark:text-gray-300">
              {theme === "dark" ? "Kunduzgi rejim" : "Tungi rejim"}
            </span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
