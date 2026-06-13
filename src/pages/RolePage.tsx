import { useForm } from "react-hook-form";

type RoleFormData = {
  targetRole: string;
};

export default function RolePage() {
  const { register, handleSubmit } = useForm<RoleFormData>();

  const onSubmit = (data: RoleFormData) => {
    console.log("Role Data:", data);
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