type StepperProps = {
  currentStep: number;
};

const steps = [
  "Role",
  "Personal",
  "Education",
  "Projects",
  "Skills",
  "Review",
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex justify-center gap-4 mb-8 flex-wrap">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`px-4 py-2 rounded-full border ${
            index === currentStep
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}