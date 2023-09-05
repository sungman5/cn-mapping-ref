'use client';

import { useCnStore } from "@/store/store";

export default function AllProgramLength({programData}) {
    const {isFilterProgramDatasSecond, isSelectedProgramFilter} = useCnStore();
    return (
        <p className="text-xs">총 {isSelectedProgramFilter === 'course_all' ? programData.length : isFilterProgramDatasSecond.length}개의 프로그램</p>
    )
}