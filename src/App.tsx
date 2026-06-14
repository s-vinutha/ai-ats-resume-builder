import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreviewPage from "./pages/ResumePreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumeBuilder />} />

        <Route
          path="/preview"
          element={<ResumePreviewPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;