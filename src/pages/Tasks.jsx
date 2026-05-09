import WolfTasks from "../components/WolfTasks";
import LogForm from "../components/LogForm";

export default function Tasks() {
  return (
    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-4
        md:gap-6
      "
    >

      {/* Log Form */}
      <div
        className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          p-4
          sm:p-6
          rounded-3xl
        "
      >
        <LogForm />
      </div>

      {/* Wolf Tasks */}
      <div
        className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          p-4
          sm:p-6
          rounded-3xl
        "
      >
        <WolfTasks />
      </div>

    </div>
  );
}