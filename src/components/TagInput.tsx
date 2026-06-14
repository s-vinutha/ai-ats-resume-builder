import { useState } from "react";

type TagInputProps = {
  label: string;
  tags: string[];
  onChange: (tags: string[]) => void;
};

export default function TagInput({
  label,
  tags,
  onChange,
}: TagInputProps) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const trimmed = input.trim();

    if (!trimmed) return;

    if (tags.includes(trimmed)) {
      alert("Technology already added.");
      return;
    }

    onChange([...tags, trimmed]);
    setInput("");
  };

  const removeTag = (tagToRemove: string) => {
    onChange(
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Enter technology"
          className="flex-1 border rounded p-2"
        />

        <button
          type="button"
          onClick={addTag}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="bg-gray-200 px-3 py-1 rounded-full flex items-center gap-2"
          >
            <span>{tag}</span>

            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-red-600 font-bold"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}