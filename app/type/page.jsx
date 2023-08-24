import Link from "next/link";

export default function Type(){
    return(
<main className="w-full bg-componentBg">
      <div className="sticky top-0 px-8 py-3 bg-white border-b md:py-6 border-b-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2>유형별</h2>
          <p className="text-xs">총 시설</p>
        </div>
        <ul className="grid grid-cols-3 gap-1">
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full px-1 py-1 text-sm border border-black rounded">청소년수련관</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full px-1 py-1 text-sm border border-black rounded">청소년수련원</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full px-1 py-1 text-sm border border-black rounded">문화의집</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full px-1 py-1 text-sm border border-black rounded">유스호스텔</Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center justify-center w-full px-1 py-1 text-sm border border-black rounded">야영장</Link>
          </li>
        </ul>
      </div>
      <ul className="p-4 overflow-y-auto bg-white component-width">
          <li className="cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg">유형별 리스트</li>
      </ul>
    </main>
    )
}