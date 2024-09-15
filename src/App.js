import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from "./Components/Home";
import Chat from "./Components/Chat";
import Translator from "./Components/Translator";
import FAQ from "./Components/FAQ";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
