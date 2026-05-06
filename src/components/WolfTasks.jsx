import { useState } from "react";
import { useStore } from "../store/useStore";
import WolfIcon from "./WolfIcon";

export default function WolfTasks() {
  const [taskInput, setTaskInput] = useState("");

  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const toggleTask = useStore((state) => state.toggleTask);
  const clearTasks = useStore((state) => state.clearTasks);

  const handleAdd = () => {
    if (!taskInput.trim()) return;

    addTask(taskInput);

    setTaskInput("");
  };

  return (
    <div>

      <h2 className="text-3xl libre-font mb-6">
        Wolf Tasks
      </h2>

      {/* Input */}
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="What must be done tonight?"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="flex-1 bg-zinc-900 border border-white/10 p-4 rounded-2xl"
        />

        <button
          onClick={handleAdd}
          className="bg-white text-black px-6 rounded-2xl font-semibold"
        >
          Add
        </button>

        <div className="flex justify-end mb-6">

  <button
    onClick={clearTasks}
    className="text-sm text-zinc-400 px-6 rounded-2xl border border-white/10 hover:text-white transition"
  >
    Clear Tasks
  </button>

</div>

      </div>

      {/* Tasks */}
      <div className="space-y-4">

        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl cursor-pointer hover:bg-white/10 transition"
          >

            {/* Wolf Icon */}
           
              <WolfIcon />
           

            {/* Text */}
            <p
              className={`transition ${
                task.completed
                  ? "line-through text-zinc-500"
                  : "text-white"
              }`}
            >
              {task.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}