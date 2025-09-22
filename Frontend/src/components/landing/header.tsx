
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoreVertical, Info, Hand, LogOut, LayoutDashboard } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import RoleSelectionModal from "./role-selection-modal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useAuthStatus, User } from "@/hooks/use-auth-status";

const Logo = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center", className)}>
      <span className="font-bold inline-block text-xl">
        <span>Dream</span>{' '}
        <span className="animated-text-gradient bg-clip-text text-transparent">
          Quest
        </span>
      </span>
    </div>
);

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const { user } = useAuthStatus();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowStartButton(true);
      } else {
        setShowStartButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    // Force a re-render/re-check of auth state
    router.push('/');
    window.location.reload();
  };
  
  const handleStartClick = () => {
    setIsModalOpen(true);
  }

  return (
    <>
      <header className="header-nav px-4 md:px-6">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="w-1/3 flex justify-start">
            {showStartButton ? (
                <Button 
                    variant="outline" 
                    className="font-semibold text-base animate-in fade-in button-gradient-border"
                    onClick={handleStartClick}
                >
                    Start
                </Button>
            ) : (
                <div />
            )}
          </div>
          
          <div className="w-1/3 flex justify-center">
            <Link href="/" className="flex items-center logo-hover-glow transition-all duration-300 animate-in fade-in">
                <Logo />
            </Link>
          </div>

          <div className="w-1/3 flex justify-end items-center gap-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                       <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" className="font-semibold text-base button-gradient-border">
                <Link href="/auth">Login / Sign Up</Link>
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/feedback">
                    <Hand className="mr-2 h-4 w-4" />
                    <span>Send Feedback</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <RoleSelectionModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
