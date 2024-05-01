"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { paths } from "@/lib/paths";

import {
    Bell,
    Box,
    CircleUser,
    Cog,
    HelpCircle,
    LogOut,
    Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathName = usePathname();

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-semibold text-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:!ring-indigo-500/80"
                        >
                            <Box className="size-6" />
                            <span>Dashboard Boilerplate V2</span>
                        </Link>
                        {/* <Button
                            variant="outline"
                            size="icon"
                            className="ml-auto size-8"
                        >
                            <Bell className="size-4" />
                            <span className="sr-only">
                                Toggle notifications
                            </span>
                        </Button> */}
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {paths.map((p) => (
                                <Link
                                    key={p.key}
                                    href={p.path}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:!ring-indigo-500/80",
                                        p.path == pathName
                                            ? "bg-muted text-indigo-500"
                                            : "text-muted-foreground",
                                        "transition-all hover:text-indigo-500",
                                    )}
                                >
                                    {p.icon}
                                    {p.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    {/* <div className="mt-auto p-4">
                        <Card>
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access
                                    to our support team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-2 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="size-5" />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold my-4"
                                >
                                    <Box className="size-8 mx-auto" />
                                    <span className="sr-only">
                                        Dashboard Boilerplate V2
                                    </span>
                                </Link>
                                {paths.map((p) => (
                                    <SheetClose key={p.key} asChild>
                                        <Link
                                            // key={p.key}
                                            href={p.path}
                                            className={cn(
                                                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:!ring-indigo-500/80",
                                                p.path == pathName
                                                    ? "bg-muted text-indigo-500"
                                                    : "text-muted-foreground",
                                                "hover:text-indigo-500",
                                            )}
                                        >
                                            {p.icon}
                                            {p.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                            {/* <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get
                                            unlimited access to our support
                                            team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div> */}
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        {/* <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form> */}
                    </div>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                    >
                        <Bell className="size-5 text-indigo-500" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="rounded-full"
                            >
                                <CircleUser className="size-5 text-indigo-500" />
                                <span className="sr-only">
                                    Toggle user menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="end"
                            className="text-muted-foreground"
                        >
                            <DropdownMenuLabel className="text-indigo-500">
                                My Account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex gap-2"
                                >
                                    <Cog className="size-5" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex gap-2"
                                >
                                    <HelpCircle className="size-5" />
                                    Support
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    href="/dashboard/settings"
                                    className="flex gap-2"
                                >
                                    <LogOut className="size-5" />
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
