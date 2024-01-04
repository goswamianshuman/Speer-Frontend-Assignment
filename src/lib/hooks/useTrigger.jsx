import { create } from "zustand";

export const useTrigger = create((set, get) => ({
  active: false,
  activate: () => set({ active: !get().active }),
}));
