import { create } from "zustand";

export const useCnStore = create((set) => ({
  //센터 상세페이지 여닫기
  isCenterDetailOpen: false,
  setIsCenterDetailOpen: (value) => set((state) => ({ isCenterDetailOpen: !state.isCenterDetailOpen })),
  openCenterDetailPage: (value) => set((state) => ({ isCenterDetailOpen: true })),
  closeCenterDetailPage: (value) => set((state) => ({ isCenterDetailOpen: false })),

  isSelectedCenterData: {},
  setIsSelectedCenterData: (value) => set((state) => ({ isSelectedCenterData: value })),
}));
