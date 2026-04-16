'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type VideoCardProps = {
  src: string;
  label: string;
  delay: number;
};

function VideoCard({ src, label, delay }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current?.play();
    setPlaying(true);
  };
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlaying(false);
  };
  // Touch support
  const handleTouchStart = () => {
    if (playing) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-3xl bg-[#F5F5F7] cursor-pointer"
      style={{ aspectRatio: '9/16' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      {/* Play hint overlay — fades out when playing */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
          playing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 4l12 6-12 6V4z" fill="#1D1D1F" />
          </svg>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/30 to-transparent">
        <p className="text-white text-[13px] font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

const videos = [
  { src: '/videos/video-1.mov', label: 'AI color formulation in real time' },
  { src: '/videos/video-2.mov', label: 'Precision dispensing at 0.1ml' },
  { src: '/videos/video-3.mov', label: 'The 12-pigment mixing system' },
  { src: '/videos/video-4.mov', label: 'From formula to application' },
];

export default function VideoGrid() {
  return (
    <section className="section-white py-28">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-4">See it in action</p>
          <h2 className="headline-lg mb-5">Watch the system work.</h2>
          <p className="body-text max-w-[480px] mx-auto">
            Hover to play. Four windows into the Digital Color experience.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {videos.map((v, i) => (
            <VideoCard key={v.src} src={v.src} label={v.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
