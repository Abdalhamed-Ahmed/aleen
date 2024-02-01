import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function MotherName({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("motherName", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      motherName: value.motherName,
    });
    changeActiveStep(7);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.motherName) {
      errors.motherName = data?.error;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form6" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="motherName" type="text">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={7}
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
