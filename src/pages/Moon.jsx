import Stats from "../components/Stats";
import WeeklyCard from "../components/WeeklyCard";

export default function Moon() {
  return (
    <div className="space-y-6">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
        <Stats />
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
        <WeeklyCard />
      </div>

    </div>
  );
}