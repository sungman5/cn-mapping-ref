"use client";

import Link from "next/link";
import CenterDetailProgramCard from "./centerDetailProgramCard";
import { useCnStore } from "@/store/store";

export default function CenterDetailPage() {
  const { isCenterDetailOpen, closeCenterDetailPage, isSelectedCenterData } = useCnStore();

  return (
    <div className={`${isCenterDetailOpen === false ? "hidden" : "flex xl:flex-row"} flex-col w-full text-sm 3xl:text-base xl:w-[640px] 4xl:w-[768px] bg-componentBg`}>
      <section className="flex flex-col border-r xl:flex-1 h-fit xl:h-full border-r-slate-200">
        <div
          onClick={() => {
            closeCenterDetailPage();
          }}
          className="flex items-center justify-start h-12 gap-2 px-4 bg-white border-b cursor-pointer hover:text-primary xl:h-16 border-b-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-base font-bold tracking-normal xl:text-xl font-NotoSansKR">{isSelectedCenterData.title}</h2>
        </div>

        <div className="flex flex-col flex-1 gap-6 p-8 bg-white">
          <div>
            <p className="mb-1 font-bold tracking-normal font-NotoSansKR">소개</p>
            <p>{isSelectedCenterData.content || "-"}</p>
          </div>
          <div>
            <p className="mb-1 font-bold tracking-normal font-NotoSansKR">주소</p>
            <p>{isSelectedCenterData.center_address || "-"}</p>
          </div>
          <div>
            <p className="mb-1 font-bold tracking-normal font-NotoSansKR">대표번호</p>
            <p>{isSelectedCenterData.center_tel || "-"}</p>
          </div>
          <div>
            <p className="mb-1 font-bold tracking-normal font-NotoSansKR">대표메일</p>
            <p>{isSelectedCenterData.email || "-"}</p>
          </div>
          <div className="flex flex-col gap-4 3xl:flex-row">
            <Link
              href={isSelectedCenterData.center_website || "#"}
              target="_blank"
              className={`${
                isSelectedCenterData.center_website
                  ? "border-defaultBlack text-defaultBlack cursor-pointer hover:text-primary hover:border-primary"
                  : "border-slate-200 text-slate-400 cursor-not-allowed"
              } flex items-center justify-center flex-1 gap-1 py-1.5 text-sm border rounded-full `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <p className="tracking-normal">웹사이트</p>
            </Link>
            <Link
              href={isSelectedCenterData.center_sns || "#"}
              target="_blank"
              className={`${
                isSelectedCenterData.center_sns
                  ? "border-defaultBlack text-defaultBlack cursor-pointer hover:text-primary hover:border-primary"
                  : "border-slate-200 text-slate-400 cursor-not-allowed"
              } flex  items-center justify-center flex-1 gap-1 py-1.5 text-sm border rounded-full `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <p>SNS</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex-1 overflow-y-auto border-t border-r shadow-md border-t-slate-200 xl:border-t-0 xl:border-b-0 border-r-slate-200">
        <div className="sticky top-0 flex items-center justify-between h-12 gap-2 px-4 bg-white border-b xl:h-16 border-b-slate-200">
          <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 xl:w-5 xl:h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <h2 className="font-bold">프로그램</h2>
          </div>
          <p className="text-xs">총 {isSelectedCenterData.referencing_programs_count}개의 프로그램</p>
        </div>

        <div className="flex flex-col gap-2 p-2.5">
          {isSelectedCenterData.referencing_programs_count === 0 ? '프로그램이 없습니다' : <CenterDetailProgramCard />}
        </div>
      </section>
    </div>
  );
}
