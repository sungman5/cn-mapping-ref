import CenterName from "@/components/centerName";
import GetTypeClassList from "@/lib/getTypeClassList";

export default async function TypePage(props) {
  const typeCenterList = await GetTypeClassList(props.params.slug);

  return (
    <ul className="p-4 overflow-y-auto bg-white component-width">
      {typeCenterList.map((element) => {
        return <CenterName key={element.id} element={element} />;
      })}
    </ul>
  );
}
