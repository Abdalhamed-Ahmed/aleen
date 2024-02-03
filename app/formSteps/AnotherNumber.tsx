import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import React from "react";
import Loader from "../loaders/Loader";
import useTranslation from "../hooks/useTranslation";

export default function AnotherNumber({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("anotherNumber", lang);
  const [loading, setIsloading] = React.useState(false);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      AnotherContactNumber: value.anotherContactNumber || "",
    });
    setIsloading(true);
    const scriptUrl: any = process.env.NEXT_PUBLIC_googleSheets_URL;
    fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify({
        ...formData,
        anotherContactNumber: value.anotherContactNumber,
      }),
    })
      .then((res) => {
        setIsloading(false);
        changeActiveStep(12);
      })
      .catch((err) => console.log(err));
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (
      values.anotherContactNumber &&
      values.anotherContactNumber.length != 8
    ) {
      errors.anotherContactNumber = data?.lengthError;
    }
    return errors;
  };

  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form11" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="anotherContactNumber" type="number">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  notRequired={true}
                  loading={loading}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={12}
                  submitFaild={props.submitFailed}
                />
                {loading && (
                  <p className="flex items-center gap-2 w-full px-6 md:p-0 z-10 sm:w-[90%] md:w-[75%] lg:w-[70%] xl:w-[50%] mb-6 mx-auto">
                    {data?.submit}
                    <Loader />
                  </p>
                )}
              </>
            )}
          </Field>
        </form>
      )}
    ></Form>
  );
}
