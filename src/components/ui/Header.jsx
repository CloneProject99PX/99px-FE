import styled from "styled-components";
import Logo from "../asset/Logo";
import Magnifier from "../asset/Magnifier";

const Header = () => {
  const navBarContent = [
    "Discover",
    "Licensing",
    "99px Awards",
    "Memberships",
    "Quests",
    "Blog",
  ];

  return (
    <StHeaderDiv>
      <StHeaderContentBox>
        <Logo />
        <StNavBarBox>
          {navBarContent.map((val, index) => (
            <StNavBarContent key={index}>{val}</StNavBarContent>
          ))}
        </StNavBarBox>
      </StHeaderContentBox>
      <StHeaderRightBarBox>
        <StSearchBox>
          <Magnifier />
          <StSearch placeholder="Search 99px" />
        </StSearchBox>
        <StLoginButton>Log in</StLoginButton>
        <StSignupButton>Sign up</StSignupButton>
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
  display: flex;
  align-items: center;
  box-sizing: border-box;
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

const StNavBarContent = styled.div`
  margin-left: 2rem;
  color: rgba(0, 0, 0, 0.65);
  font-size: "helveticaneue";
  font-weight: 500;
  transition: color 0.1s ease 0s;
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

const StLoginButton = styled.button`
  margin-left: 2rem;
  font-family: "helveticaneue";
  font-weight: 700;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  transition: color 0.1s ease 0s;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`;

const StSignupButton = styled.button`
  margin-left: 1rem;
  font-family: "helveticaneue";
  font-weight: 700;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 100px;
  transition: color 0.1s ease 0s;
  padding: 0px 16px;
  border-color: rgb(34, 34, 34);
  border-width: 2px;
  border-style: solid;
  height: 32px;
  &:hover {
    color: #1890ff;
    cursor: pointer;
  }
`;
