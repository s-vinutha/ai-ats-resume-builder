import { useState } from "react";
import TagInput from "../components/TagInput";
import { useResume } from "../context/ResumeContext";

export default function SkillsPage() {
  const { resumeData, updateResumeData } = useResume();

  const [skills, setSkills] = useState<string[]>(
    resumeData.skills || []
  );

  const handleSave = () => {
    updateResumeData({
      skills,
    });

    console.log("Skills Saved:", skills);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        Skills
      </h2>

      <TagInput
        label="Technical Skills"
        tags={skills}
        onChange={setSkills}
      />

      <button
        onClick={handleSave}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Skills
      </button>
    </div>
  );
}