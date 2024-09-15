import React, { useState } from "react";

const fruits = [
  { name: "Apple", details: "Apples are rich in fiber and vitamins." },
  { name: "Banana", details: "Bananas are a great source of potassium." },
  { name: "Mango", details: "Mangoes are full of vitamin C." },
];

const Chat = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Fruit Chatbot</h1>
      
      {selectedFruit ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-2xl font-bold">{selectedFruit.name}</h2>
          <p className="text-gray-600">{selectedFruit.details}</p>
          <button
            onClick={() => setSelectedFruit(null)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Back to List
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {fruits.map((fruit, index) => (
            <button
              key={index}
              onClick={() => setSelectedFruit(fruit)}
              className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100"
            >
              {fruit.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
