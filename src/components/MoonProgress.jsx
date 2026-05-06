export default function MoonProgress({ progress }) {
  return (
    <div className="flex flex-col items-center justify-center">

      {/* Glow */}
      <div className="relative">

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl scale-110" />

        {/* Moon */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_0_60px_rgba(255,255,255,0.15)]">

          {/* Progress Fill */}
          <div
            className="absolute inset-0 bg-white transition-all duration-700"
            style={{
              clipPath: `inset(${100 - progress}% 0 0 0)`
            }}
          />

          {/* Moon Spots */}
          <div className="absolute top-8 left-10 w-5 h-5 rounded-full bg-black/10" />
          <div className="absolute top-16 right-10 w-7 h-7 rounded-full bg-black/10" />
          <div className="absolute bottom-10 left-14 w-4 h-4 rounded-full bg-black/10" />
          <div className="absolute bottom-16 right-16 w-6 h-6 rounded-full bg-black/10" />

          {/* Subtle Texture Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,white,transparent_70%)]" />

        </div>
      </div>

      <p className="mt-6 text-zinc-400 tracking-wide">
        Moon Energy: {Math.round(progress)}%
      </p>

    </div>
  );
}