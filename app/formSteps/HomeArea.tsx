import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function HomeArea({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("homeArea", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      homeArea: value.homeArea,
    });
    changeActiveStep(8);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.homeArea) {
      errors.homeArea = data?.error;
    }
    return errors;
  };
  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form7" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="homeArea" type="text">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={8}
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
