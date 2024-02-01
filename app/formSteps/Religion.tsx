import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function Religion({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("religion", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      religion: value.religion,
    });
    changeActiveStep(6);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.religion) {
      errors.religion = data?.error;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form5" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="religion" type="text">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={6}
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
