"use client";

import getCenterAndPrograms from "@/lib/getCenterAndPrograms";
import { useCnStore } from "@/store/store";

export default function RegionCenterName({ element }) {
  const { openCenterDetailPage, isSelectedCenterData, setIsSelectedCenterData } = useCnStore();

  async function clickCenterName() {
    openCenterDetailPage();
    const fetchCenterDetailData = await getCenterAndPrograms(element.id);
    setIsSelectedCenterData(fetchCenterDetailData);
  }

  return (
    <li
      onClick={() => {
        clickCenterName();
      }}
      className="cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg"
    >
      {element.title}
    </li>
  );
}
