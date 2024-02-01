import classNames from "classnames";
import Image from "next/image";
import SubmitBtn from "./SubmitBtn";

export default function CustomInput({
  placeholder,
  containerClasses,
  errorStyle,
  inputStyle,
  label,
  labelNumber,
  notRequired,
  submitFaild,
  loading,
  error,
  lang,
  ...props
}: any) {
  return (
    <div
      className={classNames(
        "relative w-full px-6 md:p-0 z-10 sm:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[50%] mb-6 mx-auto flex flex-col items-start justify-center gap-6",
        containerClasses
      )}
    >
      <label className="relative text-lg md:text-[24px] font-[400]">
        {label} {!notRequired && "*"}
        <span
          className={classNames(
            "absolute top-1/2 left-0 text-sm md:text-base -translate-x-[130%] -translate-y-1/2 flex items-center gap-1 text-primary",
            { "!left-full !translate-x-[130%]": lang == "ar" }
          )}
        >
          {labelNumber}
          <Image
            src={"/icons/right.svg"}
            width={8}
            height={11}
            className={classNames("md:!w-[10px]", {
              "rotate-180": lang == "ar",
            })}
            alt={"right arrow"}
          />
        </span>
      </label>
      <div className="w-full">
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={placeholder}
          className={classNames(
            `bg-transparent w-full text-xl md:text-[30px] mb-2 pb-2  text-primary placeholder:text-placeholder focus:shadow-[0px_2px_0px_0px_rgba(149,200,224,1)] shadow-[0px_1px_0px_0px_rgba(149,200,224,0.6)] transition-all duration-300 focus:!outline-[0px]`,
            inputStyle,
            {}
          )}
          {...props}
        />
        {error && submitFaild && (
          <p
            className={`text-red-600 text-xs md:text-[14px] w-max flex items-center gap-2 bg-[#F7E6E6] rounded py-1 pl-2 pr-3 mt-2 ${errorStyle} max-w-full`}
          >
            <Image
              src={"/icons/warning.svg"}
              width={10}
              height={10}
              alt="error"
              className="mb-[1px]"
            />
            <span className="flex-1 inline-block break-all">{error}</span>
          </p>
        )}
      </div>
      {!submitFaild && !loading ? (
        <SubmitBtn btnTitle={"OK"} lang={lang} />
      ) : error ? null : !loading ? (
        <SubmitBtn btnTitle={"OK"} lang={lang} />
      ) : null}
    </div>
  );
}
