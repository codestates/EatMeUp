import React from 'react';
import styled from 'styled-components';

import theme from '../../StyledComponent/theme'
const CookInfo = () => {
  return (
    <>
    {/* 요리레벨, 요리시간에 대한 정보 영역 */}
    <CookInfomation>
      
      <div className='cookinfo'><i class="fas fa-clipboard-check"></i> 요리레벨</div>
      <Selector>
        <option>초보환영</option>
        <option>보통</option>
        <option>어려움</option>
      </Selector>
    
 
      <div className='cookinfo'><i class="far fa-clock"></i> 요리시간</div>
      <Selector>
        <option>10Min</option>
        <option>20Min</option>
        <option>30Min</option>
        <option>40Min</option>
        <option>50Min</option>
        <option>60Min</option>
        <option>60Min이상</option>
      </Selector>
   
  </CookInfomation>
      
    </>
  )
}


const CookInfomation = styled.div`
  width: 90%;
  display: flex;
  margin: 10px auto;
  height: 70px;

  .cookinfo {
    margin-left: 10px;
    line-height: 35px;
    color: grey;
  }
`;

const Selector = styled.select`
  width: 200px;
  height: 40px;
  font-size: 15px;
  border-radius: 10px;
  text-indent: 10px;
  margin-left: 10px;
  outline: none;
  border: 2px solid ${theme.colors.lightgrey};
`;
export default CookInfo
