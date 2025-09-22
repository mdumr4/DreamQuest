
"use client";

import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { User, Compass, Newspaper, ArrowLeft, MoreVertical, Info, Hand } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import React, { useState, useEffect } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


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

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const navItems = [
    { id: 'identity', label: 'Career Identity', icon: <User className="h-4 w-4" /> },
    { id: 'explore', label: 'Explore Paths', icon: <Compass className="h-4 w-4" /> },
    { id: 'news', label: 'Career News', icon: <Newspaper className="h-4 w-4" /> },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  const getActiveTab = () => {
    if (pathname.startsWith('/explore')) {
        return 'explore';
    }
    return searchParams.get('tab') || 'identity';
  }

  const [activeTab, setActiveTab] = useState<'identity' | 'explore' | 'news'>(getActiveTab() as 'identity' | 'explore' | 'news');
  
  useEffect(() => {
    setActiveTab(getActiveTab() as 'identity' | 'explore' | 'news');
  }, [searchParams, pathname]);


  const onTabChange = (tab: 'identity' | 'explore' | 'news') => {
    setActiveTab(tab);
    if (tab === 'explore' && pathname.startsWith('/dashboard')) {
        const params = new URLSearchParams(searchParams);
        params.delete('tab');
        router.push(`/dashboard?${params.toString()}&tab=explore`, { scroll: false });
    } else {
        const params = new URLSearchParams(searchParams);
        params.delete('tab');
        router.push(`/dashboard?tab=${tab}`);
    }
  };

  const renderBackButton = () => {
    if (pathname.startsWith('/dashboard')) {
      return (
        <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="ghost" className="px-3">
              <ArrowLeft className="h-5 w-5" />
              <span className="ml-1 text-base">Back</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                You will lose your current progress if you go back.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => router.push('/aspirant/role')}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }
    return (
      <Button variant="ghost" className="px-3" onClick={() => router.back()}>
        <ArrowLeft className="h-5 w-5" />
        <span className="ml-1 text-base">Back</span>
      </Button>
    );
  };

  return (
    <div className="flex min-h-dvh w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background px-4 md:px-6">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
            <div className="flex-1 flex justify-start">
               {renderBackButton()}
            </div>

            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center logo-hover-glow transition-all duration-300">
                    <Logo />
                </Link>
            </div>

            <div className="flex-1 flex justify-end">
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
      
      <nav className={cn(
          "transition-colors duration-300",
          activeTab === 'explore' ? 'bg-[#F8F9FA]' : 'bg-muted/40'
        )}>
        <div className="flex justify-center p-2">
            <div className="relative flex items-center gap-2 rounded-full bg-background/60 p-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id as 'identity' | 'explore' | 'news')}
                        className={cn(
                            "relative z-10 flex items-center justify-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
                            activeTab === item.id
                                ? "text-primary"
                                : "text-muted-foreground hover:text-primary/80"
                        )}
                    >
                        {activeTab === item.id && (
                           <motion.div
                             layoutId="active-nav-pill"
                             className="absolute inset-0 rounded-full bg-background shadow-sm"
                             transition={{ type: "spring", stiffness: 400, damping: 30 }}
                           />
                        )}
                        <span className="relative z-10">{item.icon}</span>
                        <span className="relative z-10">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
      </nav>
      <div className={cn(
          "flex flex-1 transition-colors duration-300",
          activeTab === 'explore' ? 'bg-[#F8F9FA]' : 'bg-muted/40'
        )}>
        {children}
      </div>
    </div>
  );
}
