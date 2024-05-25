import {create} from "zustand";
import { MODALS } from "./Config";

interface SolarState {
  showPaths: boolean;
  toggleShowPaths: (status: boolean) => void;
  animatePlanets: boolean;
  togglePlanetAnimation: (status: boolean) => void;
  currentView: string;
  setCurrentView: (view: string) => void;
  visibleModal: number;
  setVisibleModal: (modal: number) => void;
}

const useStore = create<SolarState>((set) => ({
  showPaths: true,
  toggleShowPaths: (status: boolean) => set({ showPaths: status }),
  animatePlanets: false,
  togglePlanetAnimation: (status: boolean) => set({ animatePlanets: status }),
  currentView: "start",
  setCurrentView: (view: string) => set({ currentView: view }),
  visibleModal: MODALS.NONE,
  setVisibleModal: (modal: number) => set({ visibleModal: modal }),
}));

export default useStore;
