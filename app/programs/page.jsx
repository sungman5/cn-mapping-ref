import GetAllPrograms from "@/lib/getAllPrograms";

export default async function Programs() {
  const programData = await GetAllPrograms();
  console.log("프로그램 데이터", programData);

  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 flex items-center justify-between h-12 px-8 bg-white border-b md:h-16 border-b-slate-200">
        <h2>모든 프로그램</h2>
        <p className="text-xs">총 n개의 프로그램</p>
      </div>
      <ul className="p-4 overflow-y-auto bg-white component-width">
        {programData.map((element) => {
          return (
            <li key={element.program_id} className="cursor-pointer hover:text-primary px-4 py-2.5 rounded hover:bg-hoverbg">
              {element.program_title}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
