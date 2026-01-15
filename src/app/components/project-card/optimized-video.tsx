"use client";

import { useEffect, useRef, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  className?: string;
  showControls?: boolean;
}

export function OptimizedVideo({
  src,
  className = "",
  showControls = false,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video
      .play()
      .catch((error) => {
        console.warn("Autoplay prevented:", error);
      });

    return () => {
      video.pause();
      video.currentTime = 0;
    };
  }, []);

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <p className="text-sm text-muted-foreground">Vídeo indisponível</p>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      preload="auto"
      muted
      loop
      playsInline
      autoPlay
      controls={showControls}
      onError={() => setHasError(true)}
    />
  );
}
