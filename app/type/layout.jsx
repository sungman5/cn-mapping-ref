import GetAllTypeName from "@/lib/getAllTypeName";
import Link from "next/link";

export default async function Layout(props) {
  const fetchTypeList = await GetAllTypeName();
  console.log("유형?", fetchTypeList);
  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 px-8 py-3 bg-white border-b md:py-6 border-b-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2>유형별</h2>
          {/* <p className="text-xs">총 시설</p> */}
        </div>
        <ul className="grid grid-cols-3 gap-1">
          {fetchTypeList.map((element) => {
            return (
              <li key={element.id}>
                <Link href={`/type/${element.slug}`} className="flex items-center justify-center w-full px-1 py-1 text-sm border border-black rounded">
                  {element.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {props.children}
    </main>
  );
}
