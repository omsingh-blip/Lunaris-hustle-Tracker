import ChartComponent from "../components/Chart";
import ConstellationMap from "../components/ConstellationMap";

export default function Analytics() {
  return (
    <div className="space-y-6">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
        <ChartComponent />
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
        <ConstellationMap />
      </div>

    </div>
  );
}