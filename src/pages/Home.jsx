import WolfMascot from "../components/WolfMascot";

export default function Home() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div
        className="
          grid
          md:grid-cols-2
          gap-14
          items-center
          min-h-[75vh]
        "
      >

        {/* Left */}
        <div className="text-center md:text-left">

          <p
            className="
              text-zinc-400
              text-xs sm:text-sm
              tracking-[0.25em]
              uppercase
              mb-4
            "
          >
            Night Productivity System
          </p>

          <h1
            className="
              libre-font
              leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            The Night
            <br />
            Remembers
            <br />
            Consistency.
          </h1>

          <p
            className="
              mt-6
              text-zinc-400
              max-w-xl
              text-base
              sm:text-lg
              leading-relaxed
              mx-auto
              md:mx-0
            "
          >
            A cinematic desktop productivity experience
            designed for consistency, focus, and nightly discipline.
          </p>

          {/* Quote */}
          <div
            className="
              mt-8
              border-l
              border-white/10
              pl-4
              inline-block
              text-left
            "
          >
            <p className="italic text-zinc-300 text-sm sm:text-base">
              “The wolf showed up again tonight.”
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <WolfMascot />
        </div>

      </div>
    </div>
  );
}