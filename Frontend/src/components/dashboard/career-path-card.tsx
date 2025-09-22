
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type CareerPathCardProps = {
  title: string;
  description: string;
  animationDelay?: number;
};

export default function CareerPathCard({ title, description, animationDelay = 0 }: CareerPathCardProps) {
  return (
    <Card
      className="group flex flex-col justify-between overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
        <CardDescription className="pt-2 text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full font-semibold transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
        >
          View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
