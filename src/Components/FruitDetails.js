import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FruitDetails = () => {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/fruits/${id}`).then((response) => {
      setFruit(response.data);
    });
  }, [id]);

  if (!fruit) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={fruit.image}
          alt={fruit.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{fruit.name}</h1>
        <p className="mt-2 text-gray-600">{fruit.description}</p>
        <h2 className="text-2xl font-bold mt-4">Benefits:</h2>
        <p className="mt-2 text-gray-600">{fruit.benefits}</p>
      </div>
    </div>
  );
};

export default FruitDetails;
