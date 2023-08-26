"use client";

import { useCnStore } from "@/store/store";

export default function ProgramName({ element }) {
  const { isProgramDetailPageOpen, openProgramDetailPage, setIsSelectedProgramData, isSelectedProgramData } = useCnStore();

  function clickProgramName() {
    console.log("아...");
    openProgramDetailPage();
    setIsSelectedProgramData(element);
  }

  return (
    <li
      onClick={() => {
        clickProgramName();
      }}
      className="cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg"
    >
      {element.program_title}
    </li>
  );
}
