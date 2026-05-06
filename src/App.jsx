import LogForm from "./components/LogForm";
import Stats from "./components/Stats";
import ChartComponent from "./components/Chart";

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
        
        {/* Hero Section */}
        <div className="mb-16">
          <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase mb-4">
            Build In Public
          </p>

          <h1 className="text-6xl libre-font leading-tight">
            The Night
            <br />
            Remembers
            <br />
            Consistency.
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl text-lg">
            Track your daily hustle, protect your streak,
            and build your own constellation of progress.
          </p>
        </div>

        {/* Dashboard */}
        <div className="grid gap-6">
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
            <LogForm />
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
            <Stats />
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
            <ChartComponent />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;