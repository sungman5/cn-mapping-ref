import RegionName from "@/components/regionName";
import GetAllRegionName from "@/lib/getAllRegionName";
import Link from "next/link";

export default async function RegionLayout(props) {
  const regionNameData = await GetAllRegionName();
  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 px-8 py-3 bg-white border-b xl:py-6 border-b-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2>지역별</h2>
          {/* <p className="text-xs">총 {regionNameData.length}시설</p> */}
        </div>
        <ul className="grid grid-cols-6 gap-1">
          {regionNameData.map((element) => {
            return <RegionName key={element.id} element={element} />;
          })}
        </ul>
      </div>
      {props.children}
    </main>
  );
}
