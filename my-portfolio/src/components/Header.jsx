import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Developer's Name</h1>
      {/* Navigation component will be added here */}
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

export default Header;