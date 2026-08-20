import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioZenPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      return ctx;
    } catch {
      return null;
    }
  };

  const playPentatonicNote = (freq: number, duration = 3) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;

    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Koto / bamboo bell envelope
    noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(noteGain);
    noteGain.connect(masterGainRef.current);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  };

  const toggleSound = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend();
      }
      setIsPlaying(false);
    } else {
      let ctx = audioCtxRef.current;
      if (!ctx) {
        ctx = initAudio();
      }
      if (ctx && ctx.state === 'suspended') {
        ctx.resume();
      }

      // Traditional Insen / Yo scale frequencies: D, Eb, G, A, C
      const scale = [293.66, 311.13, 392.00, 440.00, 523.25, 587.33, 622.25, 783.99];

      playPentatonicNote(scale[0], 4);
      setTimeout(() => playPentatonicNote(scale[2], 3.5), 800);

      // Play soft occasional chimes
      intervalRef.current = window.setInterval(() => {
        const randomNote = scale[Math.floor(Math.random() * scale.length)];
        playPentatonicNote(randomNote, Math.random() * 2 + 2.5);
      }, 2400);

      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      id="zen-audio-toggle"
      onClick={toggleSound}
      title={isPlaying ? "Mute Zen Ambiance" : "Play Ambient Zen Sound"}
      className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all duration-300 border ${
        isPlaying
          ? 'bg-rose-950/60 border-rose-500/50 text-rose-300 glow-subtle'
          : 'bg-black/40 border-white/10 text-neutral-400 hover:text-rose-300 hover:border-rose-500/30'
      }`}
    >
      {isPlaying ? (
        <>
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
