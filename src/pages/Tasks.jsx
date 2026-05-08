import WolfTasks from "../components/WolfTasks";
import LogForm from "../components/LogForm";

export default function Tasks() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
        <LogForm />
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-3xl">
        <WolfTasks />
      </div>

    </div>
  );
}