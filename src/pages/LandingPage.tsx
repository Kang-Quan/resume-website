import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="bg-background text-white h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gold mb-4">Hi !=, I am Kang Quan</h1>
      <p className="text-xl text-gray-400 mb-6">
        Developer | Creator | Innovator
      </p>
      <button className="px-6 py-3 bg-blue-500 text-black font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
        Explore My Work
      </button>
    </section>
  );
};

export default Home;
