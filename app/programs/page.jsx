import AllProgramLength from "@/components/allProgramLength";
import ProgramName from "@/components/programName";
import ProgramPageFilter from "@/components/programPageFilter";
import Search from "@/components/search";
import GetAllPrograms from "@/lib/getAllPrograms";

export default async function Programs() {
  const programData = await GetAllPrograms();
  const programCourseList = Array.from(new Set(programData.map((p) => p.program_metadata.program_course)));

  return (
    <main className="w-full bg-componentBg">
      {/* <div className="sticky top-0 flex flex-col justify-center h-32 gap-4 px-8 bg-white border-b border-b-slate-200"> */}
      <div className="sticky top-0 p-8 bg-white border-b">
        <div className="flex items-center justify-between mb-4 ">
          <h2>모든 프로그램</h2>
          <AllProgramLength programData={programData} />
        </div>
        <ProgramPageFilter programData={programData} programCourseList={programCourseList} />
      </div>
      <ul className="p-4 overflow-y-auto bg-white component-width">
        <Search programData={programData} />
        <ProgramName programData={programData} />
      </ul>
    </main>
  );
}
