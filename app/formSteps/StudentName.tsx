import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";

export default function StepOne({
  setFormData,
  formData,
  changeActiveStep,
  lang,
}: any) {
  const data: any = useTranslation("studentName", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      studentFullName: value.studentFullName,
    });
    changeActiveStep(1);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.studentFullName) {
      errors.studentFullName = data?.error;
    } else if (values.studentFullName.trim().split(" ").length < 3) {
      errors.studentFullName = data?.errorLength;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form0" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="studentFullName" type="text">
            {({ input, meta }) => (
              <CustomInput
                {...input}
                lang={lang}
                error={meta.error}
                label={data?.label}
                placeholder={data?.inputPlaceholder}
                labelNumber={1}
                submitFaild={props.submitFailed}
              />
            )}
          </Field>
        </form>
      )}
    ></Form>
  );
}
