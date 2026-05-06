import LogForm from "./components/LogForm";
import Stats from "./components/Stats";
import ChartComponent from "./components/Chart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hustle Tracker</h1>

      <LogForm />
      <Stats />
      <ChartComponent />
    </div>
  );
}

export default App;