// src/pages/Home.js
import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
      <h1 className="text-4xl font-bold mb-8">키오스크 학습 서비스</h1>
      <button
        onClick={() => onNavigate('learning')}
        className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600"
      >
        학습하기
      </button>
    </div>
  );
};

export default Home;
