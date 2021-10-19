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
      id: id,
    };

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
        dispatch(logoutRequest());
        history.push("/");
        setTimeout(() => {
          dispatch(deleteMyaccount(id));
        }, 500);
      }
    });
  };

  return (
    <div>
      <Header id={2} />
      <section>
        <InfoContainer>
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
                    <i className='far fa-user-circle fa-10x' id='userimg'></i>
                  )}

                  <div className='profileImg_box'>
                    <label htmlFor='avatar'>
                      <i className='fas fa-camera'></i>
                    </label>
                    <input
                      type='file'
                      id='avatar'
                      accept='image/*'
                      onChange={(e) => setFile(e.currentTarget.files[0])}
                    />
                  </div>
                </div>
                <div className='info_box'>
                  <div className='username'>
                    username
                    <div className='input_box'>
                      <input
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        placeholder={user.username}
                      />
                    </div>
                  </div>
                  <div className='email'>
                    email
                    <div className='email_box'>
                      <input placeholder={user.email} disabled />
                    </div>
                  </div>
                </div>
              </div>
              <div className='btn_container'>
                <EditButton onClick={userEditHandler}>수정 완료</EditButton>
                <DeleteButton onClick={() => deleteHandler(user.id)}>
                  계정 삭제
                </DeleteButton>
              </div>
            </MyInfoContainer>
          )}
        </InfoContainer>
      </section>
      <Footer />
    </div>
  );
};

const InfoContainer = styled(Container)`
  width: 100%;
  height: 100%;
  padding: 140px 0 70px 0;
  @media screen and (max-width: 1200px) {
    width: 94.7%;
  }
  @media screen and (max-width: 1023px) {
    width: 93%;
  }
  @media screen and (max-width: 768px) {
    padding: 130px 0 70px 0;
    width: 90%;
  }
  @media screen and (max-width: 568px) {
    padding: 110px 0 70px 0;
    width: 85%;
  }
  @media screen and (max-width: 450px) {
    padding: 100px 0 70px 0;
    width: 85%;
  }
  @media screen and (max-width: 375px) {
    padding: 90px 0 70px 0;
    width: 100%;
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
  @media screen and (max-width: 375px) {
    font-size: 25px;
    text-indent: 10px;
  }
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
    font-weight: 500;
    font-size: 17px;
    width: 100%;
  }
  .email {
    text-align: center;
    font-weight: 500;
    font-size: 17px;
    width: 100%;
  }
  .input_box {
    box-sizing: border-box;
    max-width: 100%;
    margin: 0 auto;
    input {
      max-width: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid ${theme.colors.lightgrey};
      text-align: center;
      margin: 10px auto;
      &:focus {
        outline: none;
        border-bottom: 1px solid ${theme.colors.black};
        transition: all 0.2s ease-in-out;
      }
    }
  }
  input {
    background-color: transparent;
    border: none;
    color: #555;
    box-sizing: border-box;
    font-size: 18px;
    height: 50px;
    max-width: 100%;
    text-align: center;
    box-sizing: border-box;
    font-family: "Noto Sans KR";
    margin: 0 30px;
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
  @media screen and (max-width: 575px) {
    .info_box {
      max-width: 260px;
      margin: 50px auto;
    }
    .info_container {
      width: 100%;
      height: 445px;
    }
    .btn_container {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 375px) {
    width: 95%;
    margin: auto;
    .info_box {
      max-width: 260px;
      margin: 50px auto;
    }
    .info_container {
      width: 100%;
      height: 445px;
    }
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
  @media screen and (max-width: 575px) {
    width: 120px;
    height: 45px;
  }
  @media screen and (max-width: 375px) {
    width: 120px;
    height: 45px;
    margin: 0 6px;
  }
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
  @media screen and (max-width: 575px) {
    width: 120px;
    height: 45px;
  }
  @media screen and (max-width: 375px) {
    width: 120px;
    height: 45px;
    margin: 0 6px;
  }
`;

export default MyInfo;
