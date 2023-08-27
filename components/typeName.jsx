"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TypeName({ element }) {
  const getPathname = usePathname();
  const pathname = getPathname.split("/")[2];

  return (
    <li>
      <Link href={`/type/${element.slug}`} className={`flex items-center justify-center w-full px-1 py-1 text-sm border rounded ${pathname === element.slug ? 'border-primary text-primary' :'border-defaultBlack text-defaultBlack' }`}>
        {element.name}
      </Link>
    </li>
  );
}
