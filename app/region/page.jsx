import Link from "next/link";

export default function Region() {
  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 px-8 py-3 bg-white border-b md:py-6 border-b-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2>지역별</h2>
          <p className="text-xs">총 시설</p>
        </div>
        <ul className="grid grid-cols-6 gap-1">
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">계룡</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">공주</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">금산</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">논산</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">당진</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">보령</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">부여</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">서산</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">서천</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">아산</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">예산</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">천안</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">청양</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">태안</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full p-1 text-sm border border-black rounded">홍성</Link>
          </li>
        </ul>
      </div>
      <ul className="p-4 overflow-y-auto bg-white component-width">
          <li className="cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg">지역별 리스트</li>
      </ul>
    </main>
  );
}
