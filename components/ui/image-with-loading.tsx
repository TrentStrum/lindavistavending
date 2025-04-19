"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWithLoadingProps extends React.ComponentProps<typeof Image> {
  containerClassName?: string;
  alt: string;
  onError?: (e: any) => void;
}

export const ImageWithLoading = ({
  className,
  containerClassName,
  onError,
  ...props
}: ImageWithLoadingProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = (e: any) => {
    setHasError(true);
    setIsLoading(false);
    if (onError) onError(e);
    console.error(`Failed to load image: ${props.src}`);
  };

  return (
    <div className={cn("relative w-full h-full", containerClassName)}>
      {isLoading && !hasError && (
        <Skeleton className="absolute inset-0" />
      )}
      <Image
        className={cn(
          "transition-opacity duration-300 object-cover",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoadingComplete={() => setIsLoading(false)}
        onError={handleError}
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-sm text-gray-500">Unable to load image</p>
        </div>
      )}
    </div>
  );
}; 