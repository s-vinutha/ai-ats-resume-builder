import { createContext, useContext, useState, ReactNode } from "react";

type ResumeData = {
  targetRole: string;

  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

type ResumeContextType = {
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>({
  targetRole: "",

  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
});

  const updateResumeData = (data: Partial<ResumeData>) => {
    setResumeData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <ResumeContext.Provider
      value={{ resumeData, updateResumeData }}
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