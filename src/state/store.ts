import { create } from "zustand";

interface SolarState {
  showPaths: boolean;
  toggleShowPaths: (status: boolean) => void;
  animatePlanets: boolean;
  togglePlanetAnimation: (status: boolean) => void;
}

const useStore = create<SolarState>((set) => ({
  showPaths: true,
  toggleShowPaths: (status: boolean) => set({ showPaths: status }),
  animatePlanets: false,
  togglePlanetAnimation: (status: boolean) => set({ animatePlanets: status }),
}));

export default useStore;
