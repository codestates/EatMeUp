import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserinfo,
  deleteMyaccount,
  getUserinfo,
  clearErrors,
} from "../../_actions/userActions";
import { logoutRequest } from "../../_actions/authActions";

import { EDIT_USERINFO_RESET } from "../../_types/userTypes";
import axios from "axios";

/* 컴포넌트 */
import Footer from "../Util/Footer";
import Header from "../Util/Header";
import Sidebar from "../Util/Sidebar";
import Loader from "../Util/Loader";

/* 스타일 컴포넌트 */
import { LargeBtn } from "../StyledComponent/buttons";
import { Container, SectionBox } from "../StyledComponent/containers";
import theme from "../StyledComponent/theme";

const { Swal } = window;

const MyInfo = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isEdited, loading, error } = useSelector((state) => state.useraction);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    dispatch(getUserinfo());

    if (isEdited) {
      dispatch({ type: EDIT_USERINFO_RESET });
    }

    if (error) {
      dispatch(clearErrors());
    }
  }, [dispatch, isEdited, error]);

  const userEditHandler = async (e) => {
    e.preventDefault();

    let image = null;

    if (!file) {
      image = null;
    } else {
      const data = await axios.get(`${process.env.REACT_APP_API}/image/s3url`, {
        withCredentials: true,
      });

      //url을 사용해서 S3 버킷에 업로드
      //axios
      const img = await fetch(
        data.data.s3url,
        {
          method: "PUT",
          headers: {
            "Content-Type": "image/jpeg",
          },
          body: file,
        },
        {
          withCredentials: true,
        },
      );

      image = img.url.split("?")[0];
    }

    const data = {
      avatar: image ? image : user.avatar,
      username: name ? name : user.username,
      email: user.email,
    };

    Swal.fire({
      title: "내 정보 수정",
      text: "정보를 수정 하시겠습니까?",
      icon: "success",
      showCancleButton: true,
      confirmButtonColor: "#FEBD2F",
      cancelButtonColor: "#d33",
      confirmButtonText: "수정",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(editUserinfo(data));
      }
    });
  };

  const deleteHandler = (id) => {

    const data = {
      id: id
    }
    Swal.fire({
      title: "내 계정 삭제",
      text: "정보를 삭제 하시겠습니까?",
      icon: "warning",
      showCancleButton: true,
      confirmButtonColor: "#FEBD2F",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMyaccount(data));
        
        setTimeout(() => {
          dispatch(logoutRequest());
          history.push("/");
        }, 1000);
      }
    });
  };

  return (
    <div>
      <Header id={2} />
      <section>
        <Container>
          <Sidebar id={4} />
          {loading ? (
            <Loader />
          ) : (
            <MyInfoContainer>
              <TitleBox>
                <div className='title'>My Info</div>
              </TitleBox>
              <div className='info_container'>
                <div className='profile_container'>
                  {file ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt='avatar'
                      style={{
                        width: "190px",
                        height: "190px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : user.avatar ? (
                    <img
                      src={user.avatar}
                      alt='avatar'
                      style={{
                        width: "190px",
                        height: "190px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <i class='far fa-user-circle fa-10x' id='userimg'></i>
                  )}

                  <div className='profileImg_box'>
                    <label for='userimg'>
                      <i class='fas fa-camera'></i>
                    </label>
                    <input
                      type='file'
                      id='userimg'
                      accept='image/*'
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                </div>
                <div className='info_box'>
                  <div className='username'>
                    username
                    <input
                      type='text'
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder={user.username}
                    />
                  </div>
                  <div className='email'>
                    email
                    <input placeholder={user.email} disabled />
                  </div>
                </div>
              </div>
              <div className='btn_container'>
                <EditButton onClick={userEditHandler}>수정 완료</EditButton>
                <DeleteButton onClick={() => deleteHandler(user.id)}>계정 삭제</DeleteButton>
              </div>
            </MyInfoContainer>
          )}
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
    margin: 50px auto;
  }
  .username {
    text-align: center;
    margin: 20px 10px;
    font-size: 17px;
    width: 100%;
    height: 50px;
  }
  .email {
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
    width: 60%;
    font-family: "Noto Sans KR";
    margin: 0 30px;
    &:focus {
      outline: none;
      border-bottom: 1px solid ${theme.colors.black};
      transition: all 0.2s ease-in-out;
    }
  }

  input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
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

const Modal = ({ onClose }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  return (
    <>
      <ModalOverlay />
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

const CloseButton = styled.button``;

export default MyInfo;
