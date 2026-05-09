import ChartComponent from "../components/Chart";
import ConstellationMap from "../components/ConstellationMap";

export default function Analytics() {
  return (
    <div className="space-y-4 md:space-y-6">

      {/* Chart Section */}
      <div
        className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          p-4
          sm:p-6
          rounded-3xl
          overflow-hidden
        "
      >
        <ChartComponent />
      </div>

      {/* Constellation Section */}
      <div
        className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          p-4
          sm:p-6
          rounded-3xl
          overflow-hidden
        "
      >
        <ConstellationMap />
      </div>

    </div>
  );
}