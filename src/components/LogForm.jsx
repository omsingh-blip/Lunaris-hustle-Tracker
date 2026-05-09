import { useState } from "react";
import { useStore } from "../store/useStore";

export default function LogForm() {
  const addLog = useStore((state) => state.addLog);
  const clearLogs = useStore((state) => state.clearLogs);

  const today = new Date().toLocaleDateString("en-CA");

  const [date, setDate] = useState(today);
  const [hours, setHours] = useState("");
  const [task, setTask] = useState("");

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
      {/* Heading */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          libre-font
          mb-6
        "
      >
        Hustle Log
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        {/* Date */}
        <input
          type="date"
          value={date}
          max={new Date().toLocaleDateString("en-CA")}
          min={
            new Date(
              Date.now() - 86400000
            ).toLocaleDateString("en-CA")
          }
          onChange={(e) => setDate(e.target.value)}
          className="
            bg-zinc-800
            border
            border-white/5
            p-3
            rounded-xl
            text-sm
            sm:text-base
            outline-none
            focus:border-white/20
            transition
            w-full
          "
        />

        {/* Hours */}
        <input
          type="number"
          placeholder="Hours worked"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="
            bg-zinc-800
            border
            border-white/5
            p-3
            rounded-xl
            text-sm
            sm:text-base
            outline-none
            focus:border-white/20
            transition
            w-full
          "
        />

        {/* Task */}
        <input
          type="text"
          placeholder="What did you work on?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="
            bg-zinc-800
            border
            border-white/5
            p-3
            rounded-xl
            text-sm
            sm:text-base
            outline-none
            focus:border-white/20
            transition
            w-full
          "
        />

        {/* Add Button */}
        <button
          type="submit"
          className="
            bg-white
            text-black
            p-3
            rounded-xl
            font-semibold
            hover:scale-[1.01]
            active:scale-[0.99]
            transition
            text-sm
            sm:text-base
          "
        >
          Add Log
        </button>

        {/* Clear Button */}
        <div className="flex justify-center sm:justify-end mt-2">

          <button
            type="button"
            onClick={clearLogs}
            className="
              text-sm
              text-zinc-400
              px-5
              py-2
              rounded-2xl
              border
              border-white/10
              hover:text-white
              hover:bg-white/5
              transition
            "
          >
            Clear Logs
          </button>

        </div>

      </form>
      
    </>
  );
}