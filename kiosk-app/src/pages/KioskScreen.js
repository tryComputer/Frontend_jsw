// src/pages/KioskScreen.js
import React from 'react';

const KioskScreen = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6">자율 학습 키오스크 화면</h1>
      <p className="mb-4">여기에 키오스크 시뮬레이션 화면이 들어갑니다.</p>
      <button
        onClick={() => onNavigate('home')}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default KioskScreen;
