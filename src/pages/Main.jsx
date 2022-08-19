import React from "react";
import styled from "styled-components";
import { MainHeader } from "../components/Header";
import Navigation from "../components/Navigation";

const MainContainer = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  box-shadow: 2px 2px 2px 2px #cacaca;
`;

const MainHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainInlineWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d84df;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <Navigation />
        <MainHeaderContainer>
          <MainHeader />
          <MainInlineWrapper>Main</MainInlineWrapper>
        </MainHeaderContainer>
      </MainContainer>
    </>
  );
};

export default Main;
