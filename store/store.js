import { create } from "zustand";

export const useCnStore = create((set) => ({
  
  //센터 상세페이지 여닫기
  isCenterDetailOpen: false,
  setIsCenterDetailOpen: (value) => set((state) => ({ isCenterDetailOpen: !state.isCenterDetailOpen })),
  openCenterDetailPage: (value) => set((state) => ({ isCenterDetailOpen: true })),
  closeCenterDetailPage: (value) => set((state) => ({ isCenterDetailOpen: false })),

  // 선택한 센터 데이터 저장
  isSelectedCenterData: {},
  setIsSelectedCenterData: (value) => set((state) => ({ isSelectedCenterData: value })),


  // 프로그램창 여닫기 상태관리
  isProgramDetailPageOpen : false,
  openProgramDetailPage : (value) => set((state) => ({ isProgramDetailPageOpen : true })),
  closeProgramDetailPage : (value) => set((state) => ({ isProgramDetailPageOpen : false })),

  // 선택한 프로그램 데이터 저장
  isSelectedProgramData : {},
  setIsSelectedProgramData: (value) => set((state) => ({ isSelectedProgramData: value })),


  // 선택한 지역 
  isSelectedRegion: '',
  setIsSelectedRegion: (value) => set((state) => ({ isSelectedRegion: value })),
  setIsSelectedRegionInit: (value) => set((state) => ({ isSelectedRegion: '' })),

  // 활성화된 id
  activeId: null,
  setActiveId: (value) => set((state) => ({ activeId: value })),
  setActiveIdInit: (value) => set((state) => ({ activeId: null })),
}));
