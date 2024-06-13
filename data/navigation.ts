import { LayoutDashboard, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type TNavigstions = {
    title: string;
    path: string;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
}[];

export const navigations: TNavigstions = [
    {
        title: "dashboard",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "calendar",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "services",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "history",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "profile",
        path: "/",
        icon: LayoutDashboard,
    },
    {
        title: "logout",
        path: "/",
        icon: LayoutDashboard,
    },
];
