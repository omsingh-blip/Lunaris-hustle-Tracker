import WolfMascot from "../components/WolfMascot";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>

          <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase mb-4">
            Night Productivity System
          </p>

          <h1 className="text-7xl libre-font leading-tight">
            The Night
            <br />
            Remembers
            <br />
            Consistency.
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl text-lg leading-relaxed">
            A cinematic desktop productivity experience
            designed for consistency, focus, and nightly discipline.
          </p>

          {/* Quote */}
          <div className="mt-8 border-l border-white/10 pl-4">

            <p className="italic text-zinc-300">
              “The wolf showed up again tonight.”
            </p>

          </div>

        </div>

        {/* Right */}
        <WolfMascot />

      </div>

    </div>
  );
}