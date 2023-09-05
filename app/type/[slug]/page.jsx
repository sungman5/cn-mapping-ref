import CenterName from "@/components/centerName";
import TypeCenterName from "@/components/typeCenterName";
import GetTypeClassList from "@/lib/getTypeClassList";

export default async function TypePage(props) {
  const typeCenterList = await GetTypeClassList(props.params.slug);
  console.log("상세 유형 페이지", typeCenterList);
  return (
    <ul className="p-4 overflow-y-auto bg-white component-width">
      <TypeCenterName typeCenterList={typeCenterList}  />
      {/* {typeCenterList.map((element) => {
        return ;
      })} */}
    </ul>
  );
}
