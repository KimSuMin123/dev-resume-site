import React from 'react';

const skills = [
  '웹개발','프론트엔드', 'Node.js', 'React.jS', 'Vue.js', 'TypeScript', 'JavaScript', 'Bootstrap'
];

const Skill = () => {
  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>나의 스킬</h3>
      <div style={skillsContainerStyle}>
        {skills.map((skill, index) => (
          <span key={index} style={skillBadgeStyle}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '24px',
};

const skillsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBottom: '20px',
};

const skillBadgeStyle = {
  backgroundColor: 'white',
  border: '1px solid #b0c4de',
  borderRadius: '20px',
  padding: '8px 16px',
  margin: '5px',
  fontSize: '16px',
};

export default Skill;
