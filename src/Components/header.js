import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#EBEBEB', marginBottom: '20px', boxShadow: '0 2px 4px #999' }}>
      <div className="container">
        <h3 style={{color: '#5D5D5D', fontWeight: 'regular', marginLeft: "20px"}}>React CRUD System</h3>
      </div>
    </nav>
  );
}

export default Header
