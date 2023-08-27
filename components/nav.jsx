"use client";

import { useCnStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { closeCenterDetailPage, closeProgramDetailPage, setIsSelectedRegionInit, setActiveIdInit } = useCnStore();
  const getPathname = usePathname();
  const pathname = getPathname.split("/")[1];

  function closeDetailPages() {
    closeCenterDetailPage();
    closeProgramDetailPage();
    setActiveIdInit();
    setIsSelectedRegionInit();
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-white border-t border-r border-t-slate-200 xl:border-t-0 xl:p-6 2xl:px-4 2xl:py-7 border-r-slate-200 xl:relative">
      <ul className="flex justify-around h-full gap-8 xl:justify-start xl:flex-col">
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className={`${pathname === "all-center-list" ? "2xl:bg-hoverbg text-primary" : ""} flex 2xl:px-4 2xl:py-1 flex-col items-center rounded-md`} href={"/all-center-list"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-main.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">모든시설</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className={`flex flex-col items-center ${pathname === "type" ? "2xl:bg-hoverbg text-primary" : ""} 2xl:px-4 2xl:py-1 rounded-md`} href={"/type"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-type.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">유형별</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className={`flex flex-col items-center ${pathname === "region" ? "2xl:bg-hoverbg text-primary" : ""} 2xl:px-4 2xl:py-1 rounded-md`} href={"/region"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-region.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">지역별</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeDetailPages();
          }}
        >
          <Link className={`flex flex-col items-center ${pathname === "programs" ? "2xl:bg-hoverbg text-primary" : ""} 2xl:px-4 2xl:py-1 rounded-md`} href={"/programs"}>
            <Image className="w-8 h-8 xl:w-8 xl:h-8 2xl:w-12 2xl:h-12" src={"/cn-nav-programs.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm xl:text-sm 2xl:text-base">프로그램</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
