import ProgramName from "@/components/programName";
import ProgramPageFilter from "@/components/programPageFilter";
import GetAllPrograms from "@/lib/getAllPrograms";

export default async function Programs() {
  const programData = await GetAllPrograms();

  let programsByCourse = [];

  // console.log(programData);
  
  programData.forEach((program) => {
    const course = program.program_metadata.program_course;
    if (!programsByCourse[course]) {
      programsByCourse[course] = [];
    }
    programsByCourse[course].push(program);
  });

  // console.log("ㅇ", programsByCourse);

  const courseName = {
    course_lang: "국어",
    course_math: "수학",
    course_eng: "영어",
    course_ethical: "사회과/도덕",
    course_science: "과학과",
    course_art: "예체능",
    course_skill: "기술가정/정보",
    course_second_lang: "제2외국어",
    course_expert: "전문교과",
    course_freeactive: "자율활동",
    course_party: "동아리활동",
    course_service: "봉사활동",
    course_step: "진로활동",
    course_free: "자유학기제/자유학년제",
    course_point: "고교학점제",
    course_etc: "기타",
  };

  return (
    <main className="w-full bg-componentBg">
      <div className="sticky top-0 flex flex-col justify-center h-32 gap-4 px-8 bg-white border-b border-b-slate-200">
        <div className="flex items-center justify-between ">
          <h2>모든 프로그램</h2>
          <p className="text-xs">총 {programData.length}개의 프로그램</p>
        </div>
        {/* <ProgramPageFilter /> */}
      </div>
      <ul className="p-4 overflow-y-auto bg-white component-width">
        {programData.map((element) => {
          return <ProgramName key={element.program_id} element={element} />;
        })}
      </ul>
    </main>
  );
}
