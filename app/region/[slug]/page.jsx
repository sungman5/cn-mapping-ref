import CenterName from "@/components/centerName";
import RegionCenterName from "@/components/regionCenterName";
import GetRegionCenterList from "@/lib/getRegionCenterList";

export default async function RegionPage(props) {
  const regionCenterList = await GetRegionCenterList(props.params.slug);
  return (
    <ul className="p-4 overflow-y-auto bg-white component-width">
      {regionCenterList.map((element) => {
        return <CenterName key={element.id} region={props.params.slug} element={element} />;
      })}
    </ul>
  );
}
