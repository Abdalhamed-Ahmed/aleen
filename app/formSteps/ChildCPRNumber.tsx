import CustomInput from "./customInput";
import { Form, Field } from "react-final-form";
import useTranslation from "../hooks/useTranslation";
export default function ChildrenCPRNumber({
  setFormData,
  formData,
  lang,
  changeActiveStep,
}: any) {
  const data: any = useTranslation("childCPRNumber", lang);
  const submitForm = (value: any) => {
    setFormData({
      ...formData,
      CPR: value.CPR,
    });
    changeActiveStep(4);
  };

  const validates = (values: any) => {
    const errors: any = {};
    if (!values.CPR) {
      errors.CPR = data?.error;
    } else if(values.CPR.length !== 9){
      errors.CPR = data?.min
    }
    return errors;
  };

  return (
    <Form
      onSubmit={submitForm}
      validate={validates}
      render={(props) => (
        <form id="form3" className="w-full" onSubmit={props.handleSubmit}>
          <Field name="CPR" type="number">
            {({ input, meta }) => (
              <>
                <CustomInput
                  {...input}
                  lang={lang}
                  error={meta.error}
                  label={data?.label}
                  placeholder={data?.inputPlaceholder}
                  labelNumber={4}
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
