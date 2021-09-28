import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
// import Modal from "./Modal"

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const MyInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
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
                <div className='info1'>
                  username
                  <input placeholder='김코딩' />
                </div>
                <div className='info2'>
                  avatar
                  <input placeholder='kimcoding' />
                </div>
                <div className='info3'>
                  email
                  <input placeholder='kimcoding@eatmeup.me' />
                </div>
              </div>
            </div>
            <div className='btn_container'>
              <EditButton>수정 완료</EditButton>
              <DeleteButton
                onClick={() => {
                  setModal(true);
                }}
              >
                계정 삭제
              </DeleteButton>
              {/* {!!modal ? <Modal /> : null} */}
              {!!modal ? <Modal onClick={() => {setModal(false)}}>&times;</Modal> : null}
            </div>
          </MyInfoContainer>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

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

const MyInfoContainer = styled(SectionBox)`
  width: 77%;
  min-height: 720px;
  .info_container {
    width: 100%;
    height: 485px;
  }
  .profile_container {
    width: 190px;
    height: 190px;
    margin: 0 auto;
    color: ${theme.colors.lightgrey};
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
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: ${theme.colors.gray};
    i {
      &:hover {
        cursor: pointer;
        color: ${theme.colors.black};
      }
    }
  }
  .info_box {
    width: 400px;
    margin: 40px auto;
  }
  .info1 {
    text-align: center;
    margin: 20px 10px;
    font-size: 17px;
    width: 100%;
    height: 50px;
  }
  .info2 {
    text-align: center;
    margin: 20px 24px;
    font-size: 17px;
    width: 100%;
    height: 50px;
  }
  .info3 {
    text-align: center;
    margin: 20px 24px;
    font-size: 17px;
    width: 100%;
    height: 50px;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${theme.colors.lightgrey};
    color: #555;
    box-sizing: border-box;
    font-size: 18px;
    height: 50px;
    width: 250px;
    font-family: "Noto Sans KR";
    margin: 0 30px;
    &:focus {
      outline: none;
      border-bottom: 1px solid ${theme.colors.black};
      transition: all 0.2s ease-in-out;
    }
  }
  .btn_container {
    width: 400px;
    margin: 0 auto;
  }
`;

const EditButton = styled(LargeBtn)`
  width: 180px;
  height: 50px;
  margin: 0 10px;
  background-color: ${theme.colors.yellow};
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  font-family: "Noto Sans KR";
  cursor: pointer;
`;
const DeleteButton = styled(LargeBtn)`
  width: 180px;
  height: 50px;
  margin: 0 10px;
  background-color: white;
  border: 1px solid ${theme.colors.lightgrey};
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  font-family: "Noto Sans KR";
  cursor: pointer;
`;

const Modal = ({onClose}) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }
  return (
    <>
      <ModalOverlay/>
      <ModalWrapper tabIndex='-1'>
        <ModalInner tabIndex='0' className='modal-inner'>
          계정을 삭제하시면 되돌릴 수 없습니다 정말 삭제하시겠습니까?
          <CloseButton>삭제</CloseButton>
          <CloseButton onClose={(e) => close}>취소</CloseButton>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

const CloseButton = styled.button`

`

export default MyInfo;
