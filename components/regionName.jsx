"use client";

import { useCnStore } from "@/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RegionName({ element }) {
  const getPathname = usePathname();
  const pathname = getPathname.split("/")[2];
  const { setIsSelectedRegion } = useCnStore();
  return (
    <li
      onClick={() => {
        setIsSelectedRegion(element.slug);
      }}
    >
      <Link
        href={`/region/${element.slug}`}
        className={`${
          pathname === element.slug ? "border-primary bg-hoverbg text-primary" : "border-defaultBlack text-defaultBlack"
        } flex items-center justify-center w-full p-1 text-sm border  rounded`}
      >
        {element.name}
      </Link>
    </li>
  );
}
