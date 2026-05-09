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

      {/* Heading */}
      <h2
        className="
          text-2xl
          sm:text-3xl
          libre-font
          mb-6
        "
      >
        Wolf Tasks
      </h2>

      {/* Input Section */}
      <div className="space-y-4 mb-6">

        {/* Input + Add */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >

          <input
            type="text"
            placeholder="What must be done tonight?"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="
              flex-1
              bg-zinc-900
              border
              border-white/10
              p-4
              rounded-2xl
              outline-none
              focus:border-white/20
              transition
              text-sm
              sm:text-base
            "
          />

          <button
            onClick={handleAdd}
            className="
              bg-white
              text-black
              px-6
              py-3
              rounded-2xl
              font-semibold
              hover:scale-[1.01]
              active:scale-[0.99]
              transition
              whitespace-nowrap
            "
          >
            Add
          </button>
        </div>

        {/* Clear Button */}
        <div className="flex justify-center sm:justify-end">

          <button
            onClick={clearTasks}
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
            className="
              flex
              items-start
              gap-4
              bg-white/5
              border
              border-white/10
              p-4
              rounded-2xl
              cursor-pointer
              hover:bg-white/10
              transition
            "
          >

            {/* Wolf Icon */}
            <div className="shrink-0 mt-1">
              <WolfIcon />
            </div>

            {/* Text */}
            <p
              className={`
                break-words
                transition
                text-sm
                sm:text-base
                ${
                  task.completed
                    ? "line-through text-zinc-500"
                    : "text-white"
                }
              `}
            >
              {task.text}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}