import { useForm, useFieldArray } from "react-hook-form";
import { useResume } from "../context/ResumeContext";
import TagInput from "../components/TagInput";

type Project = {
  title: string;
  technologies: string[];
  description: string;
  contribution: string;
  githubLink: string;
  liveDemoLink: string;
};

type ProjectsFormData = {
  projects: Project[];
};

export default function ProjectsPage() {
  const { resumeData, updateResumeData } = useResume();

  const { control, register, handleSubmit, watch, setValue } =
    useForm<ProjectsFormData>({
      defaultValues: {
        projects:
          resumeData.projects.length > 0
            ? resumeData.projects
            : [
                {
                  title: "",
                  technologies: [],
                  description: "",
                  contribution: "",
                  githubLink: "",
                  liveDemoLink: "",
                },
              ],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const projects = watch("projects");

  const onSubmit = (data: ProjectsFormData) => {
    updateResumeData({
      projects: data.projects,
    });

    console.log("Projects Saved:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mb-6">
        Projects
      </h2>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border rounded p-4 mb-6"
        >
          <h3 className="font-semibold mb-4">
            Project {index + 1}
          </h3>

          <div className="space-y-4">

            <input
              {...register(`projects.${index}.title`)}
              placeholder="Project Title"
              className="w-full border rounded p-2"
            />

            <TagInput
              label="Technologies Used"
              tags={projects[index]?.technologies || []}
              onChange={(tags) =>
                setValue(
                  `projects.${index}.technologies`,
                  tags
                )
              }
            />

            <textarea
              {...register(
                `projects.${index}.description`
              )}
              placeholder="Project Description"
              className="w-full border rounded p-2"
            />

            <textarea
              {...register(
                `projects.${index}.contribution`
              )}
              placeholder="Your Contribution"
              className="w-full border rounded p-2"
            />

            <input
              {...register(
                `projects.${index}.githubLink`
              )}
              placeholder="GitHub Link (Optional)"
              className="w-full border rounded p-2"
            />

            <input
              {...register(
                `projects.${index}.liveDemoLink`
              )}
              placeholder="Live Demo Link (Optional)"
              className="w-full border rounded p-2"
            />

          </div>

          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Remove Project
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            title: "",
            technologies: [],
            description: "",
            contribution: "",
            githubLink: "",
            liveDemoLink: "",
          })
        }
        className="bg-blue-600 text-white px-4 py-2 rounded mr-4"
      >
        + Add Another Project
      </button>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Projects
      </button>
    </form>
  );
}