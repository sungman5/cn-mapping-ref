import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full p-8 bg-white">
      <Image className="block w-32 pt-4 mx-auto mb-12" src={"/didida-vertical.svg"} width={80} height={100} alt="충청남도 로고" />
      <p className="leading-relaxed text-left">
        <span className="block mb-2 text-lg font-bold text-black font-Pretendard">디디다란?</span>
        <span className="block mb-2">충청남도의 청소년 관련 정보를 교사 및 지도자에게 상시 제공하도록 신설된 사이트로,</span>
      </p>
      <ol className="list-decimal">
        <li className="ml-4">자신의 발을 올려 놓고 서서라는 의미의 우리말과</li>
        <li className="ml-4">청소년들이 경험을 하며 자립할 수 있는 활동들을 알아 볼&#40;디딜&#41;수 있는 곳의 함축적인 의미를 담고 있습니다.</li>
      </ol>
    </main>
  );
}
