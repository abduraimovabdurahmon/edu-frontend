import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

type Props = {
    breadcrumbs: Array<{
        href: string;
        title: string;
    }>;
};

export default function AppHeader({ breadcrumbs }: Props) {
    const { theme, setTheme } = useTheme(); // Using next-themes hook to get and set theme

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href={breadcrumb.href}>
                                    {breadcrumb.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex-1" />

            {/* Theme Toggle */}
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
                </button>
            </div>
            {/* Theme toggle end */}
        </header>
    );
}
