import CenterName from "@/components/centerName";
import Search from "@/components/search";
import getAllCenterList from "@/lib/getAllCenterList";

export default async function AllCenterList() {
  const centerList = await getAllCenterList();
  // console.log('모든센터리스트:',centerList)

  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 flex items-center justify-between h-12 px-8 bg-white border-b xl:h-16 border-b-slate-200">
        <h2>모든 시설</h2>
        <p className="text-xs">총 {centerList.length}개소</p>
      </div>

      <ul className="p-4 bg-white xl:overflow-y-auto hide-scrollbar component-width">
        <Search centerList={centerList} />
        <CenterName centerList={centerList} key={centerList.id} />        
      </ul>
    </main>
  );
}
