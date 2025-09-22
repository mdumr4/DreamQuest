
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

type NewsItem = {
    title: string;
    description: string;
    link: string;
    date: string;
};

type CareerNewsProps = {
    items: NewsItem[];
    isLoading: boolean;
};

const NewsItemSkeleton = () => (
    <Card>
        <CardHeader>
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/4 mt-2" />
        </CardHeader>
        <CardContent>
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
            <Skeleton className="h-6 w-24 mt-4" />
        </CardContent>
    </Card>
);

export default function CareerNews({ items, isLoading }: CareerNewsProps) {
  if (isLoading) {
    return (
        <div className="flex flex-col h-full space-y-6">
            {[...Array(4)].map((_, index) => (
                <NewsItemSkeleton key={index} />
            ))}
        </div>
    );
  }

  if (!items || items.length === 0) {
    return (
        <div className="flex flex-col h-full min-h-[400px] items-center justify-center rounded-xl border bg-background p-8 text-center">
            <h3 className="text-xl font-semibold">No News Found</h3>
            <p className="text-muted-foreground mt-2">
                We couldn't find any relevant news for your profile right now.
            </p>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-full space-y-6">
        {items.map((item, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">
                        {item.description}
                    </p>
                    <Button asChild variant="link" className="px-0 font-semibold">
                        <Link href={item.link}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
    </div>
  );
}
