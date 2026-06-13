import { useForm, useFieldArray } from "react-hook-form";
import { useResume } from "../context/ResumeContext";

type Education = {
  degree: string;
  institution: string;
  cgpa: string;
  startYear: string;
  graduationYear: string;
};

type EducationFormData = {
  education: Education[];
};

export default function EducationPage() {
  const { resumeData, updateResumeData } = useResume();

  const { control, register, handleSubmit } =
    useForm<EducationFormData>({
      defaultValues: {
        education:
          resumeData.education.length > 0
            ? resumeData.education
            : [
                {
                  degree: "",
                  institution: "",
                  cgpa: "",
                  startYear: "",
                  graduationYear: "",
                },
              ],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data: EducationFormData) => {
    updateResumeData({
      education: data.education,
    });

    console.log("Education Saved:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mb-6">
        Education
      </h2>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="border rounded p-4 mb-6"
        >
          <h3 className="font-semibold mb-4">
            Education {index + 1}
          </h3>

          <div className="space-y-3">

            <input
              {...register(
                `education.${index}.degree`
              )}
              placeholder="Degree"
              className="w-full border rounded p-2"
            />

            <input
              {...register(
                `education.${index}.institution`
              )}
              placeholder="Institution"
              className="w-full border rounded p-2"
            />

            <input
              {...register(
                `education.${index}.cgpa`
              )}
              placeholder="CGPA / Percentage"
              className="w-full border rounded p-2"
            />

            <input
              {...register(
                `education.${index}.startYear`
              )}
              placeholder="Start Year"
              className="w-full border rounded p-2"
            />

            <input
              {...register(
                `education.${index}.graduationYear`
              )}
              placeholder="Graduation Year"
              className="w-full border rounded p-2"
            />

          </div>

          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={() =>
          append({
            degree: "",
            institution: "",
            cgpa: "",
            startYear: "",
            graduationYear: "",
          })
        }
        className="bg-blue-600 text-white px-4 py-2 rounded mr-4"
      >
        + Add Another Education
      </button>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Education
      </button>
    </form>
  );
}