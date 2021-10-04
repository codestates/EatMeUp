import React from 'react';

function GoToTop() {
  return (
    <i
      className="fas fa-arrow-circle-up fa-3x"
      onClick={() => window.scrollTo(0, 0)}
    ></i>
  );
}

export default GoToTop;