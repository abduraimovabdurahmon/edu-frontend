"use client"

import * as React from "react"
import {
  Home,
  BookOpen,
  ClipboardList,
  FileEdit,
  GraduationCap,
  Users,
  MessageSquare,
  Bell,
  Settings,
  ShieldCheck,
  HelpCircle,
  LogOut,
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
import { title } from "process"

const data = {
  navMain: [
    {
      title: "Bosh sahifa",
      url: "#",
      icon: Home,
    },
    {
      title: "Barcha Kurslar",
      url: "#",
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
        <div className="mt-4 p-2 cursor-pointer flex items-center space-x-2 text-red-500">
          <LogOut className="w-5 h-5" />
          <span>Tizimdan chiqish</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
