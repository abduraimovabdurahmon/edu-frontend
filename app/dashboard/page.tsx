"use client"
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
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
  Code,
  DollarSign,
  Lock,
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
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0">

          {/* Overview Stats (side by side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Section 1: About Our Students */}
            <section className={`p-4 rounded-lg shadow-sm ${theme === "light" ? "bg-blue-50" : "bg-blue-800"}`}>
              <h3 className={`text-xl font-semibold text-gray-700 flex items-center gap-2 ${theme === "light" ? "text-blue-600" : "text-blue-300"}`}>
                <Users className="h-5 w-5" />
                Talabalarimiz haqida
              </h3>
              <p className={`text-sm mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>
                Dunyo bo'ylab minglab o'quvchilar o'z malakalarini oshirish va ta'lim maqsadlariga erishish uchun bizning platformamizdan foydalanmoqda.
              </p>
            </section>

            {/* Section 2: About Our Courses */}
            <section className={`p-4 rounded-lg shadow-sm ${theme === "light" ? "bg-green-50" : "bg-green-800"}`}>
              <h3 className={`text-xl font-semibold text-gray-700 flex items-center gap-2 ${theme === "light" ? "text-green-600" : "text-green-300"}`}>
                <BookOpen className="h-5 w-5" />
                About Our Courses
              </h3>
              <p className={`text-sm mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>
                Biz sizga turli sohalarda ko'nikmalarni egallashga yordam berish uchun mutaxassislar tomonidan tayyorlangan turli xil kurslarni taklif qilamiz.
              </p>
            </section>

            {/* Section 3: Platform Features */}
            <section className={`p-4 rounded-lg shadow-sm ${theme === "light" ? "bg-yellow-50" : "bg-yellow-800"}`}>
              <h3 className={`text-xl font-semibold text-gray-700 flex items-center gap-2 ${theme === "light" ? "text-yellow-600" : "text-yellow-300"}`}>
                <Info className="h-5 w-5" />
                Platformaning xususiyatlari
              </h3>
              <p className={`text-sm mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>
                Bizning platformamiz muvaffaqiyatga erishishingizga yordam beradigan interaktiv vositalar, taraqqiyotni kuzatish va sertifikatlarni taklif etadi.
              </p>
            </section>

            {/* Section 4: Flexibility */}
            <section className={`p-4 rounded-lg shadow-sm ${theme === "light" ? "bg-purple-50" : "bg-purple-800"}`}>
              <h3 className={`text-xl font-semibold text-gray-700 flex items-center gap-2 ${theme === "light" ? "text-purple-600" : "text-purple-300"}`}>
                <FileText className="h-5 w-5" />
                Istalgan vaqtda, istalgan joyda o'rganing
              </h3>
              <p className={`text-sm mt-2 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>
                Qaerda bo'lishingizdan qat'i nazar, istalgan qurilmadan kurslarga kiring va o'z tezligingizda o'rganing.
              </p>
            </section>
          </div>

          {/* Most Popular Courses Section */}
          <div className={`p-4 rounded-lg shadow-sm ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
            <h2 className={`text-2xl font-semibold ${theme === "light" ? "text-gray-700" : "text-gray-300"} mb-4`}>
              Eng Mashhur Kurslar
            </h2>

            {/* Course List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course 1 */}
              <Link href="/courses/full-stack-web-development">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/course.webp"
                    alt="Full-Stack Web Development"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Full-Stack Web Development
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Dasturlash va veb-ishlab chiqish bo'yicha chuqur bilimlar oling va to'liq stack bo'yicha malakali mutaxassis bo'ling.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Course 2 */}
              <Link href="/courses/data-science-and-ai">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/course.webp"
                    alt="Data Science and AI"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Data Science and AI
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Sun'iy intellekt va ma'lumotlar tahlili bilan bog'liq eng zamonaviy ko'nikmalarni o'rganing.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Course 3 */}
              <Link href="/courses/mobile-app-development">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/course.webp"
                    alt="Mobile App Development"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Mobile App Development
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Mobil ilovalar yaratish bo'yicha bilimingizni oshirib, Android va iOS platformalarida muvaffaqiyatli ilovalar yarating.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Course 4 */}
              <Link href="/courses/digital-marketing">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/course.webp"
                    alt="Digital Marketing"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Digital Marketing
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Onlayn marketing, SEO, va reklama strategiyalarini o'rganing.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
