const express = require("express");
const app = express();
const PORT = 5000;

// Sample fruit data
const fruits = [
  {
    id: 1,
    name: "Apple",
    image: "https://example.com/apple.png",
    description: "Apples are nutritious and high in fiber.",
    benefits: "Rich in antioxidants, fiber, and vitamin C.",
  },
  {
    id: 2,
    name: "Banana",
    image: "https://example.com/banana.png",
    description: "Bananas are rich in potassium and vitamins.",
    benefits: "Helps with muscle cramps and digestion.",
  },
  {
    id: 3,
    name: "Mango",
    image: "https://example.com/mango.png",
    description: "Mangoes are tropical fruits high in vitamin C.",
    benefits: "Boosts immunity and improves digestion.",
  },
];

// API to get all fruits
app.get("/fruits", (req, res) => {
  res.json(fruits);
});

// API to get fruit details by id
app.get("/fruits/:id", (req, res) => {
  const fruitId = parseInt(req.params.id);
  const fruit = fruits.find((f) => f.id === fruitId);

  if (fruit) {
    res.json(fruit);
  } else {
    res.status(404).json({ message: "Fruit not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
