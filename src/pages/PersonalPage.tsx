import { useForm } from "react-hook-form";
import { useResume } from "../context/ResumeContext";

type PersonalFormData = {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export default function PersonalPage() {
  const { resumeData, updateResumeData } = useResume();

  const { register, handleSubmit } =
    useForm<PersonalFormData>({
      defaultValues: {
        fullName: resumeData.fullName,
        email: resumeData.email,
        phone: resumeData.phone,
        linkedin: resumeData.linkedin,
        github: resumeData.github,
      },
    });

  const onSubmit = (data: PersonalFormData) => {
    updateResumeData(data);

    console.log("Personal Info Saved:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold mb-6">
        Personal Information
      </h2>

      <div className="space-y-4">

        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="w-full border rounded p-2"
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="w-full border rounded p-2"
        />

        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="w-full border rounded p-2"
        />

        <input
          {...register("linkedin")}
          placeholder="LinkedIn URL (Optional)"
          className="w-full border rounded p-2"
        />

        <input
          {...register("github")}
          placeholder="GitHub URL (Optional)"
          className="w-full border rounded p-2"
        />

      </div>

      <button
        type="submit"
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Personal Information
      </button>
    </form>
  );
}