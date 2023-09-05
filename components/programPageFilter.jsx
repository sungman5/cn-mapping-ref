"use client";

import { useCnStore } from "@/store/store";
import { useEffect } from "react";

export default function ProgramPageFilter({ programCourseList, programData }) {
  const { isSelectedProgramFilter, setActiveIdInit, setIsSelectedProgramFilter, closeProgramDetailPage, setIsSearchValueInit, setIsFilterProgramDatasSecond, setIsSelectedRegionInit, isFilterProgramDatasSecond } = useCnStore();
  let filterProgramDatas = [];

  // console.log('프로그램페이지의 programData:', programData)

  function clickFilter(e) {
    setIsSearchValueInit();
    setIsSelectedProgramFilter(e.id);
    setIsSelectedRegionInit();
    closeProgramDetailPage();
    setActiveIdInit();
  }

  if (programData) {
    filterProgramDatas = programData.filter((element) => {
      return element.program_metadata.program_course === isSelectedProgramFilter;
    });
  }

  useEffect(() => {
    setIsFilterProgramDatasSecond(filterProgramDatas);
  }, [isSelectedProgramFilter]);

  const courseName = {
    course_lang: "국어",
    course_math: "수학",
    course_eng: "영어",
    course_ethical: "사회과/도덕",
    course_science: "과학과",
    course_art: "예체능",
    course_skill: "기술가정/정보",
    course_second_lang: "제2외국어",
    course_expert: "전문교과",
    course_freeactive: "자율활동",
    course_party: "동아리활동",
    course_service: "봉사활동",
    course_step: "진로활동",
    course_free: "자유학기제/자유학년제",
    course_point: "고교학점제",
    course_etc: "기타",
  };

  return (
    <ul className="flex flex-wrap gap-1 text-sm">
      <li
        id={`course_all`}
        onClick={(e) => {
          clickFilter(e.currentTarget);
        }}
        className={`${isSelectedProgramFilter === 'course_all' ? 'text-white bg-primary':''} px-2 py-1 border rounded cursor-pointer hover:border hover:border-primary hover:text-white hover:bg-primary `}
      >
        모두
      </li>
      {programCourseList.map((element) => {
        return (
          <li
            id={element}
            onClick={(e) => {
              clickFilter(e.currentTarget);
            }}
            key={element}
            className={`${isSelectedProgramFilter === element ? 'text-white bg-primary':''} px-2 py-1 border rounded cursor-pointer hover:border hover:border-primary hover:text-white hover:bg-primary `}
          >
            {courseName[element]}
          </li>
        );
      })}
    </ul>
  );
}
