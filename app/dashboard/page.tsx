import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  ClipboardList,
  FileText,
  BookOpen,
  Users,
  Calendar,
  GraduationCap,
  MessageSquare,
  Star,
} from "lucide-react";

export default function StudentDashboard() {
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
                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Student Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle>My Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={70} />
                <p className="text-sm mt-2">70% Completed</p>
              </CardContent>
            </Card>
            
            {/* Upcoming Assignments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Assignments</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <ClipboardList className="size-10 text-primary" />
                <div>
                  <p>Math Homework #3</p>
                  <p className="text-sm text-muted-foreground">Due: Jan 30</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <Bell className="size-10 text-primary" />
                <div>
                  <p>New message from Instructor</p>
                  <p className="text-sm text-muted-foreground">Check your inbox</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Course Advertisement */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Featured Courses</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg flex items-center gap-4">
                <BookOpen className="size-10 text-primary" />
                <div>
                  <p>Advanced AI and Machine Learning</p>
                  <p className="text-sm text-muted-foreground">Start Now</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg flex items-center gap-4">
                <FileText className="size-10 text-primary" />
                <div>
                  <p>Creative Writing Masterclass</p>
                  <p className="text-sm text-muted-foreground">Enroll Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Student Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg flex items-center gap-4">
                <Star className="size-10 text-primary" />
                <div>
                  <p>John Doe</p>
                  <p className="text-sm text-muted-foreground">Top Scorer</p>
                </div>
              </div>
              <div className="p-4 border rounded-lg flex items-center gap-4">
                <Star className="size-10 text-primary" />
                <div>
                  <p>Jane Smith</p>
                  <p className="text-sm text-muted-foreground">Most Engaged</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Calendar className="size-10 text-primary" />
              <div>
                <p>Guest Lecture: AI in the Future</p>
                <p className="text-sm text-muted-foreground">Feb 10, 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
