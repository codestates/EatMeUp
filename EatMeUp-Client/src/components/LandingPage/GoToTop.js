import React from 'react';

function GoToTop() {
  return (
    <i
      className="fas fa-arrow-circle-up fa-3x"
      onClick={() => window.scrollTo(0, 0)}
      style={{cursor: 'pointer', position: 'fixed', right: 20, bottom: 25}}
    ></i>
  );
}

export default GoToTop;