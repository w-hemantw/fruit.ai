import React, { useState } from 'react';

// Mock data for fruits
const fruits = [
  { name: 'Apple', details: 'Apples are nutritious. Great for health.' },
  { name: 'Banana', details: 'Bananas are rich in potassium and fiber.' },
  { name: 'Orange', details: 'Oranges are a great source of Vitamin C.' }
];

const ChatComponent = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Fruit List</h2>
      
      {selectedFruit ? (
        <div className="p-6 bg-blue-100 rounded-lg">
          <h3 className="text-xl font-bold">{selectedFruit.name}</h3>
          <p>{selectedFruit.details}</p>
          <button className="mt-4 bg-blue-500 text-white p-2 rounded" onClick={() => setSelectedFruit(null)}>
            Back to List
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {fruits.map((fruit, index) => (
            <div 
              key={index} 
              className="p-4 bg-yellow-100 rounded-lg cursor-pointer"
              onClick={() => setSelectedFruit(fruit)}
            >
              <h3 className="text-lg font-bold">{fruit.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
