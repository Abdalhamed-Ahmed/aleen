import React from "react";
import Image from "next/image";
import { Form, Field } from "react-final-form";
import classNames from "classnames";
import SubmitBtn from "./SubmitBtn";
import useTranslation from "../hooks/useTranslation";

export default function ChildGender({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("childGender", lang);
  const [gender, setGender] = React.useState("");
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      gender: value.gender,
    });
    changeActiveStep(3);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.gender) {
      errors.gender = data?.error;
    }
    return errors;
  };

  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form
          id="form2"
          className="w-full px-6 md:p-0 z-10 sm:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[50%] flex flex-col items-start justify-center gap-6"
          onSubmit={props.handleSubmit}
        >
          <label className="relative text-lg md:text-[24px] font-[400]">
            {data?.label} *
            <span
              className={classNames(
                "absolute top-1/2 left-0 text-sm md:text-base -translate-x-[130%] -translate-y-1/2 flex items-center gap-1 text-primary",
                { "!left-full !translate-x-[130%]": lang == "ar" }
              )}
            >
              3
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
            <div className="flex items-center gap-4 w-full justify-center">
              <Field name="gender" value="male" type="radio">
                {({ input, meta }) => (
                  <>
                    <div className="w-[calc(50%-4px)]">
                      <input
                        id="male"
                        className="peer hidden"
                        name={input.name}
                        value={input.value}
                        type={input.type}
                        onChange={(e) => {
                          input.onChange(e);
                          setGender("male");
                        }}
                      />
                      <label
                        htmlFor="male"
                        className={classNames(
                          "flex items-center justify-between bg-[rgba(148,200,224,0.2)] gap-3 p-2 w-full rounded border-2 border-transparent transition duration-300 hover:border-primary text-lg md:text-xl peer-checked:border-primary",
                          {}
                        )}
                      >
                        <p className="w-max flex items-center gap-2">
                          <span className="w-[22px] h-[22px] bg-[#FFF5E9] flex items-center justify-center">
                            A
                          </span>
                          {data?.male}
                        </p>
                        <Image
                          src={"/icons/aleenCorrect.svg"}
                          width={15}
                          height={18}
                          className={classNames("", {
                            hidden: gender !== "male",
                          })}
                          alt="correct mark"
                        />
                      </label>
                    </div>
                  </>
                )}
              </Field>
              <Field name="gender" value="female" type="radio">
                {({ input, meta }) => (
                  <>
                    <div className="w-[calc(50%-4px)]">
                      <input
                        id="female"
                        className="peer hidden"
                        name={input.name}
                        value={input.value}
                        type={input.type}
                        onChange={(e) => {
                          input.onChange(e);
                          setGender("female");
                        }}
                      />
                      <label
                        htmlFor="female"
                        className={
                          "flex items-center justify-between bg-[rgba(148,200,224,0.2)] gap-3 p-2 w-full rounded border-2 border-transparent transition duration-300 hover:border-primary text-lg md:text-xl group peer-checked:border-primary"
                        }
                      >
                        <p className="w-max flex items-center gap-2">
                          <span className="w-[22px] h-[22px] bg-[#FFF5E9] flex items-center justify-center">
                            B
                          </span>
                          {data?.female}
                        </p>
                        <Image
                          src={"/icons/aleenCorrect.svg"}
                          width={15}
                          height={18}
                          className={classNames("", {
                            hidden: gender !== "female",
                          })}
                          alt="correct mark"
                        />
                      </label>
                    </div>
                  </>
                )}
              </Field>
            </div>
            {props?.errors?.gender && props.submitFailed && (
              <p
                className={`text-red-600 text-xs md:text-[14px] w-max flex items-center gap-2 bg-[#F7E6E6] rounded py-1 pl-2 pr-3 mt-3`}
              >
                <Image
                  src={"/icons/warning.svg"}
                  width={10}
                  height={10}
                  alt="error"
                  className="mb-[1px]"
                />
                {props?.errors?.gender}
              </p>
            )}
          </div>

          <SubmitBtn btnTitle="Ok" lang={lang} />
        </form>
      )}
    ></Form>
  );
}
