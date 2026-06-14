import { useResume } from "../context/ResumeContext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "../components/ResumePDF";


export default function ResumePreviewPage() {
  const { resumeData } = useResume();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-10">

        {/* Header */}
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">
            {resumeData.fullName || "Your Name"}
          </h1>

          <div className="mt-2 text-sm space-y-1">
            {resumeData.email && (
              <p>Email: {resumeData.email}</p>
            )}

            {resumeData.phone && (
              <p>Phone: {resumeData.phone}</p>
            )}

            {resumeData.linkedin && (
              <p>LinkedIn: {resumeData.linkedin}</p>
            )}

            {resumeData.github && (
              <p>GitHub: {resumeData.github}</p>
            )}
          </div>
        </header>

        {/* Target Role */}
        {resumeData.targetRole && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b mb-2">
              Target Role
            </h2>

            <p>{resumeData.targetRole}</p>
          </section>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b mb-2">
              Education
            </h2>

            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">
                  {edu.degree}
                </p>

                <p>{edu.institution}</p>

                <p>
                  {edu.startYear} - {edu.graduationYear}
                </p>

                <p>
                  CGPA / Percentage: {edu.cgpa}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {resumeData.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b mb-2">
              Projects
            </h2>

            {resumeData.projects.map((project, index) => (
              <div key={index} className="mb-6">
                <p className="font-semibold">
                  {project.title}
                </p>

                {project.technologies.length > 0 && (
                  <p>
                    <strong>Technologies:</strong>{" "}
                    {project.technologies.join(", ")}
                  </p>
                )}

                {project.description && (
                  <p>{project.description}</p>
                )}

                {project.contribution && (
                  <p>
                    <strong>Contribution:</strong>{" "}
                    {project.contribution}
                  </p>
                )}

                {project.githubLink && (
                  <p>
                    <strong>GitHub:</strong>{" "}
                    {project.githubLink}
                  </p>
                )}

                {project.liveDemoLink && (
                  <p>
                    <strong>Live Demo:</strong>{" "}
                    {project.liveDemoLink}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold border-b mb-2">
              Skills
            </h2>

            <p>
              {resumeData.skills.join(" • ")}
            </p>
          </section>
        )}
      </div>
      <div className="mt-8 flex justify-end">
  <PDFDownloadLink
    document={
      <ResumePDF
        resumeData={resumeData}
      />
    }
    fileName="resume.pdf"
  >
    {({ loading }) => (
      <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
        {loading
          ? "Preparing PDF..."
          : "Download PDF"}
      </button>
    )}
     </PDFDownloadLink>
    </div>
    </div>
  );
}