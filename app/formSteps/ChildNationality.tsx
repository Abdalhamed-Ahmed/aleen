import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function ChildsNationality({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("childNationality", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      childNationality: value.childNationality,
    });
    changeActiveStep(2);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.childNationality) {
      errors.childNationality = data?.error;
    }
    return errors;
  };

  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form1" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="childNationality" type="text">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={2}
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
