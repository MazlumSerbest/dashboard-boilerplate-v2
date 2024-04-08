import {
    Bell,
    Box,
    CircleUser,
    Cog,
    HelpCircle,
    HelpingHand,
    LayoutDashboard,
    LogOut,
    Menu,
    Search,
    Users2,
} from "lucide-react";

export const paths: Path[] = [
    {
        path: "/dashboard",
        key: "dashboard",
        name: "Dashboard",
        icon: (
            <LayoutDashboard className="size-5" />
        ),
    },
    {
        path: "/dashboard/users",
        key: "users",
        name: "Users",
        icon: (
            <Users2 className="size-5" />
        ),
    },
    {
        path: "/dashboard/settings",
        key: "settings",
        name: "Setings",
        icon: (
            <Cog className="size-5" />
        ),
    },
];
