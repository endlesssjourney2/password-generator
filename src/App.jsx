import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import GeneratePage from "./pages/GeneratePage/GeneratePage";
import SavedPage from "./pages/SavedPage/SavedPage";

const App = () => {
  return (
    <div className="App">
      <header className="header">Password Generator 🔐</header>
      <nav className="nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/saved">
          Saved
        </NavLink>
      </nav>
      <Routes>
        <Route path="/password-generator" element={<GeneratePage />} />
        <Route path="/" element={<GeneratePage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
      <footer className="footer">
        endlesssjourney© 2025 Password Generator
      </footer>
    </div>
  );
};

export default App;
