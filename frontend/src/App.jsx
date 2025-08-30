import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";

const App = () => {
  return (
    <div data-theme="forest">
  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;