import React, { useState } from 'react';
import Login from './Login';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faThList, faUser, faSearch, fas } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';

export default function NavigationBar() {
  const { isLogin, isAdmin } = useSelector((state) => state.loginReducer);

  const [loginModal, setLoginModal] = useState(false)

  return (
    <div className='navBar-container'>
      <div className='bar'>
        <img alt='logo' src='img/logo.svg' className='home-logo web' onClick={()=>{window.location.replace('/')}}/>
        <img alt='logo' src='img/symbol.svg' className='home-logo mobile' onClick={()=>{window.location.replace('/')}}/>
        <div className='btn-board'>
        <Link
              to='/board'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
          <span  className='web'>메이트 탐색</span>
          <FontAwesomeIcon className='board mobile' icon={faThList} />
          </Link>
        </div>
        <div className='btn-search'>
        <Link
              to='/find-partner'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
          <span className='web'>메이트 모집</span>
          <FontAwesomeIcon className='find-partner mobile' icon={faSearch} />
          </Link>
        </div>
        {isLogin ? (
          <>
            <div className='btn-mypage'>
            <Link
              to='/mypage'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <span className='web'>마이페이지</span>
              <FontAwesomeIcon className='mypage mobile' icon={faUser} />
              </Link>
            </div>
            <div className='btn-logout'>
              <span onClick={()=>{setLoginModal(true)}}>로그아웃</span>
            </div>
          </>
        ) : (
          <>
            <div className='btn-login-nav'>
              <span onClick={()=>{setLoginModal(true)}}>로그인</span>
            </div>
            <div className='btn-signup'>
            <Link
              to='/signup'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <span>회원가입</span>
              </Link>
            </div>
          </>
        )}
        {isAdmin&&isLogin ? (
          <div className='btn-admin'>
            <Link
              to='/admin'
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <FontAwesomeIcon icon={faCog} />
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
      {loginModal ? <Login setModal={setLoginModal}/> : ''}
    </div>
  );
}
