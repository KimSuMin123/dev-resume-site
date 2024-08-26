import React from 'react';

const EducationExperience = () => {
  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>학력</h2>
        <div style={educationItemStyle}>
          <p style={dateStyle}>2024.03 ~ 재학중</p>
          <h3 style={subHeadingStyle}>대림대학교(4년제)</h3>
          <p style={detailStyle}>컴퓨터 소프트웨어 학과</p>
          <p style={detailStyle}>주/야간: 야간</p>
        </div>
        <div style={educationItemStyle}>
          <p style={dateStyle}>졸업(2021~2024)</p>
          <h3 style={subHeadingStyle}>대림대학교(2·3년제)</h3>
          <p style={detailStyle}>컴퓨터정보학부</p>
          <p style={detailStyle}>주/야간: 주간</p>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>경력</h2>
        <p style={experienceSummaryStyle}>총 5개월</p>
        <div style={experienceItemStyle}>
          <p style={dateStyle}>2022.12 ~ 2023.02 (3개월)</p>
          <h3 style={subHeadingStyle}>(주)필드유 - 인턴</h3>
          <p style={detailStyle}>Vue.js를 이용한 프론트엔드 개발 업무</p>
        </div>
        <div style={experienceItemStyle}>
          <p style={dateStyle}>2022.07 ~ 2022.08 (2개월)</p>
          <h3 style={subHeadingStyle}>(주)알라딘시스템 - 인턴</h3>
          <p style={detailStyle}>웹 개발에 기본이 되는 전반적인 보조 업무</p>
        </div>
      </section>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '40px 20px',
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  lineHeight: '1.8',
  backgroundColor: '#f9f9f9',
  color: '#333',
};

const sectionStyle = {
  marginBottom: '40px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  borderBottom: '2px solid #007BFF',
  paddingBottom: '10px',
  marginBottom: '20px',
  fontSize: '24px',
  color: '#333',
  fontWeight: 'bold',
};

const subHeadingStyle = {
  fontSize: '20px',
  margin: '10px 0',
  fontWeight: 'bold',
  color: '#007BFF',
};

const educationItemStyle = {
  marginBottom: '20px',
  padding: '10px 0',
};

const experienceSummaryStyle = {
  color: '#007BFF',
  fontWeight: 'bold',
  marginBottom: '20px',
  fontSize: '18px',
};

const experienceItemStyle = {
  marginBottom: '20px',
  padding: '10px 0',
};

const dateStyle = {
  fontSize: '16px',
  color: '#666',
};

const detailStyle = {
  fontSize: '16px',
  color: '#555',
};

export default EducationExperience;
