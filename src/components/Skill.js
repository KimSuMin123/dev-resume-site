import React from 'react';

const skillsWell = [
  '웹개발', '프론트엔드', 'Node.js', 'React.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap'
];

const skillsCan = [
  'Java', 'Spring', 'Python'
];

const Skill = () => {
  return (
    <div style={containerStyle}>
      <h3 style={headingStyle}>나의 스킬</h3>
      
      <h4 style={subHeadingStyle}>잘해요</h4>
      <div style={skillsContainerStyle}>
        {skillsWell.map((skill, index) => (
          <span key={index} style={skillBadgeStyle}>{skill}</span>
        ))}
      </div>
      
      <h4 style={subHeadingStyle}>할 수 있어요</h4>
      <div style={skillsContainerStyle}>
        {skillsCan.map((skill, index) => (
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

const subHeadingStyle = {
  marginBottom: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
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
