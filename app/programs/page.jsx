import ProgramName from "@/components/programName";
import GetAllPrograms from "@/lib/getAllPrograms";

export default async function Programs() {
  const programData = await GetAllPrograms();

  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 flex items-center justify-between h-12 px-8 bg-white border-b xl:h-16 border-b-slate-200">
        <h2>모든 프로그램</h2>
        <p className="text-xs">총 {programData.length}개의 프로그램</p>
      </div>
      <ul className="p-4 overflow-y-auto bg-white component-width">
        {programData.map((element) => {
          // console.log('엘레멘트', element)
          return <ProgramName key={element.program_id} element={element} />;
        })}
      </ul>
    </main>
  );
}
