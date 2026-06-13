import { useForm } from "react-hook-form";

import { useResume } from "../context/ResumeContext";

type RoleFormData = {
  targetRole: string;
};

export default function RolePage() {
  const { resumeData, updateResumeData } = useResume();

  const { register, handleSubmit } =
    useForm<RoleFormData>({
      defaultValues: {
        targetRole: resumeData.targetRole,
      },
    });

  const onSubmit = (data: RoleFormData) => {
    updateResumeData(data);

    console.log("Updated Resume:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mb-4">
        Target Role
      </h2>

      <label className="block mb-2">
        Which role are you applying for?
      </label>

      <select
        {...register("targetRole")}
        className="w-full border rounded p-2 mb-4"
      >
        <option value="">Select a role</option>

        <option value="Software Engineer">
          Software Engineer
        </option>

        <option value="Data Analyst">
          Data Analyst
        </option>

        <option value="Machine Learning Engineer">
          Machine Learning Engineer
        </option>

        <option value="Frontend Developer">
          Frontend Developer
        </option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Role
      </button>
    </form>
  );
}