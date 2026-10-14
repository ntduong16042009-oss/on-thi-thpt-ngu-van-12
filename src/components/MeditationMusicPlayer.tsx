import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  ExternalLink,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Headphones,
  Music,
  Wind,
  CloudRain,
  Flame,
  Radio,
  SkipBack,
  SkipForward,
  Shuffle,
  ListMusic,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react';

declare global {
  interface Window {
    SC?: {
      Widget: {
        (iframe: HTMLIFrameElement): SCWidgetInstance;
        Events: {
          READY: string;
          PLAY: string;
          PAUSE: string;
          FINISH: string;
          PLAY_PROGRESS: string;
          SEEK: string;
        };
      };
    };
  }
}

interface SCWidgetSound {
  id?: number;
  title?: string;
  user?: {
    username?: string;
  };
  artwork_url?: string;
  duration?: number;
}

interface SCWidgetInstance {
  bind: (event: string, callback: (data?: any) => void) => void;
  unbind: (event: string) => void;
  load: (url: string, options?: Record<string, any>) => void;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  seekTo: (milliseconds: number) => void;
  setVolume: (volume: number) => void;
  next: () => void;
  prev: () => void;
  skip: (soundIndex: number) => void;
  getVolume: (callback: (volume: number) => void) => void;
  getDuration: (callback: (duration: number) => void) => void;
  getPosition: (callback: (position: number) => void) => void;
  getSounds: (callback: (sounds: SCWidgetSound[]) => void) => void;
  getCurrentSound: (callback: (sound: SCWidgetSound | null) => void) => void;
  getCurrentSoundIndex: (callback: (index: number) => void) => void;
  isPaused: (callback: (paused: boolean) => void) => void;
}

interface MeditationMusicPlayerProps {
  soundCloudUrl?: string;
  youtubeHashtagUrl?: string;
}

interface TrackMeta {
  index: number;
  title: string;
  artist?: string;
}

const INITIAL_KNOWN_TRACKS: Record<number, { title: string; artist: string }> = {
  0: { title: 'Họ Yêu Ai Mất Rồi - Nam Milo Remix (Ver 2)', artist: 'Hoang Minh Hung' },
  1: { title: 'Mất Anh Rồi - Thanh Phong Feat Remix - HOTTIKTOK 2022', artist: 'Thu Phương Hoàng' },
  2: { title: 'Thay Tôi Yêu Cô Ấy - Quang Nhat Remix 2024', artist: 'Quang Nhat' },
  3: { title: 'Anh Muốn Em Sống Sao - TD Remix', artist: 'HgMhuy ✪' },
  4: { title: 'Em Đau Rồi Đấy ft. Thu Cuối - Nam Con', artist: 'Đức Lee' },
  5: { title: 'Anh Sợ Yêu Remix', artist: 'Phúc Nguyễn' },
  6: { title: 'Yêu Anh Thật Đấy - BETA REMIX', artist: 'Beta Remix' },
  7: { title: 'Vở Kịch Của Em Remix', artist: 'Nguyen An' },
  8: { title: '[Full] Bán Duyên Remix Style Huy PT - Đỗ Quốc Thịnh', artist: 'DO QUOC THINH' },
  9: { title: 'Đừng Nói - Tuấn Smile x Huy PT Remix', artist: 'H2SO4 MEDIA MUSIC' },
  10: { title: 'Đừng Ai Nhắc Về Cô Ấy - Huy PT Remix', artist: 'Simp' },
  11: { title: 'Deep Sea ft Không Qua Vòng Luân Hồi HUY PT REMIX', artist: 'Phạm Huỳnh Anh Đạt' },
  12: { title: 'Full Đừng Nói V2 - Tuấn Smile Remix', artist: 'Smile Music Group' },
  13: { title: 'Cao Ốc 20 x Có Khi Nào Rời Xa Remix', artist: 'Toann Remix' },
  14: { title: 'Nơi Tình Yêu Kết Thúc (Remix) - Quang Nhật Remix', artist: 'Ngọc Chiến' },
  15: { title: 'Tìm Em Remix Hot Tiktok (Hngle Ft Bảo Anh)', artist: 'PHAN BAO' },
  16: { title: 'Ngọc - Điều Em Lo Sợ - Hanhhnee Mix', artist: 'HANHHNEE REMIX' },
  17: { title: 'NHỮNG GÌ ANH NÓI (VIETZ x WI REMIX) - BOZITT', artist: 'VietZ' },
  18: { title: '[Nhạc 8D] Quên Một Người Từng Yêu - Minh Lý Remix', artist: 'K4A MUSIC' },
  19: { title: 'Hứa Đợi Nhưng Chẳng Tới - Remix', artist: 'hgiang' },
  20: { title: 'LAO TÂM KHỔ TỨ - HUY PT Remix • Trái Tim Đã Mang Tổn Thương', artist: '.dthvng ✪' },
  21: { title: 'Lao Tâm Khổ Tứ x Hứa Đợi Nhưng Chẳng Tới (RIN Music Remix)', artist: 'Lê Thái Hoàng' },
  22: { title: 'Vạn Sự Tuỳ Duyên Remix - Huy PT', artist: 'tq.chuche s1tg' },
  23: { title: 'Về Bên Anh - Remix', artist: 'Huy Chuong' },
  24: { title: 'Mixtape Xin Mưa Đừng Rơi', artist: 'DucHuy' },
  25: { title: 'Hẹn Em Kiếp Sau - TNBH Remix (Hia Relaxing Mix)', artist: 'Nguyễn Điêu Minh Hiếu' },
  26: { title: 'Hẹn Em Kiếp Sau Remix - Chill Cool by Bình Legend', artist: 'Phạm Thanh Bình' },
  27: { title: 'Đánh Mất Em Remix', artist: 'DJ M Tran' },
  28: { title: 'Tôi Đã Yêu Em Lâu Rồi, Sao Em Chẳng Nhận Ra - DJ AM', artist: 'VietMix' },
  29: { title: 'Yêu Thật Khó Xoá Thật Đau Remix - Tomrry Remix', artist: 'Ascent Music' },
  30: { title: 'Anh Đã Từng Cố Gắng Remix', artist: 'Nhuw Trung' },
  31: { title: 'Phía Sau Một Cô Gái - Haru Haru - Mười Ngàn Năm Remix', artist: 'TrinhBaoLong' },
  32: { title: 'Yêu Ai Cũng Sai ft Nếu Ta Ngược Lối - Tuấn Smile Remix', artist: 'Tuấn Smile Remix' },
  33: { title: 'Tìm Em (Remix) Hngle ft. Bảo Anh', artist: 'vudovn' },
  34: { title: 'Tình Ta Hai Ngã - QIZ Remix | WINKZ MUSIC', artist: 'Trần Mạnh Đạt' },
  35: { title: 'Được Ăn Cả Ngã Về Không - Teddy Tran x TopKn (Remix)', artist: 'CiVhee' },
  36: { title: 'Xin Đừng Rời Xa Anh - MP Remix', artist: 'Lê An Thái' },
  37: { title: 'CHẤP NIỆM TRONG EM REMIX - ProdCB9', artist: 'CB9 REMIX' },
  38: { title: 'Khó Gần Dễ Xa - Full Huy PT Remix', artist: '.MyNger' },
  39: { title: 'Lỡ Một Lời Thương x Đôi Chân Lạc Lối - MP x VH Remix', artist: 'Khang' },
  40: { title: 'MESSENGER - CAUSE I LOVE YOU | TUANSIEU RMX', artist: 'Tuan Sieu' },
  41: { title: 'Bông Hoa Đẹp Nhất - Quách Trọng Remix', artist: 'Tran Cong Nhat' },
  42: { title: 'Trúc Xinh - HMINH Remix', artist: 'Phạm Tuấn Minh' },
  43: { title: 'Không Ai Yêu Em Bằng Anh - Hương Ly (VietZ Remix)', artist: 'Beta Remix' },
  44: { title: 'Nụ Hồng Mong Manh (Full Remix)', artist: 'kezjuein' },
  45: { title: 'Một Người Từng Thương Nhiều Thế Remix', artist: 'Bạch Hoan' },
  46: { title: 'ZALO - ĐIỀU ANH BIẾT - MinzHieu x Tuấn Siêu', artist: 'Tuan Sieu' },
  47: { title: 'Anh Về Đây Làm Gì - Huy PT Remix Demo', artist: 'Vua Tay Bac' },
  48: { title: 'Xin Lỗi Vì Đã Xuất Hiện - NT Remix', artist: 'hearin' },
  49: { title: 'Nhìn Em Lần Cuối Remix', artist: 'Quoc Thinh Doo' },
  50: { title: 'NỖI NHỚ MANG TÊN MÌNH - Hoài Lâm x Ciray Remix', artist: 'Nguyễn Hoàng Long' },
};

export const MeditationMusicPlayer: React.FC<MeditationMusicPlayerProps> = ({
  soundCloudUrl = 'https://on.soundcloud.com/fIlJ5PssbwN3d1S4rP',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMiniHidden, setIsMiniHidden] = useState(false);
  const [activeTab, setActiveTab] = useState<'soundcloud' | 'tracks' | 'ambient'>('tracks');
  const [trackSearch, setTrackSearch] = useState('');

  // SoundCloud Widget state
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const widgetRef = useRef<SCWidgetInstance | null>(null);
  const [isWidgetReady, setIsWidgetReady] = useState(false);
  const [isScPlaying, setIsScPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentTrackTitle, setCurrentTrackTitle] = useState<string>(
    INITIAL_KNOWN_TRACKS[0].title
  );
  const [currentTrackArtist, setCurrentTrackArtist] = useState<string>(
    INITIAL_KNOWN_TRACKS[0].artist
  );
  const [totalTracks, setTotalTracks] = useState<number>(51);
  const [tracksMap, setTracksMap] = useState<Record<number, { title: string; artist: string }>>(
    INITIAL_KNOWN_TRACKS
  );
  const [scVolume, setScVolume] = useState<number>(80);
  const [isScMuted, setIsScMuted] = useState<boolean>(false);

  // Ambient synthesizer state
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);
  const [ambientType, setAmbientType] = useState<'meditation' | 'rain' | 'waves'>('meditation');
  const [ambientVolume, setAmbientVolume] = useState(0.5);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<any[]>([]);

  // Refresh current sound info from SC Widget
  const syncCurrentSoundInfo = useCallback(() => {
    const widget = widgetRef.current;
    if (!widget) return;

    widget.getCurrentSoundIndex((idx) => {
      if (typeof idx === 'number' && idx >= 0) {
        setCurrentTrackIndex(idx);
      }
    });

    widget.getCurrentSound((sound) => {
      if (sound && sound.title) {
        const title = sound.title;
        const artist = sound.user?.username || 'SoundCloud';
        setCurrentTrackTitle(title);
        setCurrentTrackArtist(artist);
        widget.getCurrentSoundIndex((idx) => {
          if (typeof idx === 'number' && idx >= 0) {
            setTracksMap((prev) => ({
              ...prev,
              [idx]: { title, artist },
            }));
          }
        });
      }
    });

    widget.getSounds((sounds) => {
      if (Array.isArray(sounds) && sounds.length > 0) {
        setTotalTracks(sounds.length);
        const discovered: Record<number, { title: string; artist: string }> = {};
        sounds.forEach((s, i) => {
          if (s && s.title) {
            discovered[i] = {
              title: s.title,
              artist: s.user?.username || 'Nghệ sĩ',
            };
          }
        });
        if (Object.keys(discovered).length > 0) {
          setTracksMap((prev) => ({ ...prev, ...discovered }));
        }
      }
    });
  }, []);

  // Load SoundCloud Widget API script and bind events
  useEffect(() => {
    const initWidget = () => {
      if (!window.SC || !window.SC.Widget || !iframeRef.current) return;
      try {
        const widget = window.SC.Widget(iframeRef.current);
        widgetRef.current = widget;

        widget.bind(window.SC.Widget.Events.READY, () => {
          setIsWidgetReady(true);
          widget.setVolume(scVolume);
          syncCurrentSoundInfo();
        });

        widget.bind(window.SC.Widget.Events.PLAY, () => {
          setIsScPlaying(true);
          syncCurrentSoundInfo();
        });

        widget.bind(window.SC.Widget.Events.PAUSE, () => {
          setIsScPlaying(false);
        });

        widget.bind(window.SC.Widget.Events.FINISH, () => {
          syncCurrentSoundInfo();
        });
      } catch {
        // Ignore widget init errors
      }
    };

    if (typeof window !== 'undefined' && typeof window.SC?.Widget === 'function') {
      initWidget();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://w.soundcloud.com/player/api.js"]'
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.addEventListener('load', initWidget);
        return () => existingScript.removeEventListener('load', initWidget);
      } else {
        const script = document.createElement('script');
        script.src = 'https://w.soundcloud.com/player/api.js';
        script.async = true;
        script.onload = initWidget;
        document.body.appendChild(script);
      }
    }
  }, [syncCurrentSoundInfo]);

  // Listen for custom global event so buttons in Header/Hero can open the player without reloading
  useEffect(() => {
    const handleOpenMusicPlayer = () => {
      setIsMiniHidden(false);
      setIsOpen(true);
    };
    window.addEventListener('open-music-player', handleOpenMusicPlayer);
    return () => window.removeEventListener('open-music-player', handleOpenMusicPlayer);
  }, []);

  // SoundCloud Controls
  const handleTogglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const widget = widgetRef.current;
    if (!widget) {
      setIsOpen(true);
      return;
    }
    widget.toggle();
  };

  const handlePrevTrack = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const widget = widgetRef.current;
    if (!widget) return;
    const prevIdx = currentTrackIndex > 0 ? currentTrackIndex - 1 : totalTracks - 1;
    widget.skip(prevIdx);
    setCurrentTrackIndex(prevIdx);
    setIsScPlaying(true);
    setTimeout(syncCurrentSoundInfo, 350);
  };

  const handleNextTrack = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const widget = widgetRef.current;
    if (!widget) return;
    const nextIdx = currentTrackIndex < totalTracks - 1 ? currentTrackIndex + 1 : 0;
    widget.skip(nextIdx);
    setCurrentTrackIndex(nextIdx);
    setIsScPlaying(true);
    setTimeout(syncCurrentSoundInfo, 350);
  };

  const handleShuffleTrack = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const widget = widgetRef.current;
    if (!widget || totalTracks <= 1) return;
    let randomIdx = Math.floor(Math.random() * totalTracks);
    if (randomIdx === currentTrackIndex) {
      randomIdx = (randomIdx + 1) % totalTracks;
    }
    widget.skip(randomIdx);
    setCurrentTrackIndex(randomIdx);
    setIsScPlaying(true);
    setTimeout(syncCurrentSoundInfo, 350);
  };

  const handleSelectTrackIndex = (idx: number) => {
    const widget = widgetRef.current;
    if (!widget) return;
    widget.skip(idx);
    setCurrentTrackIndex(idx);
    setIsScPlaying(true);
    if (tracksMap[idx]) {
      setCurrentTrackTitle(tracksMap[idx].title);
      setCurrentTrackArtist(tracksMap[idx].artist);
    } else {
      setCurrentTrackTitle(`Bài #${idx + 1} — Playlist nhạc của toi`);
    }
    setTimeout(syncCurrentSoundInfo, 400);
  };

  const handleScVolumeChange = (newVol: number) => {
    setScVolume(newVol);
    setIsScMuted(newVol === 0);
    if (widgetRef.current) {
      widgetRef.current.setVolume(newVol);
    }
  };

  const handleToggleScMute = () => {
    if (!widgetRef.current) return;
    if (isScMuted) {
      const restored = scVolume > 0 ? scVolume : 80;
      setScVolume(restored);
      setIsScMuted(false);
      widgetRef.current.setVolume(restored);
    } else {
      setIsScMuted(true);
      widgetRef.current.setVolume(0);
    }
  };

  // Stop synthetic ambient audio
  const stopAmbientAudio = () => {
    nodesRef.current.forEach((node) => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch {
        // ignore
      }
    });
    nodesRef.current = [];
    setIsPlayingAmbient(false);
  };

  // Start synthetic ambient audio
  const startAmbientAudio = (type = ambientType) => {
    stopAmbientAudio();

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(ambientVolume * 0.35, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      const createdNodes: any[] = [masterGain];

      if (type === 'meditation') {
        const freqs = [108, 216, 432, 648];
        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.1 + idx * 0.05, ctx.currentTime);
          lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(gain.gain);

          gain.gain.setValueAtTime(0.12 / (idx + 1), ctx.currentTime);
          osc.connect(gain);
          gain.connect(masterGain);

          osc.start();
          lfo.start();
          createdNodes.push(osc, gain, lfo, lfoGain);
        });
      } else if (type === 'rain') {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        whiteNoise.start();
        createdNodes.push(whiteNoise, filter);
      } else if (type === 'waves') {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.12, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(250, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();
        lfo.start();
        createdNodes.push(noise, filter, lfo, lfoGain);
      }

      nodesRef.current = createdNodes;
      setIsPlayingAmbient(true);
    } catch {
      setIsPlayingAmbient(false);
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        ambientVolume * 0.35,
        audioCtxRef.current.currentTime
      );
    }
  }, [ambientVolume]);

  useEffect(() => {
    return () => {
      stopAmbientAudio();
    };
  }, []);

  const handleToggleAmbient = () => {
    if (isPlayingAmbient) {
      stopAmbientAudio();
    } else {
      startAmbientAudio(ambientType);
    }
  };

  const handleSelectAmbientType = (type: 'meditation' | 'rain' | 'waves') => {
    setAmbientType(type);
    if (isPlayingAmbient) {
      startAmbientAudio(type);
    }
  };

  // Official SoundCloud Playlist Embed URL (height=340 shows the full interactive 51-track list!)
  const soundcloudEmbedSrc =
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2290992681&color=%23e94560&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false&show_artwork=true';

  return (
    <aside
      aria-label="Trình phát nhạc ôn bài SoundCloud liên tục"
      className="fixed bottom-18 sm:bottom-4 left-3 right-3 sm:right-auto sm:left-4 z-[60]"
      onClick={(e) => e.stopPropagation()}
    >
      {/*
        MINI CONTROLLER BAR & FLOATING BUBBLE
        Allows Play/Pause, Previous, Next, and Expanding WITHOUT ever unmounting the iframe!
      */}
      {!isOpen && isMiniHidden && (
        <button
          type="button"
          onClick={() => setIsMiniHidden(false)}
          className="group flex items-center gap-2 p-2 rounded-full bg-[#16213e]/95 backdrop-blur-xl border border-[#ff5500]/60 shadow-[0_8px_25px_rgba(0,0,0,0.6)] text-xs text-white hover:border-[#ff5500] active:scale-95 transition-all cursor-pointer"
          title="Mở thanh điều khiển nhạc SoundCloud (51 bài)"
        >
          <div
            className={`w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff5500] to-[#e94560] flex items-center justify-center text-white shadow-md ${
              isScPlaying || isPlayingAmbient ? 'animate-pulse' : ''
            }`}
          >
            <Music className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline font-semibold pr-2 text-orange-200">
            {isScPlaying ? 'Đang phát' : 'Nhạc Ôn Bài'}
          </span>
        </button>
      )}

      {!isOpen && !isMiniHidden && (
        <div className="flex items-center gap-2 p-2 pr-3 rounded-2xl bg-[#16213e]/95 backdrop-blur-xl border-2 border-[#ff5500]/60 shadow-[0_10px_30px_rgba(0,0,0,0.65)] text-xs text-white w-full sm:max-w-[400px]">
          {/* Expand button & Spinning indicator */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 text-left min-w-0 flex-1 group cursor-pointer"
            title="Mở rộng trình phát & danh sách 51 bài nhạc"
          >
            <div
              className={`w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff5500] to-[#e94560] flex items-center justify-center text-white shrink-0 shadow-md ${
                isScPlaying || isPlayingAmbient ? 'animate-pulse' : ''
              }`}
            >
              <Music className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.2 rounded bg-[#ff5500]/25 text-orange-300 font-mono text-[10px] font-bold shrink-0">
                  #{currentTrackIndex + 1}/{totalTracks}
                </span>
                <span className="font-bold text-white truncate text-xs group-hover:text-amber-300 transition-colors">
                  {currentTrackTitle}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 truncate flex items-center gap-1">
                <span>{ isScPlaying ? 'Đang phát' : 'Nhấn để chọn bài' }</span>
                <span>•</span>
                <span className="text-orange-400 font-medium">Mở danh sách nhạc</span>
              </div>
            </div>
          </button>

          {/* Mini Transport Controls (Prev / Play-Pause / Next / Expand / Hide) */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={handlePrevTrack}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title="Bài trước"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={handleTogglePlay}
              className={`p-2 rounded-xl font-bold transition-all cursor-pointer ${
                isScPlaying
                  ? 'bg-[#e94560] text-white shadow-[0_0_12px_rgba(233,69,96,0.6)]'
                  : 'bg-[#ff5500] hover:bg-[#ff6611] text-white'
              }`}
              title={isScPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc ngay'}
            >
              {isScPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
            </button>

            <button
              type="button"
              onClick={handleNextTrack}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer"
              title="Bài tiếp theo"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="p-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-colors cursor-pointer"
              title="Mở bảng chọn bài nhạc"
            >
              <ChevronUp className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsMiniHidden(true)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Thu gọn thành nút tròn nhỏ"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/*
        PERSISTENT EXPANDED PANEL:
        CRITICAL: We NEVER unmount this container or the SoundCloud <iframe>!
        When minimized (!isOpen), it is moved off-screen with opacity-0 pointer-events-none
        so the browser keeps the SoundCloud audio stream running 100% uninterrupted!
      */}
      <div
        className={
          isOpen
            ? 'w-full sm:w-[400px] max-h-[82vh] overflow-y-auto bg-[#16213e]/95 backdrop-blur-xl border-2 border-[#ff5500]/60 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-xs text-slate-200 space-y-3 transition-all duration-200'
            : 'fixed -left-[9999px] -bottom-[9999px] w-[360px] h-[400px] opacity-0 pointer-events-none overflow-hidden'
        }
        aria-hidden={!isOpen}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#ff5500] to-[#e94560] flex items-center justify-center text-white shadow-sm shrink-0">
              <Radio className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="font-bold text-white text-sm block leading-tight truncate">
                Nhạc Ôn Bài SoundCloud (51 Bài)
              </span>
              <span className="text-[10px] text-emerald-400 font-medium block">
                ● Phát liên tục khi đọc bài &amp; khi thu nhỏ
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <a
              href={soundCloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-orange-300 hover:text-white transition-colors"
              title="Mở link gốc trên SoundCloud"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 font-semibold transition-colors cursor-pointer"
              title="Thu nhỏ xuống góc màn hình (Nhạc vẫn phát bình thường)"
            >
              <Minimize2 className="w-3.5 h-3.5" />
              <span>Thu nhỏ</span>
            </button>
          </div>
        </div>

        {/* Now Playing & Custom Transport Controls */}
        <div className="p-3 rounded-xl bg-[#121526] border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <span className="px-2 py-0.5 rounded bg-[#ff5500]/20 text-orange-300 font-mono text-[10px] font-bold">
              Bài #{currentTrackIndex + 1} / {totalTracks}
            </span>
            <span className="text-[10px] text-slate-400 truncate">
              {currentTrackArtist}
            </span>
          </div>

          <div className="font-bold text-white text-xs sm:text-sm truncate" title={currentTrackTitle}>
            {currentTrackTitle}
          </div>

          {/* Transport Buttons: Prev, Play/Pause, Next, Shuffle, Volume */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevTrack}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Chuyển về bài trước"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleTogglePlay}
                className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isScPlaying
                    ? 'bg-[#e94560] text-white shadow-[0_0_15px_rgba(233,69,96,0.5)]'
                    : 'bg-gradient-to-r from-[#ff5500] to-[#e94560] text-white shadow-md'
                }`}
              >
                {isScPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Tạm dừng</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Phát nhạc</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleNextTrack}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Chuyển sang bài tiếp theo"
              >
                <SkipForward className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleShuffleTrack}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-amber-300 hover:text-white border border-white/10 transition-all cursor-pointer"
                title="Chọn ngẫu nhiên 1 bài trong 51 bài"
              >
                <Shuffle className="w-4 h-4" />
              </button>
            </div>

            {/* Volume slider */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleToggleScMute}
                className="text-slate-400 hover:text-white cursor-pointer"
                title={isScMuted ? 'Bật tiếng' : 'Tắt tiếng'}
              >
                {isScMuted || scVolume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-400" />
                ) : (
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isScMuted ? 0 : scVolume}
                onChange={(e) => handleScVolumeChange(parseInt(e.target.value, 10))}
                className="w-16 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
                title={`Âm lượng: ${isScMuted ? 0 : scVolume}%`}
              />
            </div>
          </div>
        </div>

        {/* Mode Switcher Tabs inside Expanded Player */}
        <div className="grid grid-cols-3 gap-1.5 bg-[#121526] p-1 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('soundcloud')}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              activeTab === 'soundcloud'
                ? 'bg-[#ff5500] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>Trình Phát</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tracks')}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              activeTab === 'tracks'
                ? 'bg-[#e94560] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ListMusic className="w-3.5 h-3.5" />
            <span>Chọn Bài ({totalTracks})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ambient')}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1 transition-all cursor-pointer ${
              activeTab === 'ambient'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>Âm Nền Thiền</span>
          </button>
        </div>

        {/*
          PERSISTENT SOUNDCLOUD IFRAME:
          Always remains mounted in DOM even when switching sub-tabs!
        */}
        <div
          className={
            activeTab === 'soundcloud'
              ? 'rounded-xl overflow-hidden border border-[#ff5500]/40 bg-black/50 shadow-inner'
              : 'fixed -left-[9999px] top-0 w-[340px] h-[300px] opacity-0 pointer-events-none overflow-hidden'
          }
        >
          <iframe
            ref={iframeRef}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay; encrypted-media"
            src={soundcloudEmbedSrc}
            title="SoundCloud Playlist: nhạc của toi"
            className="w-full block"
          />
        </div>

        {/* SUB-TAB 2: QUICK TRACK PICKER (1 -> 51) */}
        {activeTab === 'tracks' && (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <input
                type="text"
                value={trackSearch}
                onChange={(e) => setTrackSearch(e.target.value)}
                placeholder="Tìm tên bài nhạc hoặc số bài (1-51)..."
                className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#121526] border border-white/15 focus:border-[#ff5500] text-xs text-white placeholder-slate-500 outline-none"
              />
              {trackSearch && (
                <button
                  type="button"
                  onClick={() => setTrackSearch('')}
                  className="px-2 py-1 rounded bg-white/10 text-slate-300 hover:text-white text-[11px] cursor-pointer"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Number grid + Full 51-song list for instant jump */}
            <div className="max-h-[250px] overflow-y-auto pr-1 space-y-2.5 scrollbar-thin">
              {!trackSearch.trim() && (
                <div className="grid grid-cols-6 gap-1">
                  {Array.from({ length: totalTracks }, (_, idx) => {
                    const isCurrent = idx === currentTrackIndex;
                    const known = tracksMap[idx];
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectTrackIndex(idx)}
                        className={`py-1 px-1 rounded-md font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-[#e94560] text-white border-[#e94560] shadow-md'
                            : 'bg-[#121526] text-slate-300 border-white/10 hover:border-[#ff5500] hover:text-white'
                        }`}
                        title={known ? `Bài #${idx + 1}: ${known.title}` : `Chuyển tới bài số ${idx + 1}`}
                      >
                        #{idx + 1}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Full list of all 51 tracks */}
              <div className="pt-2 border-t border-white/10 space-y-1">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1 flex items-center justify-between">
                  <span>Danh sách 51 bài (Nhấn để phát ngay):</span>
                  <span className="text-amber-300 font-mono">Đang ở #{currentTrackIndex + 1}</span>
                </div>
                {Object.entries(tracksMap)
                  .filter(([idxStr, meta]) => {
                    if (!trackSearch.trim()) return true;
                    const q = trackSearch.toLowerCase().trim();
                    const numStr = `${Number(idxStr) + 1}`;
                    return (
                      numStr === q ||
                      `#${numStr}` === q ||
                      meta.title.toLowerCase().includes(q) ||
                      meta.artist.toLowerCase().includes(q)
                    );
                  })
                  .map(([idxStr, meta]) => {
                    const idx = Number(idxStr);
                    const isCurrent = idx === currentTrackIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectTrackIndex(idx)}
                        className={`w-full text-left px-2.5 py-2 rounded-lg text-xs flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                          isCurrent
                            ? 'bg-[#e94560]/25 border border-[#e94560]/60 text-white font-semibold'
                            : 'bg-white/[0.03] hover:bg-white/10 text-slate-200 border border-transparent'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="truncate">
                            <strong className="text-orange-400 font-mono mr-1.5">#{idx + 1}</strong>
                            <span>{meta.title}</span>
                          </div>
                          <div className="text-[10px] text-slate-400 truncate pl-6">
                            {meta.artist}
                          </div>
                        </div>
                        {isCurrent ? (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 shrink-0 font-mono">
                            {isScPlaying ? 'Đang phát' : 'Đã chọn'}
                          </span>
                        ) : (
                          <Play className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: AMBIENT SOUND GENERATOR */}
        {activeTab === 'ambient' && (
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                Âm Nền Tĩnh Tâm (Phát kèm nhạc)
              </span>

              <button
                type="button"
                onClick={handleToggleAmbient}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  isPlayingAmbient
                    ? 'bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                    : 'bg-white/10 text-slate-300 hover:text-white'
                }`}
              >
                {isPlayingAmbient ? (
                  <>
                    <Pause className="w-3 h-3 fill-current" />
                    <span>Dừng âm nền</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Bật âm nền</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => handleSelectAmbientType('meditation')}
                className={`p-2 rounded-lg text-[10px] font-medium flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                  ambientType === 'meditation'
                    ? 'bg-[#e94560]/20 border-[#e94560] text-white font-bold'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-[#f39c12]" />
                <span>Thiền 432Hz</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectAmbientType('rain')}
                className={`p-2 rounded-lg text-[10px] font-medium flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                  ambientType === 'rain'
                    ? 'bg-blue-500/20 border-blue-500 text-white font-bold'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <CloudRain className="w-3.5 h-3.5 text-blue-400" />
                <span>Tiếng Mưa</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectAmbientType('waves')}
                className={`p-2 rounded-lg text-[10px] font-medium flex flex-col items-center gap-1 border transition-all cursor-pointer ${
                  ambientType === 'waves'
                    ? 'bg-cyan-500/20 border-cyan-500 text-white font-bold'
                    : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Wind className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sóng Biển</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
              <Volume2 className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={ambientVolume}
                onChange={(e) => setAmbientVolume(parseFloat(e.target.value))}
                className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ff5500]"
              />
              <span className="w-7 text-right">{Math.round(ambientVolume * 100)}%</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
