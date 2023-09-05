import CenterName from "@/components/centerName";
import TypeCenterName from "@/components/typeCenterName";
import GetTypeClassList from "@/lib/getTypeClassList";

export default async function TypePage(props) {
  const typeCenterListBefore = await GetTypeClassList(props.params.slug);
  const typeCenterList = [...typeCenterListBefore].reverse();
  return (
    <ul className="p-4 overflow-y-auto bg-white component-width">
      <TypeCenterName typeCenterList={typeCenterList} />
      {/* {typeCenterList.map((element) => {
        return ;
      })} */}
    </ul>
  );
}
