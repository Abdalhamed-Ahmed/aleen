"use client";
import { ar } from "@/app/locals/ar";
import { en } from "@/app/locals/en";
import React from "react";

export default function useTranslation(name: string, lang: string) {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    if (lang == "en") {
      setData((en as any)[name]);
    } else if (lang == "ar") {
      setData((ar as any)[name]);
    }
  }, [name, lang]);

  return data;
}
