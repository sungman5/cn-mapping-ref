"use client";

import getCenterAndPrograms from "@/lib/getCenterAndPrograms";
import { useCnStore } from "@/store/store";
import { useEffect } from "react";

export default function CenterNameInAll({ element }) {
  const { openCenterDetailPage, isSelectedCenterData, setIsSelectedCenterData } = useCnStore();

  useEffect(() => {
    console.log("선택된 데이터?", isSelectedCenterData);
  }, [isSelectedCenterData]);

  async function clickCenterName() {
    openCenterDetailPage();
    const fetchCenterDetailData = await getCenterAndPrograms(element.id);
    setIsSelectedCenterData(fetchCenterDetailData);
  }

  return (
    <li
      className="cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg"
      onClick={() => {
        clickCenterName();
        console.log("클릭!");
        // openCenterDetailPage();
      }}
    >
      {element.name}
    </li>
  );
}
