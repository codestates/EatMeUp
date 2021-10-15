export const recipeLevel = (level) => {
  if (level === "초보환영") {
    return <i className='bx bxs-star' id='icon'></i>;
  } else if (level === "보통") {
    return (
      <>
        <i className='bx bxs-star' id='icon'></i>
        <i className='bx bxs-star' id='icon'></i>
      </>
    );
  } else if (level === "어려움") {
    return (
      <>
        <i className='bx bxs-star' id='icon'></i>
        <i className='bx bxs-star' id='icon'></i>
        <i className='bx bxs-star' id='icon'></i>
      </>
    );
  } else {
    return <i className='bx bxs-star' id='icon'></i>;
  }
};