import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import snowfallAudio from '../assets/audio/snowfall.mp3';

export const AudioZenPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);

  // Target ambient volume (soft and comfortable)
  const TARGET_VOLUME = 0.35;

  useEffect(() => {
    const audio = new Audio(snowfallAudio);
    audio.loop = true;
    audio.preload = 'metadata';
    audio.volume = TARGET_VOLUME;
    audioRef.current = audio;

    const handleCanPlay = () => setIsLoaded(true);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      // Smooth fade out
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      let vol = audio.volume;
      fadeIntervalRef.current = window.setInterval(() => {
        vol = Math.max(0, vol - 0.05);
        audio.volume = vol;
        if (vol <= 0) {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          audio.pause();
          setIsPlaying(false);
        }
      }, 40);
    } else {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      audio.volume = 0;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            // Smooth fade in
            let vol = 0;
            fadeIntervalRef.current = window.setInterval(() => {
              vol = Math.min(TARGET_VOLUME, vol + 0.04);
              audio.volume = vol;
              if (vol >= TARGET_VOLUME) {
                if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
              }
            }, 50);
          })
          .catch((err) => {
            console.warn('Audio playback prevented:', err);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <button
      id="zen-audio-toggle"
      onClick={toggleSound}
      title={isPlaying ? "Mute Zen Ambiance (øneheart x reidenshi - snowfall)" : "Play Ambient Zen Sound (øneheart x reidenshi - snowfall)"}
      className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all duration-300 border ${
        isPlaying
          ? 'bg-rose-950/60 border-rose-500/50 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.25)]'
          : 'bg-black/40 border-white/10 text-neutral-400 hover:text-rose-300 hover:border-rose-500/30'
      }`}
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 mr-0.5">
            <span className="w-0.5 h-2.5 bg-rose-400 rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-0.5 h-3.5 bg-rose-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-0.5 h-2 bg-rose-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
          </div>
          <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
          <span className="hidden sm:inline">Zen Audio (On)</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5" />
          <span className="hidden sm:inline flex items-center gap-1">
            Zen Audio <Sparkles className="w-2.5 h-2.5 text-rose-400/70" />
          </span>
        </>
      )}
    </button>
  );
};
