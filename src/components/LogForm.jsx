import { useState } from "react";
import { useStore } from "../store/useStore";

export default function LogForm() {
  const addLog = useStore((state) => state.addLog);

  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLog = {
      date: new Date().toISOString(),
      hours: Number(hours),
      task,
    };

    addLog(newLog);

    setHours("");
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="number"
        placeholder="Hours worked"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className="bg-zinc-800 p-3 rounded-xl"
      />

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
    </form>
  );
}