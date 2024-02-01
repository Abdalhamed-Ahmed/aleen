export default function ProgressBar({ activeStep, lang }: any) {
  return (
    <div className="relative w-full h-1 bg-[rgba(149,200,224,0.4)] overflow-hidden">
      <span
        className="absolute top-0 left-0 h-full transition-all duration-[600ms] bg-primary w-full z-10"
        style={{
          transform:
            lang == "en"
              ? `translateX(${-100 + activeStep * (100 / 12)}%)`
              : `translateX(${100 - activeStep * (100 / 12)}%)`,
        }}
      ></span>
    </div>
  );
}
