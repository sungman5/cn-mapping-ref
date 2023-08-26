"use client";

import getCenterAndPrograms from "@/lib/getCenterAndPrograms";
import { useCnStore } from "@/store/store";

export default function CenterName({ element }) {
  const { openCenterDetailPage, isSelectedCenterData, setIsSelectedCenterData } = useCnStore();
  console.log("뭔지보자", element);
  async function clickCenterName() {
    openCenterDetailPage();
    const fetchCenterDetailData = await getCenterAndPrograms(element.id);
    setIsSelectedCenterData(fetchCenterDetailData);
  }

  return (
    <li
      className="cursor-pointer text-base hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg"
      onClick={() => {
        clickCenterName();
        console.log("클릭!");
      }}
    >
      {element.title || element.name}
    </li>
  );
}
