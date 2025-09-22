

import { Suspense } from 'react';
import CareerDetailClientPage from '@/components/explorer/career-detail-client-page';
import { Skeleton } from '@/components/ui/skeleton';
import DashboardLayout from '@/components/dashboard/dashboard-layout';

function CareerDetailLoading() {
    return (
        <div className="flex flex-col min-h-dvh">
            <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background px-4 md:px-6">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
                <div className="flex-1 flex justify-start">
                <Skeleton className="h-9 w-24" />
                </div>
                <div className="flex-1 flex justify-center">
                <Skeleton className="h-6 w-32" />
                </div>
                <div className="flex-1 flex justify-end">
                <Skeleton className="h-8 w-8" />
                </div>
            </div>
            </header>
            <main className="flex-1 flex justify-center items-center p-4 md:p-8">
                <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-8">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-16 w-3/4" />
                    <div className="space-y-3 w-full">
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-5/6 mx-auto" />
                    </div>
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-48" />
                        <Skeleton className="h-12 w-48" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default function CareerDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    
    return (
        <DashboardLayout>
            <Suspense fallback={<CareerDetailLoading />}>
                <CareerDetailClientPage slug={slug} />
            </Suspense>
        </DashboardLayout>
    );
}
