import { useNavigate } from "react-router-dom";

const Home= () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 p-8 bg-white rounded-lg shadow-lg">
        <button
          onClick={() => navigate("/chat")}
          className="bg-yellow-400 text-white py-4 px-8 rounded-lg shadow-md hover:bg-yellow-500"
        >
          Chat
        </button>
        <button
          onClick={() => navigate("/translator")}
          className="bg-green-400 text-white py-4 px-8 rounded-lg shadow-md hover:bg-green-500"
        >
          Translator
        </button>
        <button
          onClick={() => navigate("/faq")}
          className="bg-blue-400 text-white py-4 px-8 rounded-lg shadow-md hover:bg-blue-500"
        >
          FAQ
        </button>
        <button
          onClick={() => navigate("/about")}
          className="bg-pink-400 text-white py-4 px-8 rounded-lg shadow-md hover:bg-pink-500"
        >
          About
        </button>
      </div>
    </div>
  );
};

export default Home;
