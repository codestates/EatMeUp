import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const MyInfo = () => {
  const dropHandler = () => {};

  return (
    <div>
      <Header id={2} />
      <section>
        <Container>
          <Sidebar id={4} />
          <MyInfoContainer>
            <TitleBox>
              <div className='title'>My Info</div>
            </TitleBox>
            <div className='info_container'>
              <div className='profile_container'>
                <i class='far fa-user-circle fa-10x' id='userimg'></i>
                <Dropzone
                  onDrop={dropHandler}
                  multiple={false}
                  maxSize={800000000}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div className='profileImg_box' {...getRootProps()}>
                      <input {...getInputProps()} />
                      <i class='fas fa-camera'></i>
                    </div>
                  )}
                </Dropzone>
              </div>
              <div className='info_box'>
                <div className='info'>username</div>
                <Wrapper>
                  <input placeholder='김코딩' />
                  <span className='underline'></span>
                </Wrapper>
              </div>
            </div>
          </MyInfoContainer>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

const MyInfoContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;
  .info_container {
    width: 100%;
    height: 50%;
    display: flex;
  }
  .profile_container {
    width: 190px;
    height: 190px;
    margin: 30px 60px;
    /* border: 2px solid ${theme.colors.lightgrey}; */
    color: ${theme.colors.lightgrey};
    /* border-radius: 100%; */
    display: flex;
    position: relative;
    #userimg {
      margin: auto;
      color: ${theme.colors.lightgrey};
    }
  }
  .profileImg_box {
    width: 30%;
    height: 30%;
    border-radius: 30px;
    /* border: 2px solid ${theme.colors.lightgrey}; */
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${theme.colors.gray};
    cursor: pointer;
  }
  .info_box {
    display: float;
    width: 80%;
  }
  .info {
    display: flex;
    margin: 40px;
    font-size: 17px;
    width: 100px;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid ${theme.colors.yellow};
  border-radius: 2px; */
  /* box-sizing: border-box; */
  width: 400px;
  height: 50px;
  margin: 32px;
  /* left: 50%; */
  /* margin: -150px 0 0 -150px; */
  /* position: absolute; */
  /* top: 50%; */
  input {
    background-color: transparent;
    border: none;
    color: #555;
    box-sizing: border-box;
    font-family: "Arvo";
    font-size: 18px;
    /* height: 50px; */
    /* left: 50%; */
    padding: 10px 0px;
    position: relative;
    /* top: 50%; */
    width: 200px;
    &:focus {
      outline: none;
    }
  }
  .underline {
    background-color: ${theme.colors.black};
    /* display: inline-block; */
    height: 2px;
    width: 400px;
    margin: 40px auto;
    left: 810px;
    position: absolute;
    /* top: 185px; */
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  input {
    -webkit-input-placeholder {
      color: #aaa;
    }
    :focus::-webkit-input-placeholder {
      color: ${theme.colors.black};
    }
    :focus + .underline {
      transform: scale(1);
    }
  }
`;

const TitleBox = styled.div`
  width: 100%;
  height: 90px;
  font-weight: bold;
  font-size: 30px;
  text-indent: 30px;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
  margin: 5px 20px 10px 20px;
  padding: 10px;
`;

export default MyInfo;
