import { useState } from "react";

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    // Dummy translation logic for demo purposes
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Translator</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg mb-4"
        placeholder="Enter text"
      />

      <button
        onClick={handleTranslate}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Translate
      </button>

      {translatedText && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
          {translatedText}
        </div>
      )}
    </div>
  );
};

export default Translator;
