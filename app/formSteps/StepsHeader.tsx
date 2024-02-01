import classNames from "classnames";
import Image from "next/image";

export default function StepsHeader({
  activeStep,
  nextStepSection,
}: {
  activeStep?: number;
  nextStepSection: number;
}) {
  const steps = ["child's information", "Contact Information", "finish"];
  return (
    <div className="flex w-full relative z-10 sm:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[50%] mx-auto items-center justify-between">
      {steps.map((step, ind) => (
        <div key={step} className="">
          <span
            className={classNames(
              "w-[40px] h-[40px] rounded-full bg-[#e39aa3] flex items-center justify-center relative group",
              { "!bg-gray-400": ind >= nextStepSection }
            )}
          >
            {ind != 2 ? (
              ind + 1
            ) : (
              <Image
                src="/icons/finish.svg"
                width={18}
                height={18}
                alt="finish"
              />
            )}
            <span
              className={classNames(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e39aa3] rounded-full",
                {
                  circleAnimation: nextStepSection == ind,
                }
              )}
            ></span>
            <span className="absolute top-full left-1/2 -translate-x-1/2 translate-y-2 w-max z-20 bg-[#95c8e0] text-white py-1 px-3 rounded-lg transition-all duration-300 scale-y-0 origin-top group-hover:scale-y-100">
              {step}
            </span>
          </span>
          <span
            className={classNames(
              "w-[calc(50%-58px)] h-[6px] bg-gray-400 absolute inline-block z-10 top-1/2 -translate-y-1/2",
              {
                "left-[39px]": !ind,
                "right-[39px]": ind == 1,
                hidden: ind == 2,
              }
            )}
          ></span>
        </div>
      ))}
    </div>
  );
}
