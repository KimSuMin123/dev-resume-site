import React from 'react';
import code from "../img/code.png";
import ieum from "../img/ieum.png";

const ExperienceActivities = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>경험 / 활동 / 교육</h2>
      
      {/* Awards Section */}
      <section style={sectionStyle}>
        <h3 style={subHeadingStyle}>수상 내역 및 봉사 활동</h3>
        <ul style={listStyle}>
          <li>대림대 테크 페어 장려상 (2022년)</li>
         
          <li>안양시 인재육성제단 IT 장학금 수상 (2022년)</li>
          <li>안양시 건강가정 다문화 가족 우수 자원 봉사자 표창장 수상 (2022년)</li>
          <li>안양시 진로 페스티벌 부스 운영 (중, 고등학생 코딩 교육) 6회 (2022년-2023년)</li>
          <li>교내 봉사상 수상 (2023년)</li>
   <li>대림대 해커톤 입상 (2024년)</li>
          <li>교내 성적 장학금 4회 수상(2021년~2023년)</li>
        </ul>
      </section>

      {/* School Activities Section */}
      <section style={sectionStyle}>
        <h3 style={subHeadingStyle}>교내 활동 및 구름톤 트레이닝</h3>
        
        <div style={projectsContainerStyle}>
          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>학과 학생회</h4>
            <p style={dateStyle}>2021.03 ~ 2022.12</p>
            <p>기획부, 총무부장, 부학생회장, 학생회장 활동</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>반대표</h4>
            <p style={dateStyle}>2021.09 ~ 2022.07</p>
            <p>학교 반대표 활동</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>COMMON 전공동아리활동</h4>
            <p style={dateStyle}>2021.02 ~ 2023.12</p>
            <p>2022.03 ~ 2022.07 전공 동아리 부장 활동</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>자바 튜터링</h4>
            <p style={dateStyle}>2022.03 ~ 2022.08</p>
            <p>자바 튜터로 활동</p>
          </div>

          

          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>구름톤 트레이닝 알고리즘 스터디</h4>
            <p style={dateStyle}>2024.02 ~ 2024.04</p>
            <p>자바를 이용한 알고리즘 스터디</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>구름톤 트레이닝 스프링 스터디</h4>
            <p style={dateStyle}>2024.04 ~ 2024.06</p>
            <p>스프링 기초 공부를 위한 스터디</p>
          </div>
          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>구름톤 트레이닝 수료</h4>
            <p style={dateStyle}>2024.02 ~ 2024.08</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section style={sectionStyle}>
        <h3 style={subHeadingStyle}>프로젝트</h3>

        <div style={projectsContainerStyle}>
          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>2021년 앱 제작 활동 참여</h4>
            <p style={dateStyle}>2021.05 ~ 2021.10</p>
            <p>대림대 지도 앱 개발 - 데이터 관리 및 디자인 업무</p>
          </div>

          <div style={activityItemStyle}>
            <h4 style={activityTitleStyle}>2022년 대림대 해커톤</h4>
            <p style={dateStyle}>2022.04 ~ 2022.07</p>
            <p>동아리 통합 사이트 개발 - React를 이용하여 프론트 엔드 개발</p>
          </div>
        </div>

        <div style={projectsContainerStyle}>
          <div style={activityItemStyle}>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/YubAbuHyKdQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={iframeStyle}
            ></iframe>
            <h4 style={activityTitleStyle}>2022년 대림대 테크 페어 장려상</h4>
            <p style={dateStyle}>2022.08 ~ 2022.11</p>
            <p>MBTI 동아리 추천 사이트 개발 - Android Studio 프론트 엔드 개발</p>
          </div>

          <div style={activityItemStyle}>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/S62rpAE_94I" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={iframeStyle}
            ></iframe>
            <h4 style={activityTitleStyle}>2023년 대림대 해커톤</h4>
            <p style={dateStyle}>2023.04 ~ 2023.07</p>
            <p>랜덤 칵테일 추천 - React 프론트 엔드 개발</p>
          </div>
        </div>

        <div style={projectsContainerStyle}>
          <div style={activityItemStyle}>
            <a href="https://www.canva.com/design/DAGJLifg0YI/0ruL7Qk2npEBFaPbBG6IEA/edit?utm_content=DAGJLifg0YI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">
              <img src={code} alt="Coding Game Project" style={imageStyle} />
            </a>
            <a href="https://www.canva.com/design/DAGJLifg0YI/0ruL7Qk2npEBFaPbBG6IEA/edit?utm_content=DAGJLifg0YI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" style={linkStyle}>프로젝트 소개서</a>
           <br></br> 
            <a href="https://www.codeadventure.shop/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Project Link</a>

            <h4 style={activityTitleStyle}>2024년 대림대 해커톤 입상</h4>
            <p style={dateStyle}>2024.04 ~ 2024.07</p>
            <p>코린이들을 위한 코딩 게임 개발 - React 프론트 엔드 개발, Node 백엔드 개발</p>
          </div>

          <div style={activityItemStyle}>
            <a href="https://www.miricanvas.com/ko/v/13j287h" target="_blank" rel="noopener noreferrer">
              <img src={ieum} alt="Coding Game Project" style={imageStyle} />
            </a>
            <a href="https://www.miricanvas.com/ko/v/13j287h" target="_blank" rel="noopener noreferrer" style={linkStyle}>프로젝트 소개서</a>
            <h4 style={activityTitleStyle}>2024년 구름톤 트레이닝 프로젝트</h4>
            <p style={dateStyle}>2024.05~ 2024.08</p>
            <p>친구와 함께 여행 계획 웹 - React 프론트 엔드 개발</p>
          </div>
        </div>

      </section>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '40px 0px',  // Removed horizontal padding to eliminate side white space
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
  backgroundColor: '#f9f9f9',
  maxWidth: '100%',  // Set to 100% to take up the full width
  margin: '0 auto',  // Center the container
};

const headingStyle = {
  fontSize: '32px',
  marginBottom: '40px',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
};

const listStyle = {
  paddingLeft: '0px',  // Removed the left padding for the list
  listStyleType: 'none',  // Removed bullet points
  marginBottom: '20px',
};

const sectionStyle = {
  marginBottom: '40px',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const subHeadingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
  fontWeight: 'bold',
  color: '#007BFF',
};

const projectsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '40px',
};

const activityItemStyle = {
  flex: '1 1 calc(33.33% - 20px)', // Each item will take one-third of the width minus the gap
  marginBottom: '30px',
};

const activityTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
};

const dateStyle = {
  fontSize: '16px',
  color: '#666',
  marginBottom: '10px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  marginTop: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const iframeStyle = {
  marginTop: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  display: 'inline-block',
  marginTop: '10px',
  color: '#007BFF',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default ExperienceActivities;
