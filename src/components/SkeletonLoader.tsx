import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonLoaderProps {
  children: React.ReactNode;
  loadingTime?: number;
}

const SkeletonLoader = ({ children, loadingTime = 3000 }: SkeletonLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, Math.min(loadingTime, 12000)); // Max 12 seconds

    return () => clearTimeout(timer);
  }, [loadingTime]);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        {/* Header Skeleton */}
        <div className="h-20 bg-white shadow-lg mb-8">
          <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-12 w-12 rounded" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="hidden md:flex space-x-8">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-32 rounded-full" />
            </div>
          </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="min-h-screen bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
          <div className="text-center text-white space-y-8">
            <Skeleton className="h-16 w-96 mx-auto bg-white/20" />
            <Skeleton className="h-8 w-64 mx-auto bg-white/20" />
            <Skeleton className="h-12 w-48 mx-auto rounded-full bg-white/20" />
            <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-32 bg-white/20 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections Skeleton */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6 space-y-16">
            {[1, 2, 3].map((section) => (
              <div key={section} className="space-y-8">
                <div className="text-center space-y-4">
                  <Skeleton className="h-12 w-96 mx-auto" />
                  <Skeleton className="h-6 w-2/3 mx-auto" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="space-y-4">
                      <Skeleton className="h-48 w-full rounded-2xl" />
                      <Skeleton className="h-6 w-3/4" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SkeletonLoader;