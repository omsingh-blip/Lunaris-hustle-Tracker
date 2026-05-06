import { create } from "zustand";

export const useStore = create((set) => ({
  
  logs: JSON.parse(localStorage.getItem("logs")) || [],

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
}));