"use client";
import React from "react";
import classNames from "classnames";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import FieldsLayout from "./FieldsLayout";
import StudentName from "./StudentName";
import ChildsNationality from "./ChildNationality";
import ChildGender from "./ChildGender";
import ChildCPRNumber from "./ChildCPRNumber";
import ChildDate from "./ChildDate";
import Religion from "./Religion";
import MotherName from "./MotherName";
import HomeArea from "./HomeArea";
import CPRFileUpload from "./CPRFileUpload";
import ContactEmail from "./ContactEmail";
import ContactNumber from "./ContactNumber";
import AnotherNumber from "./AnotherNumber";
import Link from "next/link";
import Successfully from "./Successfully";
import LangSelect from "./LangSelector";

export default function FormSteps({ lang }: any) {
  const [activeStep, changeActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({});

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full mt-6 pb-12 relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#fff5e9] before:opacity-[0.95]">
      <ProgressBar activeStep={activeStep} lang={lang} />
      <div className="flex-1 overflow-hidden text-center relative z-10 container">
        <FieldsLayout activeStep={activeStep} fieldStepNumber={0}>
          <StudentName
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={1}>
          <ChildsNationality
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={2}>
          <ChildGender
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={3}>
          <ChildCPRNumber
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={4}>
          <ChildDate
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={5}>
          <Religion
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={6}>
          <MotherName
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={7}>
          <HomeArea
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={8}>
          <CPRFileUpload
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={9}>
          <ContactEmail
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={10}>
          <ContactNumber
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={11}>
          <AnotherNumber
            lang={lang}
            changeActiveStep={changeActiveStep}
            formData={formData}
            setFormData={setFormData}
          />
        </FieldsLayout>
        <FieldsLayout activeStep={activeStep} fieldStepNumber={12}>
          <Successfully lang={lang} />
        </FieldsLayout>
      </div>
      <div
        className={classNames(
          "container flex justify-between md:justify-end items-start w-full mt-20 h-max relative z-10 px-3 sm:p-0",
          { "!justify-end": activeStep == 12 }
        )}
      >
        {activeStep < 12 ? (
          <>
            <button
              className={classNames(
                "flex items-center gap-2 bg-primary px-4 py-2 rounded text-white border-slate-300 border-r-[1px] md:rounded-tr-none md:rounded-br-none hover:bg-hover",
                {
                  "bg-gray-400 hover:!bg-primary": !activeStep,
                  "!rounded-tr !rounded-br !rounded-tl-none !rounded-bl-none":
                    lang == "ar",
                }
              )}
              onClick={() => changeActiveStep(activeStep - 1)}
              disabled={activeStep == 0}
            >
              <Image
                src={"/icons/up.svg"}
                alt="down Arrow"
                width={15}
                height={15}
              />
            </button>
            <button
              form={`form${activeStep}`}
              className={classNames(
                "flex items-center gap-2 bg-primary px-4 py-2 rounded text-white md:rounded-tl-none md:rounded-bl-none hover:bg-hover",
                {
                  "!rounded-tl !rounded-bl !rounded-tr-none !rounded-br-none":
                    lang == "ar",
                }
              )}
            >
              <Image
                src={"/icons/down.svg"}
                alt="down Arrow"
                width={15}
                height={15}
              />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
