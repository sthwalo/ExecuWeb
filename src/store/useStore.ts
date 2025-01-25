import { create } from 'zustand';
import { Vehicle } from '../types';

interface StoreState {
  selectedVehicle: Vehicle | null;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedVehicle: null,
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
}));