import classNames from "classnames";
import React from "react";
export default function FieldsLayout({
  activeStep,
  children,
  fieldStepNumber,
}: any) {
  const [section, showSection] = React.useState(false);
  const [sectionPosition, setSectionPosition] = React.useState<
    "up" | "down" | "center"
  >("down");

  React.useEffect(() => {
    if (activeStep == fieldStepNumber) {
      showSection(true);
      setTimeout(() => {
        setSectionPosition("center");
      }, 10);
    } else if (activeStep > fieldStepNumber) {
      setSectionPosition("up");
      setTimeout(() => {
        showSection(false);
      }, 350);
    } else {
      setSectionPosition("down");
      setTimeout(() => {
        showSection(false);
      }, 350);
    }
  }, [activeStep]);

  return (
    <div
      className={classNames(
        "transition-all duration-[600ms] absolute w-full left-1/2 -translate-x-1/2 px-4 h-full flex items-center justify-center",
        {
          "!translate-y-full opacity-0": sectionPosition == "down",
          "!-translate-y-full opacity-0": sectionPosition == "up",
          "-z-50": !section,
        }
      )}
    >
      {children}
    </div>
  );
}
