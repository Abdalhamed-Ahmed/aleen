import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import React from "react";
import SubmitBtn from "./SubmitBtn";
import Image from "next/image";
import Loader from "../loaders/Loader";
import useTranslation from "../hooks/useTranslation";
import classNames from "classnames";

const validTypes = ["png", "jpeg", "jpg", "pdf"];

let imageSizeLimit = 10485760;
export default function CPRFileUpload({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("cprFileUpload", lang);
  const [fileName, setFileName] = React.useState("");
  const [ImageFile, setImageFile] = React.useState<any>(null);
  const [loading, setISLoading] = React.useState(false);

  const submitForm = (value: any) => {
    const driveUrl: any = process.env.NEXT_PUBLIC_googleDrive_URL;

    if (!(formData.CPRName == value.CPRFile) && !loading) {
      var file = ImageFile?.target?.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        var rawLog = (reader?.result as any).split(",")[1];
        var dataSend = {
          dataReq: { data: rawLog, name: file.name, type: file.type },
          fname: "uploadFilesToGoogleDrive",
        };
        setISLoading(true);
        fetch(driveUrl, { method: "POST", body: JSON.stringify(dataSend) })
          .then((res) => res.json())
          .then((a) => {
            changeActiveStep(9);
            setISLoading(false);
            setFormData({
              ...formData,
              CPRFileUrl: a.url,
              CPRName: value.CPRFile,
            });
          })
          .catch((e) => console.log(e));
      };
    } else if (!loading) {
      changeActiveStep(9);
    }
  };

  const validates = (values: any) => {
    const errors: any = {};
    const file = ImageFile?.target?.files?.[0];

    if (!values.CPRFile) {
      errors.CPRFile = data?.error;
    } else if (file) {
      if (file?.size > imageSizeLimit) {
        errors.CPRFile = data?.invalidSize;
      } else if (!validTypes.includes(file?.type.split("/")[1])) {
        errors.CPRFile = data?.invalidFormate;
      }
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form8" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="CPRFile" type="file">
            {({ input, meta }) => (
              <div className="relative w-full px-6 md:p-0 z-10 sm:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[50%] mb-6 mx-auto flex flex-col items-start justify-center gap-6">
                <label className="relative text-lg md:text-[24px] font-[400]">
                  {data?.label} *
                  <span
                    className={classNames(
                      "absolute top-1/2 left-0 text-sm md:text-base -translate-x-[130%] -translate-y-1/2 flex items-center gap-1 text-primary",
                      { "!left-full !translate-x-[130%]": lang == "ar" }
                    )}
                  >
                    9
                    <Image
                      src={"/icons/right.svg"}
                      width={8}
                      height={11}
                      className="md:!w-[10px]"
                      alt={"right arrow"}
                    />
                  </span>
                </label>
                <label
                  htmlFor="fileUpload"
                  className="w-full cursor-pointer h-[250px] relative bg-[rgba(149,200,224,0.2)] rounded-lg flex flex-col items-center justify-center"
                >
                  <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center flex-col gap-2">
                    {!loading ? (
                      <>
                        <Image
                          src={"/icons/upload.svg"}
                          width={80}
                          height={100}
                          alt="upload svg"
                        />
                        <p>
                          <span className="text-primary">{data?.choose}</span>{" "}
                          {data?.or}{" "}
                          <span className="font-bold">{data?.drag}</span>
                        </p>
                        <p className="text-xs">{data?.limit}</p>
                      </>
                    ) : (
                      <>
                        <Loader />
                        <p className="flex items-center gap-2">
                          {data?.upload}
                        </p>
                      </>
                    )}
                  </div>

                  <input
                    type={input.type}
                    name={input.name}
                    id="fileUpload"
                    accept=".jpg, .jpeg, .png, .pdf"
                    className="w-full h-full opacity-0 cursor-pointer"
                    onChange={(event: any) => {
                      setFileName(event?.target?.files[0]?.name);
                      setImageFile(event);
                      input.onChange(event);
                    }}
                  />
                </label>
                {fileName && (
                  <p>
                    {data?.fileName}{" "}
                    <span className="text-primary font-bold">{fileName}</span>
                  </p>
                )}
                {meta.error && props.submitFailed && (
                  <p
                    className={`text-red-600 text-xs md:text-[14px] w-max flex items-center gap-2 bg-[#F7E6E6] rounded py-1 pl-2 pr-3 mt-2 max-w-full`}
                  >
                    <Image
                      src={"/icons/warning.svg"}
                      width={10}
                      height={10}
                      alt="error"
                      className="mb-[1px]"
                    />
                    <span className="flex-1 inline-block break-all">
                      {meta.error}
                    </span>
                  </p>
                )}
                {!props.submitFailed && !loading ? (
                  <SubmitBtn btnTitle={"OK"} lang={lang} />
                ) : meta.error ? null : !loading ? (
                  <SubmitBtn btnTitle={"OK"} lang={lang} />
                ) : null}
              </div>
            )}
          </Field>
        </form>
      )}
    ></Form>
  );
}
