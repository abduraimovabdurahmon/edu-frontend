"use client"
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";

const VimeoEmbed = ({src}: {src: string}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [aspectRatio, setAspectRatio] = useState(56.25); // Default to 16:9 aspect ratio

  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      
      player.on("play", () => {
        console.log("Video is playing");
      });
    }
  }, []);

  useEffect(() => {
    const updateAspectRatio = () => {
      if (iframeRef.current) {
        const width = iframeRef.current.offsetWidth;
        const height = iframeRef.current.offsetHeight;
        setAspectRatio((height / width) * 100);
      }
    };
    
    window.addEventListener("resize", updateAspectRatio);
    updateAspectRatio();
    return () => window.removeEventListener("resize", updateAspectRatio);
  }, []);

  return (
    <div style={{ paddingTop: `${aspectRatio}%`, position: "relative" }}>
      <iframe
        ref={iframeRef}
        src = {src}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        title="Vimeo Video"
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
