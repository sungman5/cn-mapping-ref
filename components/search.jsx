"use client";

import { useCnStore } from "@/store/store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Search({ programData, centerList }) {
  const { isFilterProgramDatasSecond, setIsFilterProgramDatasSecond, setIsCenterSearchResult, setIsSelectedProgramFilterInit, isSearchValue, setIsSearchValue } = useCnStore();
  const pathname = usePathname();
  console.log(pathname)
  function changeSearchValue(e) {
    const newValue = e.value;
    setIsSearchValue(newValue);
    setIsSelectedProgramFilterInit();
  }

  useEffect(() => {
    let searchResult = [];
    if (programData) {
      searchResult = programData.filter((element) => {
        return element.program_title.includes(isSearchValue);
      });
    }
    if (centerList) {
      searchResult = centerList.filter((element) => {
        return element.name.includes(isSearchValue);
      });
    }
    setIsFilterProgramDatasSecond(searchResult);
    setIsCenterSearchResult([...searchResult].reverse());

  }, [isSearchValue]);

  return (
    <div className="flex items-center gap-2 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
      <input
        type="text"
        placeholder={`${pathname === '/all-center-list' ? '시설을 검색해보세요' : '프로그램을 검색해보세요'}`}
        className="w-full h-8 text-sm border-b focus:outline-none"
        value={isSearchValue}
        onChange={(e) => {
          changeSearchValue(e.currentTarget);
        }}
      />
    </div>
  );
}
