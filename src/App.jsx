import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Destination from "./pages/admin/destinations/Destination";
import GuildList from "./pages/admin/guides/GuidesList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuildList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
