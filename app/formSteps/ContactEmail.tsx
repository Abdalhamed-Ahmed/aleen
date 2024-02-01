import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";

export default function ContactEmail({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("contactEmail", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      contactEmail: value.contactEmail,
    });
    changeActiveStep(10);
  };

  const validates = (values: any) => {
    const errors: any = {};
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.contactEmail) {
      errors.contactEmail = data?.error;
    } else if (!values.contactEmail.match(validEmail)) {
      errors.contactEmail = data?.invalidFormat;
    } else if (values.contactEmail.length < 4) {
      errors.contactEmail = data?.min;
    } else if (values.contactEmail.length > 50) {
      errors.contactEmail = data?.max;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form9" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="contactEmail" type="text">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={10}
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
