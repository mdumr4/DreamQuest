
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, MoreVertical, Info, Hand } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
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
import React from "react";

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

export default function FormHeader() {
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);

  return (
    <header className="header-nav px-4 md:px-6">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
            <div className="flex-1 flex justify-start">
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
                            <AlertDialogAction onClick={() => router.back()}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
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
  );
}
