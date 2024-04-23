"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home as HomeIcon,
  LineChart,
  Package2,
  Settings,
  PanelLeft,
  Computer,
  MessageCircleMore,
  UsersRound,
  University,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const activePageIndicator = (pathname: string, targetPath: string): string => {
  const baseClass =
    "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8";
  if (pathname === targetPath) {
    return `${baseClass} bg-accent text-accent-foreground hover:text-foreground`;
  } else {
    return `${baseClass} text-muted-foreground hover:text-foreground`;
  }
};

const Sidebar: React.FC = () => {
  // Get the active page
  const pathname = usePathname().split("/")[2];

  // Indicate active pages
  const homeActivePage = activePageIndicator(pathname, "home");
  const classesActiveTab = activePageIndicator(pathname, "classes");
  const forumActiveTab = activePageIndicator(pathname, "forum");
  const taActiveTab = activePageIndicator(pathname, "ta");
  const profileActiveTab = activePageIndicator(pathname, "profile");

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/pages/home" className={homeActivePage}>
                  <HomeIcon className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Home</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/pages/classes" className={classesActiveTab}>
                  <Computer className="h-5 w-5" />
                  <span className="sr-only">Classes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Classes</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/pages/forum" className={forumActiveTab}>
                  <MessageCircleMore className="h-5 w-5" />
                  <span className="sr-only">Forum</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Forum</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/pages/ta"
                  className={taActiveTab}>
                  <UsersRound className="h-5 w-5" />
                  <span className="sr-only">Assistants</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Assistants</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/pages/profile"
                  className={profileActiveTab}>
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/pages/home"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <University className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Cmich TAs</span>
            </Link>
            <Link
              href="/pages/home"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/pages/classes"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <Computer className="h-5 w-5" />
              Classes
            </Link>
            <Link
              href="/pages/forum"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <MessageCircleMore className="h-5 w-5" />
              Forum
            </Link>
            <Link
              href="/pages/ta"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <UsersRound className="h-5 w-5" />
              Assistants
            </Link>
            <Link
              href="/pages/profile"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Sidebar;
