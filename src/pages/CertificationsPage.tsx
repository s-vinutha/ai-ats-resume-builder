import { useResume } from "../context/ResumeContext";

export default function CertificationsPage() {
  const { resumeData, updateResumeData } =
    useResume();

  const addCertification = () => {
    updateResumeData({
      certifications: [
        ...resumeData.certifications,
        {
          name: "",
          organization: "",
          issueDate: "",
          credentialUrl: "",
        },
      ],
    });
  };

  const updateCertification = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated =
      [...resumeData.certifications];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    updateResumeData({
      certifications: updated,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Certifications
      </h2>

      {resumeData.certifications.map(
        (cert, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 space-y-3"
          >
            <input
              type="text"
              placeholder="Certification Name"
              value={cert.name}
              onChange={(e) =>
                updateCertification(
                  index,
                  "name",
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
            />

            <input
              type="text"
              placeholder="Organization"
              value={cert.organization}
              onChange={(e) =>
                updateCertification(
                  index,
                  "organization",
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
            />

            <input
              type="date"
              value={cert.issueDate}
              onChange={(e) =>
                updateCertification(
                  index,
                  "issueDate",
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
            />

            <input
              type="text"
              placeholder="Credential URL"
              value={cert.credentialUrl}
              onChange={(e) =>
                updateCertification(
                  index,
                  "credentialUrl",
                  e.target.value
                )
              }
              className="w-full border p-2 rounded"
            />
          </div>
        )
      )}

      <button
        onClick={addCertification}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Certification
      </button>
    </div>
  );
}