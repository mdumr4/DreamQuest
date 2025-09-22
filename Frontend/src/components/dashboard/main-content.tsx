
"use client";

import CareerIdentity from './career-identity';
import CareerNews from './career-news';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '@/lib/utils';
import ExplorePathsView from './explore-paths-view';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Info } from 'lucide-react';

// Inlined type definitions to remove dependencies
type NewsItem = {
    title: string;
    description: string;
    link: string;
    date: string;
};

type CareerPath = {
  title: string;
  description: string;
};

type MainContentProps = {
  activeTab: 'identity' | 'explore' | 'news';
  statement: string;
  isLoading: boolean;
  onRegenerate: () => void;
  newsItems: NewsItem[];
  isNewsLoading: boolean;
  jobPaths: CareerPath[];
  coursePaths: CareerPath[];
  isExploreLoading: boolean;
  isSidebarVisible: boolean;
  educationLevel: string;
  onNavigateToExplore: () => void;
  onNavigateToMentor: () => void;
};

export default function MainContent({
  activeTab,
  statement,
  isLoading,
  onRegenerate,
  newsItems,
  isNewsLoading,
  jobPaths,
  coursePaths,
  isExploreLoading,
  isSidebarVisible,
  educationLevel,
  onNavigateToExplore,
  onNavigateToMentor,
}: MainContentProps) {
  return (
    <main
      className={cn(
        'flex-1 transition-all duration-300 flex flex-col',
        'overflow-y-auto',
        activeTab !== 'explore' && 'p-6 md:p-8 lg:p-12 xl:p-16',
        !isSidebarVisible && activeTab !== 'explore' && 'w-full max-w-6xl mx-auto flex justify-center'
      )}
    >
      {activeTab === 'identity' && (
        <CareerIdentity
          statement={statement}
          isLoading={isLoading}
          onRegenerate={onRegenerate}
          onNavigateToExplore={onNavigateToExplore}
          onNavigateToMentor={onNavigateToMentor}
        />
      )}

      {activeTab === 'explore' && (
        <ExplorePathsView
          isLoading={isExploreLoading}
          jobPaths={jobPaths}
          coursePaths={coursePaths}
          educationLevel={educationLevel}
        />
      )}

      {activeTab === 'news' && (
        <>
          <Alert className="mb-6 bg-blue-50 border-blue-200 text-blue-800">
            <Info className="h-4 w-4 !text-blue-800" />
            <AlertTitle>Under Development</AlertTitle>
            <AlertDescription>
              The Career News feature is a work in progress. The articles shown below are for demonstration purposes only.
            </AlertDescription>
          </Alert>
          <ScrollArea className="h-full">
            <CareerNews items={newsItems} isLoading={isNewsLoading} />
          </ScrollArea>
        </>
      )}
    </main>
  );
}
