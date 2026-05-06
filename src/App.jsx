import LogForm from "./components/LogForm";
import Stats from "./components/Stats";
import ChartComponent from "./components/Chart";

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">
          Hustle Tracker 🚀
        </h1>

        <div className="grid gap-6">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <LogForm />
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <Stats />
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <ChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;