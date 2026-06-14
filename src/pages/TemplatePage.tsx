import { useResume } from "../context/ResumeContext";

export default function TemplatePage() {
  const { resumeData, updateResumeData } = useResume();

  const templates = [
    {
      id: "classic",
      name: "Classic ATS",
      description:
        "Simple and highly ATS-friendly layout.",
    },
    {
      id: "modern",
      name: "Modern ATS",
      description:
        "A cleaner design while maintaining ATS compatibility.",
    },
    {
      id: "compact",
      name: "Compact ATS",
      description:
        "Fits more content into a concise format.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Choose a Resume Template
      </h2>

      <div className="grid gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() =>
              updateResumeData({
                selectedTemplate: template.id,
              })
            }
            className={`border rounded-lg p-4 cursor-pointer transition
              ${
                resumeData.selectedTemplate === template.id
                  ? "border-blue-600 bg-blue-50"
                  : "hover:border-gray-400"
              }`}
          >
            <h3 className="font-semibold text-lg">
              {template.name}
            </h3>

            <p className="text-gray-600">
              {template.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}