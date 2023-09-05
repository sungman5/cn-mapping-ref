import CenterName from "@/components/centerName";
import RegionCenterName from "@/components/regionCenterName";
import GetRegionCenterList from "@/lib/getRegionCenterList";

export default async function RegionPage(props) {
  const regionCenterListBefore = await GetRegionCenterList(props.params.slug);
  const regionCenterList = [...regionCenterListBefore].reverse();
  return (
    <ul className="p-4 overflow-y-auto bg-white component-width">
      <RegionCenterName region={props.params.slug} regionCenterList={regionCenterList} />
      {/* {regionCenterList.map((element) => {
        return ;
      })} */}
    </ul>
  );
}
