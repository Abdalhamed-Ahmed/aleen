import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function ContactNumber({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("contactNumber", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      contactNumber: value.contactNumber,
    });
    changeActiveStep(11);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.contactNumber) {
      errors.contactNumber = data?.error;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form10" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="contactNumber" type="number">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={11}
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
