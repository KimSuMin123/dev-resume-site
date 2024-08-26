import React from 'react';
import pic from '../img/pic.jpg';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <img
            src={pic}
            alt="김수민 프로필"
            style={imageStyle}
          />
        </div>
        <div style={infoStyle}>
          <h1 style={nameStyle}>김수민 | Portfolio</h1>
          <p style={descriptionStyle}>
            👋 학습에서 즐거움을 찾는 개발자, 김수민입니다.
            <br />
            다양한 학습 환경을 만드는 것을 좋아하며 성장하는 습관을 만들어 가고 있습니다.
          </p>
          <div style={contactContainerStyle}>
            <p>
              ✉️ <a href="mailto:tntn211@naver.com" style={linkStyle}>tntn211@naver.com</a>
            </p>
            <p>
              📱 <a href="tel:010-8028-7565" style={linkStyle}>010-8028-7565</a>
            </p>
          </div>
          <div style={linksContainerStyle}>
            <p>
              🐙 <a href="https://github.com/KimSuMin123" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
            </p>
            <p>
              📝 <a href="https://tnrn211.tistory.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>블로그</a>
            </p>
            <p>
              📍 주소: (14243) 경기 광명시 디지털로 64
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  padding: '40px 20px',
  backgroundColor: '#f9f9f9',  // 밝고 깨끗한 느낌의 배경색
  textAlign: 'center',  // 중앙 정렬
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',  // 세로 정렬
  alignItems: 'center',
};

const imageContainerStyle = {
  marginBottom: '20px',
};

const imageStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',  // 원형 이미지
  objectFit: 'cover',
  border: '2px solid #ddd',  // 살짝의 테두리 추가
};

const infoStyle = {
  textAlign: 'center',
  maxWidth: '600px',
};

const nameStyle = {
  margin: '0',
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#333',  // 다크 그레이 텍스트
};

const descriptionStyle = {
  fontSize: '16px',
  color: '#555',  // 중간 밝기의 그레이 텍스트
  margin: '20px 0',
};

const contactContainerStyle = {
  marginTop: '20px',
  fontSize: '16px',
  color: '#777',  // 약간 연한 그레이
};

const linksContainerStyle = {
  marginTop: '20px',
  fontSize: '16px',
  color: '#777',
};

const linkStyle = {
  color: '#007bff',  // 파란색 링크
  textDecoration: 'none',
};

export default Header;
