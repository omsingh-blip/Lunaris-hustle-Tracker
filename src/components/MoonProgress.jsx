export default function MoonProgress({ progress }) {

  // Moon shadow phase logic
  const getShadow = () => {

    if (progress <= 5) {
      return "translateX(0%)";
    }

    if (progress <= 25) {
      return "translateX(-35%)";
    }

    if (progress <= 50) {
      return "translateX(-50%)";
    }

    if (progress <= 75) {
      return "translateX(-75%)";
    }

    return "translateX(-100%)";
  };

  // Moon phase names
  const getPhase = () => {

    if (progress <= 5) {
      return "🌑 New Moon";
    }

    if (progress <= 25) {
      return "🌒 Crescent Moon";
    }

    if (progress <= 50) {
      return "🌓 Half Moon";
    }

    if (progress <= 75) {
      return "🌔 Gibbous Moon";
    }

    return "🌕 Full Moon";
  };

  return (
    <div className="flex flex-col items-center justify-center">

      {/* Glow Wrapper */}
      <div className="relative">

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl scale-110" />

        {/* Moon */}
        <div
          className="
            relative
            w-48
            h-48
            rounded-full
            overflow-hidden
            bg-white
            shadow-[0_0_80px_rgba(255,255,255,0.25)]
          "
        >

          {/* Moon Texture */}
          <div className="absolute top-10 left-12 w-5 h-5 rounded-full bg-black/10" />

          <div className="absolute top-20 right-12 w-8 h-8 rounded-full bg-black/10" />

          <div className="absolute bottom-12 left-16 w-4 h-4 rounded-full bg-black/10" />

          <div className="absolute bottom-16 right-16 w-6 h-6 rounded-full bg-black/10" />

          {/* Dynamic Shadow */}
          <div
            className="
              absolute
              inset-0
              bg-black
              rounded-full
              transition-all
              duration-1000
            "
            style={{
              transform: getShadow(),
            }}
          />

          {/* Highlight Overlay */}
          <div
            className="
              absolute
              inset-0
              opacity-40
            "
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent 40%)",
            }}
          />

        </div>
      </div>

      {/* Text */}
      <div className="mt-8 text-center">

        <p className="text-zinc-400 tracking-wide text-sm uppercase">
          Current Phase
        </p>

        <h3 className="text-2xl libre-font mt-2">
          {getPhase()}
        </h3>

        <p className="text-zinc-300 text-lg mt-4">
          Moon Energy
        </p>

        <p className="text-4xl libre-font mt-2">
          {Math.round(progress)}%
        </p>

      </div>

    </div>
  );
}