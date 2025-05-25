// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import KioskHome from './KioskHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KioskHome />
  </React.StrictMode>
);

// src/KioskHome.jsx
import React, { useState } from 'react';
import KioskApp from './KioskApp';

const KioskHome = () => {
  const [screen, setScreen] = useState('home');

  return (
    <div className="p-4 text-center">
      {screen === 'home' && (
        <div>
          <h1 className="text-2xl font-bold mb-4">키오스크 학습</h1>
          <button
            onClick={() => setScreen('learning')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            학습하기
          </button>
        </div>
      )}

      {screen === 'learning' && (
        <div>
          <h2 className="text-xl font-semibold mb-4">학습 모드</h2>
          <button
            onClick={() => setScreen('kiosk')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            자율학습
          </button>
        </div>
      )}

      {screen === 'kiosk' && <KioskApp onBack={() => setScreen('home')} />}
    </div>
  );
};

export const KioskApp = KioskApp;

// src/KioskApp.jsx
import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: '아메리카노', price: 3000 },
  { id: 2, name: '카페라떼', price: 3500 },
  { id: 3, name: '녹차라떼', price: 3800 },
];

const KioskApp = ({ onBack }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [paid, setPaid] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePayment = () => {
    setPaid(true);
    setCart([]);
  };

  if (paid) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold mb-4">결제가 완료되었습니다.</h2>
        <button
          onClick={onBack}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          홈으로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">키오스크 자율학습</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => addToCart(item)}
            className="bg-yellow-300 px-4 py-2 rounded"
          >
            {item.name} - {item.price.toLocaleString()}원
          </button>
        ))}
      </div>

      <button
        onClick={() => setShowCart(!showCart)}
        className="bg-gray-400 text-white px-4 py-2 rounded mb-2"
      >
        {showCart ? '장바구니 닫기' : '장바구니 보기'}
      </button>

      {showCart && (
        <div className="border p-2 mb-4">
          <h3 className="font-semibold">장바구니</h3>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - {item.price.toLocaleString()}원</li>
            ))}
          </ul>
          <p className="mt-2 font-bold">총합: {getTotal().toLocaleString()}원</p>
        </div>
      )}

      <button
        onClick={handlePayment}
        className="bg-green-600 text-white px-4 py-2 rounded"
        disabled={cart.length === 0}
      >
        결제하기
      </button>
    </div>
  );
};

export default KioskApp;
