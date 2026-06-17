import { useState } from "react";

import Stepper from "../components/Stepper";

import RolePage from "./RolePage";
import PersonalPage from "./PersonalPage";
import EducationPage from "./EducationPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ReviewPage from "./ReviewPage";
import TemplatePage from "./TemplatePage";
import CertificationsPage from "./CertificationsPage";

export default function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(0);

  const pages = [
    <RolePage />,
    <PersonalPage />,
    <EducationPage />,
    <ProjectsPage />,
    <SkillsPage />,
    <CertificationsPage />,
    <TemplatePage />,
    <ReviewPage />,
  
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          AI ATS Resume Builder
        </h1>

        <Stepper currentStep={currentStep} />

        <div className="mb-8">{pages[currentStep]}</div>

        <div className="flex justify-between">
          <button
            onClick={() =>
              setCurrentStep((prev) => Math.max(prev - 1, 0))
            }
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentStep((prev) =>
                Math.min(prev + 1, pages.length - 1)
              )
            }
            disabled={currentStep === pages.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}