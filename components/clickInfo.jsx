"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

export default function ClickInfo() {
  useEffect(() => {
    gsap.to("#click-info", {
      repeat: -1,
      scale: 1.05,
      duration: 0.4,
      ease: "power1.inOut",
      yoyo: true,
    });
  }, []);
  return (
    <div id="click-info"  className="absolute hidden gap-2 px-3 py-2 text-black border-2 border-black rounded-full xl:flex top-8 right-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
        />
      </svg>

      <p>지역을 클릭해보세요!</p>
    </div>
  );
}
