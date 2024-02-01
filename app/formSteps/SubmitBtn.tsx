import Image from "next/image";

export default function SubmitBtn({
  btnTitle,
  lang,
}: {
  btnTitle: string;
  lang: string;
}) {
  return (
    <button className="rounded text-white bg-primary px-4 py-2 flex text-xl font-bold items-center gap-3">
      {lang == "ar" ? "التالى" : btnTitle}
      <Image
        src={"/icons/correct.svg"}
        width={15}
        height={18}
        alt={"correct mark"}
      />
    </button>
  );
}
