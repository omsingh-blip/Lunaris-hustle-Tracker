import { create } from "zustand";

export const useStore = create((set) => ({
  
  logs: JSON.parse(localStorage.getItem("logs")) || [],
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],

  addLog: (log) =>
    set((state) => {
      const updated = [...state.logs, log];
      localStorage.setItem("logs", JSON.stringify(updated));
      return { logs: updated };
    }),

  clearLogs: () => {
    localStorage.removeItem("logs");
    set({ logs: [] });
  },

 addTask: (task) =>
  set((state) => {
    const updatedTasks = [
      ...state.tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ];

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    return {
      tasks: updatedTasks,
    };
  }),

toggleTask: (id) =>
  set((state) => {
    const updatedTasks = state.tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    localStorage.setItem(
      "tasks",
      JSON.stringify(updatedTasks)
    );

    return {
      tasks: updatedTasks,
    };
  }),

deleteTask: (id) =>
  set((state) => {
    const updatedTasks = state.tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    return {
      tasks: updatedTasks,
    };
  }),


clearTasks: () => {
  localStorage.removeItem("tasks");

  set({
    tasks: [],
  });
},

}));