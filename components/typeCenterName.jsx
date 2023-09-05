"use client";

import getCenterAndPrograms from "@/lib/getCenterAndPrograms";
import { useCnStore } from "@/store/store";
import { useEffect } from "react";

export default function TypeCenterName({ typeCenterList, region }) {
  const { openCenterDetailPage, isSelectedCenterData, setActiveId, setIsSelectedRegion, activeId, setIsSelectedCenterData } = useCnStore();
  useEffect(() => {
    if (activeId !== null) {
      async function fetchData() {
        const fetchCenterDetailData = await getCenterAndPrograms(activeId); // 'e.id' 대신 'activeId'를 사용
        openCenterDetailPage();
        setIsSelectedCenterData(fetchCenterDetailData);
        setIsSelectedRegion(fetchCenterDetailData.region_slug || region);
      }
      fetchData();
    }
  }, [activeId]);

  function clickCenterName(e) {
    const currentId = parseInt(e.id, 10); // id를 숫자로 변환
    setActiveId(currentId);
  }

  return (
    <ul>
      {typeCenterList.map((element) => {
        return (
          <li
            key={element.id}
            id={element.id}
            onClick={(e) => {
              clickCenterName(e.currentTarget);
            }}
            className={`${activeId === element.id ? "bg-hoverbg text-primary" : ""} cursor-pointer text-base hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg`}
          >
            {element.title}
            {/* 안녕하ㅏ세요 */}
          </li>
        );
      })}
    </ul>
  );
}
