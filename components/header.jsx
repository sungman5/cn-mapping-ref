'use client'

import { useCnStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

    const {closeCenterDetailPage} = useCnStore();
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center gap-2 px-8 py-4 bg-white border-b md:gap-0 md:justify-between border-b-slate-200">
      <h1 className="text-[15px] md:text-[20px] tracking-normal font-NotoSansKR font-semibold">
        <Link onClick={()=>{closeCenterDetailPage()}} href={"/"}>디디다: 충청남도 청소년활동자원맵</Link>
      </h1>
      <Image src={"/cn-brand-logo.svg"} className="hidden h-8 md:block w-36" width={214} height={48} alt="브랜드로고" />
    </header>
  );
}
