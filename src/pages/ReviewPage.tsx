import { useResume } from "../context/ResumeContext";
import { useNavigate } from "react-router-dom";

export default function ReviewPage() {
  const { resumeData } = useResume();
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">
        Review Your Resume Information
      </h2>

      {/* Role */}
      <section className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-2">
          Target Role
        </h3>

        <p>
          {resumeData.targetRole || "Not provided"}
        </p>
      </section>

      {/* Personal Information */}
      <section className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          Personal Information
        </h3>

        <div className="space-y-2">
          <p>
            <strong>Full Name:</strong>{" "}
            {resumeData.fullName || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {resumeData.email || "Not provided"}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {resumeData.phone || "Not provided"}
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            {resumeData.linkedin || "Not provided"}
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            {resumeData.github || "Not provided"}
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          Education
        </h3>

        {resumeData.education.length > 0 ? (
          <div className="space-y-4">
            {resumeData.education.map(
              (edu, index) => (
                <div
                  key={index}
                  className="border rounded p-3"
                >
                  <p>
                    <strong>Degree:</strong>{" "}
                    {edu.degree}
                  </p>

                  <p>
                    <strong>Institution:</strong>{" "}
                    {edu.institution}
                  </p>

                  <p>
                    <strong>CGPA / Percentage:</strong>{" "}
                    {edu.cgpa}
                  </p>

                  <p>
                    <strong>Duration:</strong>{" "}
                    {edu.startYear} -{" "}
                    {edu.graduationYear}
                  </p>
                </div>
              )
            )}
          </div>
        ) : (
          <p>No education added.</p>
        )}
      </section>

      {/* Projects */}
      <section className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          Projects
        </h3>

        {resumeData.projects.length > 0 ? (
          <div className="space-y-4">
            {resumeData.projects.map(
              (project, index) => (
                <div
                  key={index}
                  className="border rounded p-3"
                >
                  <p>
                    <strong>Title:</strong>{" "}
                    {project.title}
                  </p>

                  <p>
                    <strong>
                      Technologies:
                    </strong>{" "}
                    {project.technologies.join(
                      ", "
                    )}
                  </p>

                  <p>
                    <strong>
                      Description:
                    </strong>{" "}
                    {project.description}
                  </p>

                  <p>
                    <strong>
                      Contribution:
                    </strong>{" "}
                    {project.contribution}
                  </p>

                  {project.githubLink && (
                    <p>
                      <strong>GitHub:</strong>{" "}
                      {project.githubLink}
                    </p>
                  )}

                  {project.liveDemoLink && (
                    <p>
                      <strong>
                        Live Demo:
                      </strong>{" "}
                      {project.liveDemoLink}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        ) : (
          <p>No projects added.</p>
        )}
      </section>

      {/* Skills */}
      <section className="border rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">
          Skills
        </h3>

        {resumeData.skills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        ) : (
          <p>No skills added.</p>
        )}
      </section>

    <div className="flex justify-end">
      <button
      onClick={() => navigate("/preview")}
      className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        Generate Resume Preview
       </button>
    </div>
    <section className="border rounded-lg p-4">
  <h3 className="text-xl font-semibold mb-2">
    Selected Template
  </h3>

  <p>{resumeData.selectedTemplate}</p>
</section>
  </div>
    
  );
  
}