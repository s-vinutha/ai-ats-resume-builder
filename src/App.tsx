import { useState } from "react";
import TagInput from "./components/TagInput";

function App() {
  const [technologies, setTechnologies] =
    useState<string[]>([]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          TagInput Test
        </h1>

        <TagInput
          label="Technologies Used"
          tags={technologies}
          onChange={setTechnologies}
        />

        <div className="mt-8">
          <h2 className="font-semibold mb-2">
            Stored Data:
          </h2>

          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(
              technologies,
              null,
              2
            )}
          </pre>
        </div>

      </div>
    </div>
  );
}

export default App;