import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full p-8 bg-white">
      <Image className="block w-48 pt-4 mx-auto mb-8" src={"/didida-vertical.svg"} width={80} height={100} alt="충청남도 로고" />
      <p className="leading-relaxed text-center">
        충청남도 청소년활동자원맵<br />
        &lt;디디다&gt;에 오신 것을 환영합니다.
        <br/>
        <br/>
      </p>
    </main>
  );
}
