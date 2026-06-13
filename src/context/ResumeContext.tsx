import { createContext, useContext, useState, ReactNode } from "react";

type ResumeData = {
  targetRole: string;
};

type ResumeContextType = {
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>({
    targetRole: "",
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