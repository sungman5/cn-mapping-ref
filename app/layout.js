import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/nav";
import CenterDetailPage from "@/components/centerDetailPage";
import Header from "@/components/header";
import ProgramDetailPage from "@/components/programDetailPage";
import CnMap from "@/components/mapping";
import ClickInfo from "@/components/clickInfo";
import MainStatistic from "@/components/mainStatistic";

export const metadata = {
  title: "디디다:충청남도 청소년활동자원맵",
  description: "충청남도 청소년들이 이용할 수 있는 청소년 시설 및 활동자원맵입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-screen text-sm xl:text-base font-NanumSquareRound text-defaultBlack">
      <body className="flex flex-col h-screen tracking-tighter ">
        <Header />
        <div className="flex flex-col-reverse xl:h-full pb-[67.5px] xl:pb-0 xl:flex-row xl:flex-1 pt-[69px] xl:pt-[78px]">
          <NavBar />
          <section className="w-full overflow-y-auto bg-white border-r xl:shadow-lg xl:w-80 2xl:w-80 3xl:w-96 border-r-slate-200">{children}</section>
          {/* 프로그램 상세 목록 컴포넌트 */}
          <CenterDetailPage />
          <ProgramDetailPage />
          <div className="relative items-center justify-center flex-1 hidden bg-white xl:flex">
            <ClickInfo />
            <MainStatistic />
            <div>
              <CnMap />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
