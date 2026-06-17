type ResumeData = {
  targetRole: string;

  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;

  education: unknown[];
  projects: {
    technologies: string[];
  }[];

  skills: string[];
};

export function calculateATSScore(
  resumeData: ResumeData
) {
  let score = 0;

  const suggestions: string[] = [];

  if (resumeData.targetRole) {
    score += 10;
  } else {
    suggestions.push(
      "Specify a target role."
    );
  }

  if (resumeData.fullName) score += 5;
  else suggestions.push("Add your full name.");

  if (resumeData.email) score += 5;
  else suggestions.push("Add an email address.");

  if (resumeData.phone) score += 5;
  else suggestions.push("Add a phone number.");

  if (resumeData.education.length > 0) {
    score += 15;
  } else {
    suggestions.push(
      "Include education details."
    );
  }

  if (resumeData.projects.length > 0) {
    score += 20;
  } else {
    suggestions.push(
      "Add at least one project."
    );
  }

  const hasTechnologies =
    resumeData.projects.some(
      (project) =>
        project.technologies.length > 0
    );

  if (hasTechnologies) {
    score += 10;
  } else {
    suggestions.push(
      "Mention technologies used in projects."
    );
  }

  if (resumeData.skills.length >= 5) {
    score += 15;
  } else {
    suggestions.push(
      "Add at least 5 relevant skills."
    );
  }

  if (resumeData.linkedin) {
    score += 5;
  } else {
    suggestions.push(
      "Include your LinkedIn profile."
    );
  }

  if (resumeData.github) {
    score += 10;
  } else {
    suggestions.push(
      "Include your GitHub profile."
    );
  }

  return {
    score,
    suggestions,
  };
}