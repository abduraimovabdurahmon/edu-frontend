"use client"

import * as React from "react"
import {
  Home,
  BookOpen,
  ClipboardList,
  FileEdit,
  Users,
  HelpCircle,
  LogOutIcon,
} from "lucide-react"

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
      url: "/dashboard/my-courses",
      icon: BookOpen,
    },
    {
      title: "Vazifalar",
      url: "/dashboard/assignments",
      icon: ClipboardList,
    },
    {
      title: "Testlar",
      url: "/dashboard/questions",
      icon: FileEdit,
    },
    {
      title: "Forum",
      url: "https://arabify.zulipchat.com",
      icon: Users,
    },
    {
      title: "Yordam va Qo‘llab-quvvatlash",
      url: "/dashboard/help",
      icon: HelpCircle,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        {/* logout */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#" className="flex items-center space-x-2 font-medium text-red-400">
                <LogOutIcon className="w-5 h-5" />
                <span>Chiqish</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
