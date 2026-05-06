export default function MoonProgress({ progress }) {

  return (
    <div className="flex flex-col items-center justify-center">

      {/* Moon */}
      <div className="relative w-40 h-40 rounded-full bg-zinc-800 overflow-hidden border border-white/10">

        {/* Glow */}
        <div
          className="absolute inset-0 bg-white transition-all duration-700"
          style={{
            clipPath: `inset(${100 - progress}% 0 0 0)`
          }}
        />

      </div>

      <p className="mt-6 text-zinc-400">
        Moon Energy: {Math.round(progress)}%
      </p>

    </div>
  );
}