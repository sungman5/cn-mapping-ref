import Image from "next/image";

export default function Type() {
  return (
    <div className="w-full p-8 bg-white">
      <Image className="block pt-4 mx-auto mb-8" src={"/cn-pass-logo.svg"} width={80} height={100} alt="충청남도 로고" />
      <p className="text-center">유형별 센터리스트를 보려면 클릭하세요.</p>
    </div>
  );
}
