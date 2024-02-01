"use client";
import Image from "next/image";
import FormSteps from "./formSteps";
import LangSelect from "./formSteps/LangSelector";
import useTranslation from "./hooks/useTranslation";
import React from "react";
export default function Home() {
  const [lang, setLang] = React.useState("en");
  const x: any = useTranslation("home", lang);

  return (
    <main className="bg-[#fff5e9] w-screen h-screen flex flex-col justify-between items-center">
      <div className="w-full p-3 pb-0 md:p-6 md:pb-0">
        <div className="flex w-full items-center justify-between">
          <Image
            src="/logo2.png"
            width={100}
            height={180}
            alt="logo"
            className="!w-[50px] sm:!w-[100px]"
          />
          <Image
            src="/logo.png"
            width={150}
            height={200}
            alt="logo"
            className="pl-4 !w-[100] sm:!w-[180px]"
          />
        </div>
        <div className="flex w-full items-center justify-between gap-4 mt-4">
          <p className="text-left text-[#94c8e0] text-lg lg:text-2xl font-bold origin-top">
            {x?.early}
          </p>
          <LangSelect lang={lang} setLang={setLang} />
        </div>
      </div>
      <FormSteps lang={lang} />
    </main>
  );
}
