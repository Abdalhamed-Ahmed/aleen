import Image from "next/image";
import useTranslation from "../hooks/useTranslation";
export default function Successfully({ lang }: { lang: string }) {
  const data: any = useTranslation("success", lang);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <Image
        src={"/icons/success.svg"}
        width={100}
        height={100}
        alt="logo"
        className="!w-[80px] sm:!w-[100px]"
      />
      <div className="flex flex-col items-center gap-1 text-bse md:text-lg lg:text-2xl">
        <p>{data?.title}</p>
        <p>{data?.subTitle}</p>
      </div>
      <button
        className="flex items-center gap-2 bg-primary px-4 py-2 rounded text-white hover:bg-hover"
        onClick={() => {
          location.reload();
        }}
      >
        {data?.button}
      </button>
    </div>
  );
}
