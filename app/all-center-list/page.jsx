import CenterName from "@/components/centerName";
import getAllCenterList from "@/lib/getAllCenterList";

export default async function AllCenterList() {
  const centerList = await getAllCenterList();

  return (
    <main className="w-full bg-componentBg">
      
      <div className="sticky top-0 flex items-center justify-between h-12 px-8 bg-white border-b md:h-16 border-b-slate-200">
        <h2>모든 시설</h2>
        <p className="text-xs">총 {centerList.length}시설</p>
      </div>

      <ul className="p-4 overflow-y-auto bg-white hide-scrollbar component-width">
        {
            centerList.map((element)=>{
                return(
                    <CenterName element={element} key={element.id} />
                )
            })
        }
        <li></li>
      </ul>
    </main>
  );
}