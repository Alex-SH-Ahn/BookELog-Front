// src/pages/Home/MyPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import ResetPassword from './ResetPassword';
import './MyPage.scss';

const MyPage = () => {
  const [view, setView] = useState('landing'); // landing, login, signup, success, resetPassword
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setView('login');
  };

  const handleSignUpClick = () => {
    setView('signup');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="mypage-container">
      {view === 'landing' && (
        <div className="mypage-content">
          <div className="header">
            <h2>마이페이지</h2>
          </div>
          <p>로그인하고 다양한 서비스를 경험해보세요.</p>
          <button onClick={handleLoginClick}>로그인</button>
          <button onClick={handleSignUpClick}>회원가입</button>
        </div>
      )}

      {view === 'login' && <Login setView={setView} />}
      {view === 'signup' && <SignUp setView={setView} />}
      {view === 'resetPassword' && <ResetPassword setView={setView} />}

      {view === 'success' && (
        <div className="success-message">
          <h2>{`회원가입\n성공!`}</h2>
          <div className="button-group">
            <button onClick={handleLoginClick}>로그인 하러 가기</button>
            <button onClick={handleBackToHome}>홈으로 돌아가기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;



















