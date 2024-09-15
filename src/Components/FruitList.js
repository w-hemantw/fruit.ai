import React, { useEffect, useState } from "react";
import axios from "axios";

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  // Fetch fruits from backend
  useEffect(() => {
    axios.get("http://localhost:5000/fruits").then((response) => {
      setFruits(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Fruit Chatbot</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fruits.map((fruit) => (
          <div
            key={fruit.id}
            className="bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold mt-4">{fruit.name}</h2>
            <p className="text-gray-600">{fruit.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={() => window.location.href = `/fruit/${fruit.id}`}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitList;
