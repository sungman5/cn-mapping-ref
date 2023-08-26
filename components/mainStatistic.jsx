import Link from "next/link";

export default function MainStatistic() {
  return (
    <div className={`xl:flex xl:flex-col 3xl:flex-row hidden absolute gap-2 bottom-8 right-8`}>
      <div className="flex items-center gap-4 px-6 py-2 bg-white rounded-full shadow-sm ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 3xl:w-6 3xl:h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h1 className="text-sm font-bold 3xl:text-lg font-Pretendard text-primary">충청남도 청소년 인구</h1>
        <p className="text-sm 3xl:text-lg">
          2,126,374명 <span className="text-sm text-applegray">&#40;2023년 6월 기준&#41;</span>
        </p>
      </div>
      <Link href={"/all-center-list"} className="flex gap-4 px-6 py-2 bg-white rounded-full shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 3xl:w-6 3xl:h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <h1 className="text-sm font-bold 3xl:text-lg font-Pretendard text-primary">청소년 시설 수</h1>
        <p className="text-sm 3xl:text-lg">44개소</p>
      </Link>
    </div>
  );
}
