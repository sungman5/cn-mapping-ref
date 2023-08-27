"use client";

import { useCnStore } from "@/store/store";

export default function ProgramName({ element }) {
  const { openProgramDetailPage, setIsSelectedRegion, activeId, setActiveId, setIsSelectedProgramData } = useCnStore();
  function clickProgramName() {
    openProgramDetailPage();
    setIsSelectedProgramData(element);
    setIsSelectedRegion(element.center_info.center_region);
    setActiveId(element.program_id);
  }
  
  return (
    <li
      onClick={() => {
        clickProgramName();
      }}
      className={`cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg ${activeId === element.program_id ? "bg-hoverbg text-primary" : ""}`}
    >
      {element.program_title}
    </li>
  );
}
