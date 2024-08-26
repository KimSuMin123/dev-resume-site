import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}><a href="#home" style={navLinkStyle}>Home</a></li>
        <li style={navItemStyle}><a href="#skills" style={navLinkStyle}>Skills</a></li>
        <li style={navItemStyle}><a href="#education" style={navLinkStyle}>Education</a></li>
        <li style={navItemStyle}><a href="#experience" style={navLinkStyle}>Experience</a></li>
        <li style={navItemStyle}><a href="#contact" style={navLinkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
};

const navbarStyle = {
  width: '100%',
  backgroundColor: '#333',  // 다크 그레이 배경색
  padding: '10px 0',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const navItemStyle = {
  margin: '0 15px',
};

const navLinkStyle = {
  color: '#fff',  // 흰색 텍스트
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

export default Navbar;
