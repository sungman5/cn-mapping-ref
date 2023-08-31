"use client";

import getCenterAndPrograms from "@/lib/getCenterAndPrograms";
import { useCnStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CenterName({ element, region }) {
  const { openCenterDetailPage, activeId, setIsSelectedCenterData, setActiveId, setIsSelectedProgramFilterInit, setIsSelectedRegion } = useCnStore();
  async function clickCenterName(e) {
    const fetchCenterDetailData = await getCenterAndPrograms(element.id);
    setActiveId(element.id);
    setIsSelectedCenterData(fetchCenterDetailData);
    setIsSelectedRegion(element.region_slug || region);
    openCenterDetailPage();
    setIsSelectedProgramFilterInit();
  }

  return (
    <li
      id={element.id}
      className={`${activeId === element.id ? "bg-hoverbg text-primary" : ""} cursor-pointer text-base hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg`}
      onClick={(e) => {
        clickCenterName(e.currentTarget);
      }}
    >
      {element.title || element.name}
    </li>
  );
}
