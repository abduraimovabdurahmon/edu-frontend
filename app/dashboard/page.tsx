"use client";
import AppHeader from "@/components/app-header";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import Image from "next/image";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { Star, Users, BookOpen, Info, FileText } from "lucide-react";

const courses = Array.from({ length: 8 }, (_, i) => ({
  title: `Course ${i + 1}`,
  description: `Description for course ${i + 1}. Learn about various topics in this engaging course.`,
  price: `$${(Math.random() * 100).toFixed(2)}`,
  rating: (Math.random() * 2 + 3).toFixed(1),
  link: `/courses/course-${i + 1}`,
  image: "/course.webp",
}));

export default function StudentDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "19rem" } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>
        <AppHeader 
          breadcrumbs={[
            {
              href: "/dashboard",
              title: "Bosh sahifa"
            }
          ]}
        />
        
        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
  {/* Card 1: Students */}
  <section className="p-6 rounded-lg shadow-lg bg-blue-50 dark:bg-blue-900 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold flex items-center gap-2 text-blue-700 dark:text-blue-200">
      <Users className="h-5 w-5" />
      Talabalarimiz haqida
    </h3>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
      Dunyo bo&apos;ylab minglab o&apos;quvchilar bizning platformamizdan foydalanmoqda.
    </p>
  </section>

  {/* Card 2: Courses */}
  <section className="p-6 rounded-lg shadow-lg bg-green-50 dark:bg-green-900 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold flex items-center gap-2 text-green-700 dark:text-green-200">
      <BookOpen className="h-5 w-5" />
      Kurslarimiz haqida
    </h3>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
      Turli sohalarda ko&apos;nikmalarni egallashga yordam beruvchi kurslar.
    </p>
  </section>

  {/* Card 3: Platform Features */}
  <section className="p-6 rounded-lg shadow-lg bg-yellow-50 dark:bg-yellow-900 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold flex items-center gap-2 text-yellow-700 dark:text-yellow-200">
      <Info className="h-5 w-5" />
      Platforma imkoniyatlari
    </h3>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
      Interaktiv vositalar, taraqqiyotni kuzatish va sertifikatlar.
    </p>
  </section>

  {/* Card 4: Learn Anywhere */}
  <section className="p-6 rounded-lg shadow-lg bg-purple-50 dark:bg-purple-900 hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold flex items-center gap-2 text-purple-700 dark:text-purple-200">
      <FileText className="h-5 w-5" />
      Istalgan joyda o&apos;rganing
    </h3>
    <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
      Istalgan qurilmadan kurslarga kiring va o&apos;qing.
    </p>
  </section>
</div>
        {/* Courses Section */}
        <div className="p-6 rounded-lg shadow-md  bg-sidebar border">
          <h2 className={`text-2xl font-semibold ${theme === "light" ? "text-gray-700" : "text-gray-300"} mb-4`}>Mening Kurslarim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Link key={index} href={course.link}>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
                  <Image src={course.image} alt={course.title} width={400} height={200} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{course.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">{course.description}</p>
                    <p className="text-lg font-bold text-blue-600 dark:text-yellow-400 mt-2">{course.price}</p>
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(Number(course.rating)) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`} />
                      ))}
                      <span className="ml-2 text-gray-600 dark:text-gray-400">({course.rating})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
