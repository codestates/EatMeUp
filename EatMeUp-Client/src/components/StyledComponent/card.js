import styled from 'styled-components'

export const RecipeCard = styled.div`
  width:  ${(props) => (props.width ? props.width : "340px")};
  height: 320px;
  margin: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  position: relative;

  .recipe-card-tag {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 80px;
    height: 35px;
    background-color: rgba(229, 229, 229, 0.8);
    border-radius: 30px;
    text-align: center;
    line-height: 35px;
  }

  .recipe-dc-left_box {
    width: 80%;
    margin-left: 10px;
  }

  .recipe-dc-right_box {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 30px;
  }

  .recipe-img_box {
    width: 100%;
    height: 65%;
  }

  .recipe-img_box > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px 25px 0px 0px;
  }

  .recipe-dc_box {
    display: flex;
    justify-content: space-between;
  }

  .recipe-title_box {
    font-size: 20px;
    font-weight: 500;
    font-family: Noto Sans KR;
    text-indent: 20px;
    margin-top: 10px;
  }

  .recipe-ingre_box {
    margin-top: 8px;
  }

  .recipe-ingre-label {
    font-size: 12px;
    text-indent: 20px;
    margin-bottom: 5px;
  }

  .recipe-ingres {
    font-size: 10px;
    margin-left: 12px;
  }

  .recipe-ingres > span {
    padding: 3px 5px 3px 5px;
    margin: 3px;
    border-radius: 20px;
    background-color: #eaeaea;
  }
`;

export const Recipe = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: inline-block;
  background-color: #ffffff;
  width: 100%;
  margin: 0;
  margin-bottom: 30px;

  img {
    width: 95%;
    height: 200px;
    border-radius: 20px;
    object-fit: cover;
    margin: 10px 7px 0px 7px;
  }

  .recipe-info_box {
    display: flex;
    font-size: 12px;
    color: #A9A7A3;
    padding: 5px;
    margin-left: 10px;
    width: 100%;
    justify-content: space-between;
  }

  .fa-clock {
    color: gray;
    font-size: 12px;
  }

  .title_box {
    text-indent: 5px;
    margin-left: 15px;
    font-weight: 500;
  }

  .recipe-ingre_box {
    font-size: 14px;
    display: flex;
    
    margin: 10px 0px 15px 10px;
  }

  .ingre-label {
    text-indent: 10px;
    font-size: 13px;
  }

  .ingres {
    font-size: 11px;
    margin-left: 5px;
  }

  .ingres > span {
    padding: 3px 8px;
    background-color: #EAEAEA;
    border-radius: 30px;
    margin-right:5px;ƒ
  }

  .userprofile_box {
    display: flex;
    width: 95%;
    align-items:center;
   
  }

  #userimg {
    width: 40px;
    height: 40px;
  }

  .username {
    font-size: 12px;
  }
`;
