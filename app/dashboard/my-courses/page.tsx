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
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        {/* header */}
        <AppHeader
          breadcrumbs={[
            {
              href: "/dashboard",
              title: "Bosh sahifa",
            },
            {
              href: "/dashboard/my-courses",
              title: "Mening kurslarim",
            },
          ]}
        />
        {/* header */}

        {/* shu joyidan boshlandi */}

        <div className="flex flex-1 flex-col gap-6 p-6 pt-0"></div>

        <div className={`p-4 rounded-lg shadow-sm  bg-sidebar`}>
            <h2
              className={`text-2xl font-semibold ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              } mb-4`}
            >
              Eng Mashhur Kurslar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/courses/full-stack-web-development">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/course.webp"
                    alt="Full-Stack Web Development"
                    width={500} // Set appropriate width
                    height={300} // Set appropriate height
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Full-Stack Web Development
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Dasturlash va veb-ishlab chiqish bo&apos;yicha chuqur
                      bilimlar oling va to&apos;liq stack bo&apos;yicha malakali
                      mutaxassis bo&apos;ling.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/courses/data-science-and-ai">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/course.webp"
                    alt="Data Science and AI"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Data Science and AI
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Sun&apos;iy intellekt va ma&apos;lumotlar tahlili bilan
                      bog&apos;liq eng zamonaviy ko&apos;nikmalarni
                      o&apos;rganing.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/courses/mobile-app-development">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/course.webp"
                    alt="Mobile App Development"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Mobile App Development
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Mobil ilovalar yaratish bo&apos;yicha bilimingizni
                      oshirib, Android va iOS platformalarida muvaffaqiyatli
                      ilovalar yarating.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/courses/digital-marketing">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <Image
                    src="/course.webp"
                    alt="Digital Marketing"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-700">
                      Digital Marketing
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Onlayn marketing, SEO, va reklama strategiyalarini
                      o&apos;rganing.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
