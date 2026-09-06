import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuidesList from "./pages/admin/guides/GuidesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuidesList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
