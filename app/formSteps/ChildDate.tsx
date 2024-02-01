import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function ChildDate({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("childDate", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      date: value.date,
    });
    changeActiveStep(5);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.date) {
      errors.date = data?.error;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form4" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="date" type="date">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  min="2019-01-01"
                  max={new Date().toISOString().split("T")[0]}
                  error={meta.error}
                  label={data?.label}
                  labelNumber={5}
                  submitFaild={props.submitFailed}
                />
              </>
            )}
          </Field>
        </form>
      )}
    ></Form>
  );
}
