import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Education = {
  degree: string;
  institution: string;
  cgpa: string;
  startYear: string;
  graduationYear: string;
};

type Project = {
  title: string;
  technologies: string[];
  description: string;
  contribution: string;
  githubLink: string;
  liveDemoLink: string;
};

type Certification = {
  name: string;
  organization: string;
  issueDate: string;
  credentialUrl: string;
};

type ResumeData = {
  targetRole: string;

  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;

  education: Education[];
  projects: Project[];
  skills: string[];
  certifications: Certification[];
  selectedTemplate: string;
};

type ResumeContextType = {
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
};

const ResumeContext = createContext<
  ResumeContextType | undefined
>(undefined);

const initialResumeData: ResumeData = {
  targetRole: "",

  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",

  education: [],
  projects: [],
  skills: [],
  selectedTemplate: "classic",
  certifications: [],
};

export function ResumeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [resumeData, setResumeData] =
    useState<ResumeData>(() => {
      const savedData =
        localStorage.getItem("resumeData");

      if (savedData) {
        try {
          return {
            ...initialResumeData,
            ...JSON.parse(savedData),
          };
        } catch (error) {
          console.error(
            "Failed to parse saved resume data:",
            error
          );

          return initialResumeData;
        }
      }

      return initialResumeData;
    });

  const updateResumeData = (
    data: Partial<ResumeData>
  ) => {
    setResumeData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  useEffect(() => {
    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );
  }, [resumeData]);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);

  if (!context) {
    throw new Error(
      "useResume must be used inside ResumeProvider"
    );
  }

  return context;
}