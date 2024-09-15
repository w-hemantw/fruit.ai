const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-blue-200 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">About Fruit.AI</h1>
        <p className="text-gray-600 mb-4">
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist.
        </p>
        <button className="bg-black text-white py-3 px-6 rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
