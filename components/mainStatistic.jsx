"use client";

import { useCnStore } from "@/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainStatistic() {
  const { isSelectedRegion, setIsPopulation, isPopulation } = useCnStore();

  const population = [
    { slug: null, name: "충청남도 청소년 인구", population: "330,552" },
    { slug: "chunan", name: "천안 청소년 인구", population: "116,843" },
    { slug: "gongju", name: "공주 청소년 인구", population: "14,726" },
    { slug: "boryeong", name: "보령 청소년 인구", population: "12,391" },
    { slug: "asan", name: "아산 청소년 인구", population: "58,682" },
    { slug: "seosan", name: "서산 청소년 인구", population: "26,922" },
    { slug: "nonsan", name: "논산 청소년 인구", population: "14,728" },
    { slug: "gyerong", name: "계룡 청소년 인구", population: "9,385" },
    { slug: "dangjin", name: "당진 청소년 인구", population: "24,823" },
    { slug: "geumsan", name: "금산 청소년 인구", population: "6,241" },
    { slug: "buyeo", name: "부여 청소년 인구", population: "6,887" },
    { slug: "seocheon", name: "서천 청소년 인구", population: "5,092" },
    { slug: "cheongyang", name: "청양 청소년 인구", population: "3,518" },
    { slug: "hongseong", name: "홍성 청소년 인구", population: "14,607" },
    { slug: "yesan", name: "예산 청소년 인구", population: "9,057" },
    { slug: "taean", name: "태안 청소년 인구", population: "6,650" },
  ];

  useEffect(() => {
    const selectedPopulation = population.find((element) => element.slug === isSelectedRegion);
    if (selectedPopulation) {
      setIsPopulation(selectedPopulation);
    } else {
      // 예외 처리
      setIsPopulation(null);
    }
  }, [isSelectedRegion]);

  const getPathname = usePathname();
  const pathname = getPathname.split("/")[2];

  return (
    <div className={`xl:flex xl:flex-col 3xl:flex-row hidden absolute gap-2 bottom-8 right-8`}>
      <div className="flex items-center gap-4 px-6 py-2 bg-white border-2 rounded-full shadow-sm border-primary ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 3xl:w-6 3xl:h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h1 className="text-sm font-bold text-primary 3xl:text-lg font-Pretendard">{isPopulation ? isPopulation.name : "데이터 없음"}</h1>
        <p className="flex items-center gap-1 text-sm 3xl:text-lg">
          {isPopulation ? isPopulation.population : "데이터 없음"}명 <span className="text-sm text-applegray">&#40;2023년 6월 기준&#41;</span>
        </p>
      </div>
      {getPathname === "/" ? (
        <Link href={"/all-center-list"} className="flex gap-4 px-6 py-2 bg-white border-2 rounded-full shadow-sm border-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 3xl:w-6 3xl:h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <h1 className="text-sm font-bold 3xl:text-lg font-Pretendard text-primary">청소년 시설 수</h1>
          <p className="text-sm 3xl:text-lg">49개소</p>
        </Link>
      ) : null}
    </div>
  );
}
