import { create } from "zustand";

interface SolarState {
  showPaths: boolean;
  toggleShowPaths: (status: boolean) => void;
  animatePlanets: boolean;
  togglePlanetAnimation: (status: boolean) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
}

const useStore = create<SolarState>((set) => ({
  showPaths: true,
  toggleShowPaths: (status: boolean) => set({ showPaths: status }),
  animatePlanets: false,
  togglePlanetAnimation: (status: boolean) => set({ animatePlanets: status }),
  currentView: "start",
  setCurrentView: (view: string) => set({ currentView: view }),
}));

export default useStore;
