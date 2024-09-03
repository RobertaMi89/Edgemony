import React from "react";
import Glasses from "@/app/assets/glasses.gif";
import Image from "next/image";

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src={Glasses} alt="loading" />
    </div>
  );
}
