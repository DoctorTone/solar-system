import { create } from "zustand";

interface SolarState {
  showPaths: boolean;
  toggleShowPaths: (status: boolean) => void;
}

const useStore = create<SolarState>((set) => ({
  showPaths: false,
  toggleShowPaths: (status: boolean) => set({ showPaths: status }),
}));

export default useStore;
