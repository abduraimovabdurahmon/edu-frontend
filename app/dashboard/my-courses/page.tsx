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
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = Array.from({ length: 20 }, (_, i) => ({
  title: `Course ${i + 1}`,
  description: `Description for course ${i + 1}. Learn about various topics in this engaging course.`,
  price: `$${(Math.random() * 100).toFixed(2)}`,
  rating: (Math.random() * 2 + 3).toFixed(1),
  link: `/courses/course-${i + 1}`,
  image: "/course.webp",
}));

const ITEMS_PER_PAGE = 20;

export default function StudentDashboard() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const totalPages = Math.ceil(courses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedCourses = courses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
            },
            {
              href: "/dashboard/my-courses",
              title: "Mening Kurslarim"
            }
          ]}
        />
        <div className="p-4 rounded-lg shadow-sm bg-sidebar border">
          <h2 className={`text-2xl font-semibold ${theme === "light" ? "text-gray-700" : "text-gray-300"} mb-4`}>Mening Kurslarim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedCourses.map((course, index) => (
              <Link key={index} href={course.link}>
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Image src={course.image} alt={course.title} width={400} height={200} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-white">{course.title}</h4>
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
          <div className="flex justify-center mt-6">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </Button>
            <span className="mx-4 text-gray-700">Page {currentPage} of {totalPages}</span>
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

