import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full p-8 bg-white">
      <Image className="block pt-4 mx-auto mb-8" src={"/cn-pass-logo.svg"} width={80} height={100} alt="충청남도 로고" />
      <h1>디디다란?</h1>
      <p className="leading-relaxed">
        디디다에 오신 것을 환영합니다.
        <br/>
        <br/>
        구하기 같은 우리 그들의 바이며, 꽃 길지 노래하며 피다. 위하여, 새 청춘이 같이, 있는가? 구하지 과실이 갑 낙원을 무엇을 어디 아름답고 끓는다. 그들의 노래하며 하였으며,
        같으며, 이는 피에 앞이 무한한 철환하였는가? 풍부하게 할지라도 무한한 없으면 커다란 자신과 청춘의 새 말이다. 가슴이 할지라도 찾아다녀도, 무한한 얼마나 구하기 철환하였는가?
        용감하고 오직 그들을 가지에 든 방황하였으며, 그들의 모래뿐일 구할 이것이다. 없으면, 바로 사람은 예수는 황금시대다. 튼튼하며, 꾸며 귀는 있는 것이다. 찾아다녀도, 이상 없는
        청춘은 가지에 불어 칼이다.
      </p>
    </main>
  );
}
