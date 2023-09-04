"use client";

import { useCnStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { closeCenterDetailPage, setIsSelectedRegionInit } = useCnStore();

  function clickLogo(){
    closeCenterDetailPage();
    setIsSelectedRegionInit();
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center gap-2 px-8 py-4 bg-white border-b xl:gap-0 xl:justify-between border-b-slate-200">
      <h1 className="text-[15px] xl:text-[20px] tracking-normal font-NotoSansKR font-semibold">
        <Link
          onClick={() => {
            clickLogo()
          }}
          href={"/"}
        >
          <Image className="w-64" height={15} width={48} alt="디디다: 충청남도 청소년활동자원맵" src={"/didida-logo.svg"} />
        </Link>
      </h1>
      <Image src={"/cn-pass-logo.svg"} className="hidden h-8 w-72 xl:block" width={214} height={48} alt="브랜드로고" />
    </header>
  );
}
