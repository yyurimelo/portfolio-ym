"use client";

import { useEffect, useRef, useState } from "react";

interface OptimizedVideoProps {
  src: string;
  mode: "hover" | "autoplay";
  className?: string;
  showControls?: boolean;
}

export function OptimizedVideo({
  src,
  mode,
  className = "",
  showControls = false,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = async () => {
    if (mode === "hover" && videoRef.current) {
      try {
        // Load the video if not loaded
        if (videoRef.current.readyState === 0) {
          await videoRef.current.load();
        }
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.warn("Play prevented:", error);
      }
    }
  };

  const handleMouseLeave = () => {
    if (mode === "hover" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to beginning
      setIsPlaying(false);
    }
  };

  const handleError = () => {
    setHasError(true);
    console.error("Failed to load video:", src);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Cleanup function to pause video when component unmounts
    const cleanup = () => {
      video.pause();
      video.currentTime = 0;
    };

    // Handle autoplay mode
    if (mode === "autoplay") {
      // Attempt to play the video
      video.play().catch((error) => {
        console.warn("Autoplay prevented:", error);
      });
    }

    // Cleanup on unmount
    return cleanup;
  }, [mode]);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
      >
        <p className="text-sm text-muted-foreground">Vídeo indisponível</p>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      preload="metadata"
      muted={mode === "hover"}
      loop={mode === "hover"}
      playsInline
      controls={showControls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onError={handleError}
      {...(mode === "autoplay" && { autoPlay: true })}
    />
  );
}
