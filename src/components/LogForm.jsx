import { useState } from "react";
import { useStore } from "../store/useStore";

export default function LogForm() {
  const addLog = useStore((state) => state.addLog);

  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");
  const clearLogs = useStore((state) => state.clearLogs);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLog = {
      date,
      hours: Number(hours),
      task,
    };

    addLog(newLog);

    setHours("");
    setTask("");
  };

  return (
<>
    <h2 className="text-3xl libre-font mb-6">
  Hustle Log
</h2>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >

      {/* Date */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="bg-zinc-800 p-3 rounded-xl"
      />

      {/* Hours */}
      <input
        type="number"
        placeholder="Hours worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className="bg-zinc-800 p-3 rounded-xl"
      />

      {/* Task */}
      <input
        type="text"
        placeholder="What did you work on?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="bg-zinc-800 p-3 rounded-xl"
      />

      <button
        type="submit"
        className="bg-white text-black p-3 rounded-xl font-semibold"
      >
        Add Log
      </button>

      <div className="flex justify-end mt-4">

  <button
    type="button"
    onClick={clearLogs}
    className="text-sm text-zinc-400 px-6 rounded-2xl border border-white/10 hover:text-white transition"
  >
    Clear Logs
  </button>

</div>

    </form>

    </>
  );
}