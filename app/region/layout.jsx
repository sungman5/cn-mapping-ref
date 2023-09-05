import RegionName from "@/components/regionName";
import GetAllRegionName from "@/lib/getAllRegionName";
import Link from "next/link";

export default async function RegionLayout(props) {
  const regionNameData = await GetAllRegionName();

  const sortRegionOrder = {
    13: 1,
    3: 2,
    7: 3,
    11: 4,
    9: 5,
    5: 6,
    2: 7,
    6: 8,
    4: 9,
    8: 10,
    10: 11,
    14: 12,
    16: 13,
    12: 14,
    15: 15,
  };

  const sortedRegionNameData = regionNameData.sort((a, b) => {
    return sortRegionOrder[a.id] - sortRegionOrder[b.id];
  });

  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 px-8 py-3 bg-white border-b xl:py-6 border-b-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2>지역별</h2>
          {/* <p className="text-xs">총 {regionNameData.length}시설</p> */}
        </div>
        <ul className="grid grid-cols-6 gap-1">
          {sortedRegionNameData.map((element) => {
            return <RegionName key={element.id} element={element} />;
          })}
        </ul>
      </div>
      {props.children}
    </main>
  );
}
