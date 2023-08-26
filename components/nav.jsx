'use client';

import { useCnStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const { closeCenterDetailPage, closeProgramDetailPage } = useCnStore();

  function closeDetailPages(){
    closeCenterDetailPage();
    closeProgramDetailPage();
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-white border-t border-r border-t-slate-200 xl:border-t-0 xl:p-6 2xl:p-8 border-r-slate-200 xl:relative">
      <ul className="flex justify-around h-full gap-8 xl:justify-start xl:flex-col">
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className="flex flex-col items-center" href={"/all-center-list"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-main.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">모든시설</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className="flex flex-col items-center" href={"/type"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-type.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">유형별</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className="flex flex-col items-center" href={"/region"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-region.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">지역별</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className="flex flex-col items-center" href={"/programs"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-programs.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">프로그램</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
