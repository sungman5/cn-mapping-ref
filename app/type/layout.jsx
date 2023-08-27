import TypeName from "@/components/typeName";
import GetAllTypeName from "@/lib/getAllTypeName";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default async function TypeLayout(props) {
  const fetchTypeList = await GetAllTypeName();

  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 px-8 py-3 bg-white border-b xl:py-6 border-b-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2>유형별</h2>
          {/* <p className="text-xs">총 시설</p> */}
        </div>
        <ul className="grid grid-cols-3 gap-1">
          {fetchTypeList.map((element) => {
            return <TypeName element={element} key={element.id} />
          })}
        </ul>
      </div>
      {props.children}
    </main>
  );
}
