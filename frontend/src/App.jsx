import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";
import toast from "react-hot-toast"

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;