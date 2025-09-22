
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Loader2, User as UserIcon, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useAuthStatus } from '@/hooks/use-auth-status';

type RoleSelectionModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function RoleSelectionModal({ isOpen, onOpenChange }: RoleSelectionModalProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuthStatus();

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSelectedRole(null);
    }, 300); 
  };

  const handleRoleSelection = async (role: 'mentor' | 'explorer') => {
    if (isLoading) return;
    
    setIsLoading(role);
    setSelectedRole(role);
    
    await new Promise(resolve => setTimeout(resolve, 500));

    console.log("Simulating role selection:", role);
    
    // Redirect to the correct starting page for both guests and logged-in users.
    if (role === 'explorer') {
      router.push('/aspirant/role');
    } else if (role === 'mentor') {
      router.push('/mentor');
    }
    
    handleClose();
    setIsLoading(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) handleClose();
      else onOpenChange(true);
    }}>
      <DialogContent className="sm:max-w-2xl rounded-lg p-8 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 overflow-hidden">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl tracking-tight">Select how you want to begin</DialogTitle>
          <DialogDescription className="sr-only">Choose between Mentor and Explorer to start your journey.</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <RoleCard
            role="mentor"
            title="Mentor"
            icon={<Bot className="h-12 w-12 role-card-icon transition-transform duration-300" />}
            isLoading={isLoading === 'mentor'}
            isSelected={selectedRole === 'mentor'}
            onSelect={() => handleRoleSelection('mentor')}
            disabled={!!isLoading}
          />
          <RoleCard
            role="explorer"
            title="Explorer"
            icon={<UserIcon className="h-12 w-12 role-card-icon transition-transform duration-300" />}
            isLoading={isLoading === 'explorer'}
            isSelected={selectedRole === 'explorer'}
            onSelect={() => handleRoleSelection('explorer')}
            disabled={!!isLoading}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}


type RoleCardProps = {
  role: 'mentor' | 'explorer';
  title: string;
  icon: React.ReactNode;
  isLoading: boolean;
  isSelected: boolean;
  onSelect: (role: 'mentor' | 'explorer') => void;
  disabled: boolean;
};

function RoleCard({ role, title, icon, isLoading, isSelected, onSelect, disabled }: RoleCardProps) {
  return (
    <div
      role="button"
      aria-disabled={disabled}
      onClick={() => !disabled && onSelect(role)}
      className={cn(
        "role-card relative group p-8 flex flex-col items-center justify-center gap-4 rounded-xl border-2 bg-background/50 cursor-pointer transition-all duration-300 ease-in-out",
        "hover:border-primary",
        isSelected ? "border-primary shadow-lg" : "border-border",
        disabled && !isLoading ? "opacity-50 cursor-not-allowed" : ""
      )}
    >
      {isLoading ? (
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      ) : (
        icon
      )}
      <span className="text-xl font-semibold text-foreground">{title}</span>
      <div className={cn(
        "absolute inset-0 rounded-xl transition-all duration-300",
        isSelected ? "ring-4 ring-primary/50" : "ring-0 ring-primary/0",
        "group-hover:ring-4 group-hover:ring-primary/30"
      )}></div>
    </div>
  )
}
