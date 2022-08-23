import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as PersonPlus } from "../../assets/person-plus.svg";
import { useDispatch } from "react-redux";
import { __postPlusUser } from "../../_redux/modules/friend_info";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 10px 15px;
  font-size: 1.1em;
  font-weight: 550;
  position: relative;
`;

const HeaderIconContainer = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

const TopIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  padding-right: 5px;
  color: rgba(168, 163, 163, 0.8);
  span {
    &:hover {
      color: black;
      cursor: pointer;
    }
  }
`;

// 친구추가 modal 창
const HeaderPlusModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const HeaderPlusModal = styled.div`
  position: absolute;
  width: 300px;
  height: 450px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const HeaderPlusModalCloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  color: rgba(214, 211, 211, 0.7);
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
`;

const HeaderPlusModalSpaneWrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 400;
  color: #bdbaba;
`;

const HeaderPlusBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const HeaderPlusBodyFormContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
`;

const HeaderPlusForm = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  &:focus {
  }
  input {
    width: 100%;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid rgba(168, 163, 163, 0.4);
    padding: 10px;
    &:focus::placeholder {
      opacity: 0;
    }
    &:focus {
      border-bottom: 1px solid black;
    }
  }
`;
// 여기까지

const HeaderInputContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;
  input {
    width: 100%;
    border: none;
    height: 30px;
    background-color: rgba(168, 163, 163, 0.2);
    border-radius: 15px;
    position: absolute;
    padding: 10px 50px;
    &:focus {
      background-color: transparent;
    }
  }
`;

// Icon Box
const IconContainer = styled.div`
  padding: 2px;
  &:hover {
    border-radius: 9999px;
    background-color: rgba(168, 163, 163, 0.1);
  }
`;

// Person Icon
const PersonPlusIcon = styled(PersonPlus)`
  width: 25px;
  height: 25px;
  color: black;
  cursor: pointer;
`;

const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  color: black;
  cursor: pointer;
`;

export const MainHeader = () => {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleModal = () => {
    setModal(!modal);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const plusUserId = () => {
    dispatch(__postPlusUser(userName));
  };

  const handleFormData = (e) => {
    e.preventDefault();
    plusUserId();
  };

  return (
    <>
      <TopIconContainer>
        <span>‒</span>
        <span>ㅁ</span>
        <span>×</span>
      </TopIconContainer>
      <HeaderContainer>
        <span>친구</span>
        <HeaderIconContainer>
          <IconContainer>
            <SearchIcon onClick={handleVisible} />
          </IconContainer>
          <IconContainer>
            <PersonPlusIcon onClick={handleModal} />
            {modal && (
              <>
                <HeaderPlusModalContainer>
                  <HeaderPlusModal>
                    <HeaderPlusModalCloseButton onClick={handleModal}>
                      x
                    </HeaderPlusModalCloseButton>
                    <HeaderPlusModalSpaneWrapper>
                      <span
                        style={{
                          color: "black",
                        }}
                      >
                        친구 추가
                      </span>
                    </HeaderPlusModalSpaneWrapper>
                    <HeaderPlusBodyContainer>
                      <span
                        style={{
                          color: "black",
                          fontSize: "14px",
                          marginLeft: "20px",
                          fontWeight: "400",
                        }}
                      >
                        ID로 추가
                      </span>
                      <hr style={{ width: "100%", opacity: "1" }} />
                      <HeaderPlusBodyFormContainer>
                        <HeaderPlusForm onSubmit={handleFormData}>
                          <input
                            type="text"
                            placeholder="친구 카카오톡 ID"
                            maxLength="20"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "rgba(168, 163, 163, 0.6)",
                            }}
                          >
                            {userName.length}/20
                          </span>
                        </HeaderPlusForm>
                      </HeaderPlusBodyFormContainer>
                      <div
                        style={{
                          display: "flex",
                          padding: "20px",
                          width: "100%",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            color: "rgba(168, 163, 163, 0.6)",
                          }}
                        >
                          카카오톡 ID를 등록하고 검색을 허용한 친구만 찾을 수
                          있습니다.
                        </span>
                      </div>
                    </HeaderPlusBodyContainer>
                  </HeaderPlusModal>
                </HeaderPlusModalContainer>
              </>
            )}
          </IconContainer>
        </HeaderIconContainer>
      </HeaderContainer>
      <HeaderInputContainer
        style={{
          display: visible ? "flex" : "none",
        }}
      >
        <SearchIcon
          style={{
            width: "47px",
            height: "47px",
            padding: "5px 15px",
            color: "rgba(168, 163, 163, 0.5)",
            position: "absolute",
            zIndex: "1",
            cursor: "auto",
          }}
        />
        <input placeholder="이름 검색" />
        <div
          style={{
            right: "0",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: "bold",
            borderLeft: "1px solid rgba(168, 163, 163, 1)",
            paddingRight: "10px",
            color: "rgba(168, 163, 163, 1)",
          }}
        >
          <span style={{ paddingLeft: "5px" }}>통합검색</span>
        </div>
      </HeaderInputContainer>
    </>
  );
};
