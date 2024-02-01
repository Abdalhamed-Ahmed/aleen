import classNames from "classnames";
import Image from "next/image";

export default function LangSelect({ setLang, lang }: any) {
  return (
    <div className="flex items-center gap-2">
      <button
        className={classNames(
          "flex items-center gap-2 hover:bg-primary px-2 py-1 text-sm rounded sm:text-base",
          {
            "bg-primary": lang == "ar",
          }
        )}
        onClick={() => {
          setLang("ar");
          document.documentElement.dir = "rtl";
          document.documentElement.lang = "ar";
        }}
      >
        <Image
          src={"/flags/saudi.svg"}
          alt="down Arrow"
          width={20}
          height={15}
          className="!w-[15px] sm:!w-[20px] "
        />
        Arabic
      </button>
      <button
        className={classNames(
          "flex items-center gap-2 hover:bg-primary px-2 py-1 text-sm rounded sm:text-base",
          {
            "bg-primary": lang == "en",
          }
        )}
        onClick={() => {
          setLang("en");
          document.documentElement.dir = "ltr";
          document.documentElement.lang = "en";
        }}
      >
        <Image
          src={"/flags/united.svg"}
          alt="down Arrow"
          width={20}
          height={15}
          className="!w-[15px] sm:!w-[20px]"
        />
        English
      </button>
    </div>
  );
}
