"use client";

import { useCnStore } from "@/store/store";
import Link from "next/link";

export default function ProgramDetailPage() {
  const { isProgramDetailPageOpen, closeProgramDetailPage, isSelectedProgramData } = useCnStore();
  
  const meta = isSelectedProgramData.program_metadata;
  const center = isSelectedProgramData.center_info;
  // console.log("프로그램데이터", isSelectedProgramData);
  return (
    <div className={`${isProgramDetailPageOpen === false ? "hidden" : "flex xl:flex-row"} h-full flex-col w-96 bg-componentBg`}>
      <section className="flex flex-col flex-1 h-full border-r border-r-slate-200">
        <div
          onClick={() => {
            closeProgramDetailPage();
          }}
          className="flex items-center justify-start h-12 gap-2 px-4 bg-white border-b cursor-pointer hover:text-primary xl:h-16 border-b-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-lg font-bold tracking-tight">{isSelectedProgramData.program_title}</h2>
        </div>

        {/* 프로그램 정보 */}
        <div className="flex flex-col flex-1 gap-6 p-8 bg-white">
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="w-8 font-bold tracking-normal text-primary">소개</p>
            </div>
            <p>{(isProgramDetailPageOpen && isSelectedProgramData.program_content) || "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">주관</p>
            </div>
            <p>{(isProgramDetailPageOpen && center.center_title) || "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">대상</p>
            </div>
            <p>{(isProgramDetailPageOpen && meta.program_target) || "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">수용인원</p>
            </div>
            <p>{(isProgramDetailPageOpen && meta.program_capacity) || "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">운영시기</p>
            </div>
            <p>{(isProgramDetailPageOpen && meta.program_period) || "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">운영회기</p>
            </div>
            <p>{(isProgramDetailPageOpen && meta.program_session) || "-"}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">참가비용</p>
            </div>
            <p>{(isProgramDetailPageOpen && meta.program_price) || "-"}</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="font-bold tracking-normal text-primary">문의</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>{(isProgramDetailPageOpen && center.center_tel) || "-"}</p>
              <p>{(isProgramDetailPageOpen && center.center_email) || "-"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4238E2" className="w-4 h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>

              <p className="font-bold tracking-normal text-primary">웹사이트</p>
            </div>
            <p>
              {(isProgramDetailPageOpen && (
                <Link href={center.center_website} target="_blank" className="px-2 py-0.5 border rounded border-primary text-primary hover:text-white hover:bg-primary">
                  바로가기&rarr;
                </Link>
              )) ||
                "-"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
