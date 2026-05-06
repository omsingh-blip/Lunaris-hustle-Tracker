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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <input
        type="text"
        placeholder="What did you do?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}