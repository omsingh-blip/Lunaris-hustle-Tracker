import LogForm from "./components/LogForm";
import Stats from "./components/Stats";
import ChartComponent from "./components/Chart";
import WolfMascot from "./components/WolfMascot";
import WolfTasks from "./components/WolfTasks";
import WolfIcon from "./components/WolfIcon";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black text-white">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-indigo-900 rounded-full blur-3xl opacity-20" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-zinc-700 rounded-full blur-3xl opacity-10" />

      {/* Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.08]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto p-8">

        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">

          {/* Left Side */}
          <div>

         
 {/* Logo */}
<div className="relative inline-flex group rounded-2xl p-[2px] overflow-hidden mb-4;">
  
  {/* Moving Glow Border */}
  <div className="absolute inset-0 rounded-2xl animate-[spinGlow_4s_linear_infinite]">
    <div
      className="
        absolute top-0 left-0
        h-[40%] w-[40%]
        bg-white
        blur-xl opacity-90
      "
    />
  </div>

  {/* Content Box */}
  <div
    className="
      relative z-10
      flex items-center gap-3
      px-5 py-3
      rounded-2xl
      bg-[#050816]
      text-zinc-300
      text-sm
      tracking-[0.3em]
      uppercase
      backdrop-blur-xl
    "
  >
    <WolfIcon className="w-8 h-8" />

    <span className="text-white pt-[2px]">
      Lunaris
    </span>
  </div>
</div>

            <h1 className="text-6xl libre-font leading-tight mt-4">
              The Night
              <br />
              Remembers
              <br />
              Consistency.
            </h1>

            <p className="mt-6 text-zinc-400 max-w-xl text-lg leading-relaxed">
              Track your daily hustle, protect your streak,
              and build your own constellation of progress.
            </p>

            {/* Quote */}
            <div className="mt-8 border-l border-white/20 pl-4">
              <p className="text-zinc-300 italic">
                “The wolf showed up again tonight.”
              </p>
            </div>

          </div>

          {/* Right Side */}
          <WolfMascot />

        </div>

        {/* Dashboard */}
        <div className="grid gap-6">

          {/* Top Grid */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Log Form */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
              <LogForm />
            </div>

            {/* Wolf Tasks */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
              <WolfTasks />
            </div>

          </div>

          {/* Stats */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
            <Stats />
          </div>

          {/* Chart */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
            <ChartComponent />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;