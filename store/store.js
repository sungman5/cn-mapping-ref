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

  isCenterSearchResult : [],
  setIsCenterSearchResult : (value) => set((state) => ({ isCenterSearchResult: value })),
  setIsCenterSearchResultInit : (value) => set((state) => ({ isCenterSearchResult: [] })),


  // 프로그램창 여닫기 상태관리
  isProgramDetailPageOpen : false,
  openProgramDetailPage : (value) => set((state) => ({ isProgramDetailPageOpen : true })),
  closeProgramDetailPage : (value) => set((state) => ({ isProgramDetailPageOpen : false })),

  // 선택한 프로그램 데이터 저장
  isSelectedProgramData : {},
  setIsSelectedProgramData: (value) => set((state) => ({ isSelectedProgramData: value })),


  // 선택한 지역 
  isSelectedRegion: null,
  setIsSelectedRegion: (value) => set((state) => ({ isSelectedRegion: value })),
  setIsSelectedRegionInit: (value) => set((state) => ({ isSelectedRegion: null })),

  // 활성화된 id
  activeId: null,
  setActiveId: (value) => set((state) => ({ activeId: value })),
  setActiveIdInit: (value) => set((state) => ({ activeId: null })),

  // 청소년 인구 수
  isPopulation: null,
  setIsPopulation: (value) => set((state) => ({ isPopulation: value })),

  // 선택한 프로그램 필터
  isSelectedProgramFilter : 'course_all',
  setIsSelectedProgramFilter: (value) => set((state) => ({ isSelectedProgramFilter: value })),
  setIsSelectedProgramFilterInit: (value) => set((state) => ({ isSelectedProgramFilter: 'course_all' })),

  // 필터데이터
  isFilterProgramDatas : [],
  setIsFilterProgramDatas : (value) => set((state) => ({ isFilterProgramDatas: value })),
  
  // 프로그램 페이지 필터데이터
  isFilterProgramDatasSecond : [],
  setIsFilterProgramDatasSecond : (value) => set((state) => ({ isFilterProgramDatasSecond: value })),
  setIsFilterProgramDatasSecondInit : (value) => set((state) => ({ isFilterProgramDatasSecond: [] })),

  // 검색창 value 값
  isSearchValue : '',
  setIsSearchValue : (value) => set((state) => ({ isSearchValue: value })),
  setIsSearchValueInit : (value) => set((state) => ({ isSearchValue: '' })),
}));
