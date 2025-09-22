'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type FormData = z.infer<typeof formSchema>;

const GoogleIcon = () => (
    <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20c0-1.341-.138-2.65-.389-3.917z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.658-3.317-11.28-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.022,35.244,44,30.036,44,24C44,22.659,43.862,21.341,43.611,20.083z" />
    </svg>
);


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Mock authentication logic
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // In a real app, you'd call your authentication service here.
    // e.g., await signInWithEmailAndPassword(auth, data.email, data.password);
    console.log(`${isLogin ? 'Logging in' : 'Signing up'} with:`, data);

    // Simulate backend call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // For now, we just mock success and store a user object in localStorage
    const user = { email: data.email, isLoggedIn: true };
    localStorage.setItem('user', JSON.stringify(user));
    
    toast({
        title: isLogin ? "Welcome back!" : "Account created!",
        description: `Successfully signed in as ${data.email}`,
    });

    // Redirect to the role selection page after login
    router.push('/start');
    
    setIsLoading(false);
  };
  
  // Mock Google sign-in
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    // In a real app, you'd call your Google sign-in provider here.
    console.log('Attempting Google Sign-In...');
    
    // Simulate backend call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // For now, we just mock a user and store it
    const user = { email: 'guest.user@gmail.com', isLoggedIn: true };
    localStorage.setItem('user', JSON.stringify(user));
    
    toast({
        title: "Welcome!",
        description: "Successfully signed in with Google.",
    });

    router.push('/start');
    setIsLoading(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
    >
        <Card className="w-full shadow-2xl shadow-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl tracking-tight">
              Welcome to{' '}
              <span className="animated-text-gradient bg-clip-text text-transparent">
                Dream Quest
              </span>
            </CardTitle>
            <CardDescription className="pt-1">
              {isLogin ? 'Enter your credentials to access your account' : 'Create an account to get started'}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="grid gap-6 px-6 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  disabled={isLoading}
                  className="h-11 text-base"
                />
                {errors.email && (
                  <p className="text-sm text-destructive px-1">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register('password')}
                  disabled={isLoading}
                  className="h-11 text-base"
                />
                {errors.password && (
                  <p className="text-sm text-destructive px-1">{errors.password.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full button-gradient font-semibold py-6 text-base" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </CardContent>
          </form>

          <CardFooter className="flex-col px-6 pb-6 pt-4 gap-4">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full h-11 text-base" onClick={handleGoogleSignIn} disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon />}
              Continue with Google
            </Button>
            
            <p className="text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <Button variant="link" className="px-1" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign up' : 'Login'}
              </Button>
            </p>
          </CardFooter>
        </Card>
    </motion.div>
  );
}
