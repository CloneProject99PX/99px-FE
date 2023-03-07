import { Link } from "react-router-dom";
import styled from "styled-components";
import useIsLogin from "../../hooks/useIsLogin";
import Logo from "../asset/Logo";
import Magnifier from "../asset/Magnifier";
import UpArrow from "../asset/UpArrow";

const Header = () => {
  const navBarContent = [
    "Discover",
    "Licensing",
    "99px Awards",
    "Memberships",
    "Quests",
    "Blog",
  ];

  const isLogin = useIsLogin();

  return (
    <StHeaderDiv>
      <StHeaderContentBox>
        <StLinkToHome to="/">
          <Logo />
        </StLinkToHome>
        <StNavBarBox>
          {navBarContent.map((val, index) => (
            <StNavBarContent key={index} to={"/discover"}>
              {val}
            </StNavBarContent>
          ))}
        </StNavBarBox>
      </StHeaderContentBox>
      <StHeaderRightBarBox>
        <StSearchBox>
          <Magnifier />
          <StSearch placeholder="Search 99px" />
        </StSearchBox>
        {isLogin ? null : <StLoginButton to={"/login"}>Log in</StLoginButton>}
        {isLogin ? null : (
          <StSignupButton to={"/signup"}>Sign up</StSignupButton>
        )}
        {isLogin ? (
          <StUploadButton to={"/upload"}>
            <UpArrow />
            Upload
          </StUploadButton>
        ) : null}
      </StHeaderRightBarBox>
    </StHeaderDiv>
  );
};

export default Header;

const StHeaderDiv = styled.div`
  width: 100%;
  height: 4.5rem;
  padding: 0 4rem;
  background-color: white;
  z-index: 4;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const StLinkToHome = styled(Link)`
  transition: 200ms;
  &:hover {
    fill: #1890ff;
  }
`;

const StHeaderContentBox = styled.div`
  padding: 22px 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
`;

const StNavBarBox = styled.div`
  display: flex;
  min-height: 31px;
  display: flex;
  align-items: center;
`;

const StNavBarContent = styled(Link)`
  margin-left: 2rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: "helveticaneue";
  font-weight: 500;
  transition: color 0.1s ease 0s;
  text-decoration: none;
  &:hover {
    color: #2986f7;
    cursor: pointer;
  }
`;

const StHeaderRightBarBox = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

const StSearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  width: 312px;
  height: 40px;
  background-color: rgb(247, 248, 250);
  border: none;
  border-radius: 25px;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const StSearch = styled.input`
  border: none;
  background-color: transparent;
  margin-left: 1rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const StLoginButton = styled(Link)`
  margin-left: 2rem;
  font-family: "helveticaneue";
  font-weight: 700;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  transition: color 0.1s ease 0s;
  text-decoration: none;
  color: black;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`;

const StSignupButton = styled(Link)`
  margin-left: 1rem;
  font-family: "helveticaneue";
  font-weight: 700;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  transition: color 0.1s ease 0s;
  padding: 0px 16px;
  border-color: rgb(34, 34, 34);
  border-width: 2px;
  border-style: solid;
  text-decoration: none;
  height: 32px;
  color: black;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`;

const StUploadButton = styled(Link)`
  margin-left: 1rem;
  font-family: "helveticaneue";
  font-weight: 700;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  padding: 10px 22px 10px 14px;
  display: flex;
  align-items: center;
  transition: color 0.1s ease 0s;
  border-color: rgb(34, 34, 34);
  border-width: 2px;
  border-style: solid;
  text-decoration: none;
  height: 32px;
  color: black;
  gap: 0.25rem;
  max-height: 24px;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`;
