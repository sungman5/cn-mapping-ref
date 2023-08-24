'use client';

import { useCnStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const { closeCenterDetailPage } = useCnStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 px-4 py-3 bg-white border-r md:p-8 border-r-slate-200 md:relative">
      <ul className="flex justify-around h-full gap-8 md:justify-start md:flex-col">
        <li
          onClick={() => {
            closeCenterDetailPage();
          }}
        >
          <Link className="flex flex-col items-center" href={"/all-center-list"}>
            <Image className="w-8 h-8 md:w-12 md:h-12" src={"/cn-nav-main.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm md:text-base">모든시설</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeCenterDetailPage();
          }}
        >
          <Link className="flex flex-col items-center" href={"/type"}>
            <Image className="w-8 h-8 md:w-12 md:h-12" src={"/cn-nav-type.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm md:text-base">유형별</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeCenterDetailPage();
          }}
        >
          <Link className="flex flex-col items-center" href={"/region"}>
            <Image className="w-8 h-8 md:w-12 md:h-12" src={"/cn-nav-region.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm md:text-base">지역별</p>
          </Link>
        </li>
        <li
          onClick={() => {
            closeCenterDetailPage();
          }}
        >
          <Link className="flex flex-col items-center" href={"/programs"}>
            <Image className="w-8 h-8 md:w-12 md:h-12" src={"/cn-nav-programs.svg"} height={48} width={48} alt="전체보기 아이콘" />
            <p className="text-sm md:text-base">프로그램</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
