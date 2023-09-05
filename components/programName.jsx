"use client";

import GetSpecificProgramData from "@/lib/getSpecificProgramData";
import { useCnStore } from "@/store/store";
import { useEffect } from "react";

export default function ProgramName({ programData }) {
  const { openProgramDetailPage, setIsSelectedRegion, activeId, setActiveId, setIsSelectedProgramData, isFilterProgramDatasSecond, isSelectedProgramData, isFilterProgramDatas } =
    useCnStore();

  useEffect(() => {
    if (activeId !== null) {
      async function fetchData() {
        const fetchCenterDetailData = await GetSpecificProgramData(activeId);
        openProgramDetailPage();
        setIsSelectedProgramData(fetchCenterDetailData);
        setIsSelectedRegion(fetchCenterDetailData.center_info.center_region); // 이 부분도 변경해야 할 수 있습니다.
      }
      fetchData();
    }
  }, [activeId]);

  useEffect(() => {
  }, [isSelectedProgramData]);

  function clickProgramName(e) {
    setActiveId(e.id);
  }

  return (
    <>
      {isFilterProgramDatasSecond.length === 0 || isFilterProgramDatasSecond === "course_all"
        ? programData &&
          programData.map((element) => {
            return (
              <li
                id={element.program_id}
                key={element.program_id}
                onClick={(e) => {
                  clickProgramName(e.currentTarget);
                }}
                className={`cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg ${activeId === element.program_id ? "bg-hoverbg text-primary" : ""}`}
              >
                {element.program_title}
              </li>
            );
          })
        : isFilterProgramDatasSecond &&
          isFilterProgramDatasSecond.map((element) => {
            return (
              <li
                id={element.program_id}
                key={element.program_id}
                onClick={(e) => {
                  clickProgramName(e.currentTarget);
                  // setActiveId(element.program_id);
                }}
                className={`cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg ${activeId === element.program_id ? "bg-hoverbg text-primary" : ""}`}
              >
                {element.program_title}
              </li>
            );
          })}
    </>
  );
}
