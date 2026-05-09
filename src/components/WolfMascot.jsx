import wolfVideo from "/wolf.mp4";

export default function WolfMascot() {
  return (
    <div
      className="
        relative
        flex
        items-center
        justify-center
        w-full
        py-6
      "
    >

      {/* Outer Rotating Glow */}
      <div
        className="
          absolute
          w-56 h-56
          sm:w-72 sm:h-72
          md:w-80 md:h-80
          rounded-full
          bg-indigo-500/20
          blur-3xl
          animate-rotate-slow
        "
      />

      {/* Secondary Ambient Glow */}
      <div
        className="
          absolute
          w-44 h-44
          sm:w-56 sm:h-56
          md:w-64 md:h-64
          rounded-full
          bg-white/10
          blur-2xl
        "
      />

      {/* Floating Video Container */}
      <div
        className="
          relative
          w-52 h-52
          sm:w-64 sm:h-64
          md:w-72 md:h-72
          animate-float
        "
      >

        {/* Circular Frame */}
        <div
          className="
            relative
            w-full
            h-full
            rounded-full
            overflow-hidden
            border border-white/10
            shadow-[0_0_60px_rgba(255,255,255,0.12)]
            backdrop-blur-xl
          "
        >

          {/* Wolf Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="
              w-full
              h-full
              object-cover
              scale-110
            "
          >
            <source src={wolfVideo} type="video/mp4" />
          </video>

          {/* Soft Inner Glow */}
          <div className="absolute inset-0 bg-white/[0.03]" />

          {/* Edge Blend */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle, transparent 55%, rgba(0,0,0,0.88) 100%)",
            }}
          />

          {/* Cinematic Highlight */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              pointer-events-none
              opacity-40
            "
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent 35%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}