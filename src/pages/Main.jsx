import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/ui/Header";
import useIsLogin from "../hooks/useIsLogin";

const Main = () => {
  const isLogin = useIsLogin();

  return (
    <Wrapper>
      <Header />
      <StMainDiv>
        <StTitle>
          Discover and share the
          <br />
          world’s best photos
        </StTitle>
        <StDesc>
          Get inspired with incredible photos from diverse styles and genres
          around
          <br />
          the world. We're not guided by fads—just great photography.
        </StDesc>
        {isLogin ? null : (
          <Link to="/signup">
            <StButton>Sign up</StButton>
          </Link>
        )}
      </StMainDiv>
    </Wrapper>
  );
};

export default Main;

const StMainDiv = styled.div`
  background-color: #d10015;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StTitle = styled.div`
  font-family: "helveticaneue";
  font-size: 48px;
  line-height: 48px;
  font-weight: 900;
  color: white;
  margin-left: 4rem;
  margin-bottom: 1rem;
`;

const StDesc = styled.div`
  font-family: "helveticaneue";
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: white;
  margin-left: 4rem;
`;

const StButton = styled.button`
  margin-top: 1rem;
  font-family: "helveticaneue";
  font-weight: 900;
  line-height: 64px;
  margin-left: 4rem;
  padding: 0px 32px;
  width: 256px;
  font-size: 24px;
  color: rgb(34, 34, 34);
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 100px;
  &:hover {
    background-color: #d7d8db;
    cursor: pointer;
  }
`;
