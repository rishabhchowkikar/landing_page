import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import avatarImg from "../assets/images.jpeg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Activity,
  Bell,
  Home,
  Menu,
  School,
  Settings,
  User,
  Power,
  Sparkles,
  Zap,
  NotepadText,
} from "lucide-react";

function NavbarComponent() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Sparkles, label: "FirstGuru" },
    { icon: School, label: "TownHall" },
    { icon: Zap, label: "AI Evaluation" },
    { icon: Settings, label: "Performance" },
    { icon: NotepadText, label: "Mock Test" },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="outline"
                  className="justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center space-x-4">
          <Activity className="h-6 w-6 text-blue-500" />
          <span className="text-xl font-bold">FirstBench</span>
        </div>

        <div className="ml-8 hidden space-x-2 lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="outline"
              className="flex items-center"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={avatarImg} alt="@avatar" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="destructive" className="w-full">
                  <Power />
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
