import { create } from 'zustand';
import type { Attraction, AttractionType } from '@/data/lahore-attractions';

interface MapState {
  activeFilters: AttractionType[];
  selectedAttraction: Attraction | null;
  searchQuery: string;
  toggleFilter: (type: AttractionType) => void;
  setSelectedAttraction: (attraction: Attraction | null) => void;
  setSearchQuery: (query: string) => void;
  showNearby: AttractionType | null;
  setShowNearby: (type: AttractionType | null) => void;
}

export const useMapStore = create<MapState>((set) => ({
  activeFilters: ['heritage', 'food', 'hotel'],
  selectedAttraction: null,
  searchQuery: '',
  showNearby: null,

  toggleFilter: (type) =>
    set((state) => ({
      activeFilters: state.activeFilters.includes(type)
        ? state.activeFilters.filter((f) => f !== type)
        : [...state.activeFilters, type],
    })),

  setSelectedAttraction: (attraction) => set({ selectedAttraction: attraction, showNearby: null }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setShowNearby: (type) => set({ showNearby: type }),
}));


