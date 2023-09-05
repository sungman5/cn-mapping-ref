"use client";

import getCenterAndPrograms from "@/lib/getCenterAndPrograms";
import { useCnStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CenterName({ centerList, region }) {
  const {
    openCenterDetailPage,
    activeId,
    setIsSelectedCenterData,
    setActiveId,
    isCenterSearchResult,
    setIsCenterSearchResult,
    setIsSelectedProgramFilterInit,
    setIsSelectedRegion,
  } = useCnStore();

  // async function clickCenterName(e) {
  //   const fetchCenterDetailData = await getCenterAndPrograms(e.id);
  //   setActiveId(e.id);
  //   setIsSelectedCenterData(fetchCenterDetailData);
  //   setIsSelectedRegion(centerList.region_slug || region);
  //   openCenterDetailPage();
  //   setIsSelectedProgramFilterInit();
  // }

  useEffect(() => {
    if (activeId !== null) {
      async function fetchData() {
        const fetchCenterDetailData = await getCenterAndPrograms(activeId); // 'e.id' 대신 'activeId'를 사용
        openCenterDetailPage();
        setIsSelectedCenterData(fetchCenterDetailData);
        setIsSelectedRegion(fetchCenterDetailData.region_slug || region);
        console.log(fetchCenterDetailData)
      }
      fetchData();
    }
  }, [activeId]);

  function clickCenterName(e) {
    const currentId = parseInt(e.id, 10); // id를 숫자로 변환
    setActiveId(currentId);
  }
  // console.log("새로운배열!", isCenterSearchResult);
  return (
    <>
      {isCenterSearchResult.map((element) => {
        return (
          <li
            key={element.id}
            id={element.id}
            className={`${activeId === element.id ? "bg-hoverbg text-primary" : ""} cursor-pointer text-base hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg`}
            onClick={(e) => {
              clickCenterName(e.currentTarget);
            }}
          >
            {element.title || element.name}
          </li>
        );
      })}
    </>
  );
}
