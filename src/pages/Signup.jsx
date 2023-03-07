import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../api/auth";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/ui/Header";
import useIsLogin from "../hooks/useIsLogin";

const Signup = () => {
  const [withEmail, setWithEmail] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const navigate = useNavigate();

  const isLogin = useIsLogin();

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin]);

  const signUpButtonHandler = () => {
    signUp({ email: emailValue, password: pwValue })
      .then(() => {
        alert("Sign up complete");
        navigate("/login");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("Email is already used.");
        }
      });
  };

  return (
    <Wrapper>
      <Header />
      <StSignupWrap>
        {!withEmail ? (
          <StSignupBox>
            <StSignupHeader>Join 99px</StSignupHeader>
            <StSignupDesc>
              Discover and share incredible photos, gain global exposure, and
              get paid for your work.
            </StSignupDesc>
            <StKakaoButton>Continue with Kakao</StKakaoButton>
            <StSignupButton
              onClick={() => {
                setWithEmail(true);
              }}
            >
              Continue with Email
            </StSignupButton>
          </StSignupBox>
        ) : (
          <StSignupBox>
            <StSignupHeader>Sign up to 99px</StSignupHeader>
            <StInputDiv>
              <StInputTitle>Email</StInputTitle>
              <StInput
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </StInputDiv>
            <StInputDiv>
              <StInputTitle>Password*</StInputTitle>
              <StInput
                placeholder="(minimum 8 characters)"
                type="password"
                value={pwValue}
                onChange={(e) => setPwValue(e.target.value)}
              />
            </StInputDiv>
            <StSignupButton
              onClick={() => {
                signUpButtonHandler();
              }}
            >
              Sign up
            </StSignupButton>
            <StLoginLink>
              Already have an account? <StLink to={"/login"}>Log in</StLink>
            </StLoginLink>
          </StSignupBox>
        )}
      </StSignupWrap>
    </Wrapper>
  );
};

export default Signup;

const StSignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 248, 250);
  height: 100vh;
`;

const StSignupBox = styled.div`
  background-color: white;
  width: 400px;
  padding: 24px;
  border: 1px solid rgb(238, 239, 242);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const StSignupHeader = styled.div`
  font-family: "helveticaneue";
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

const StSignupDesc = styled.div`
  font-family: "helveticaneue";
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1.5rem;
  color: rgb(109, 115, 120);
`;

const StInputDiv = styled.div`
  width: 100%;
  padding-bottom: 1.5rem;
`;

const StInputTitle = styled.div`
  font-family: "helveticaneue";
  font-size: 0.875rem;
  color: rgb(109, 115, 120);
  margin-bottom: 0.25rem;
`;

const StInput = styled.input`
  background-color: white;
  border: 1px solid rgb(215, 216, 219);
  border-radius: 0.25rem;
  height: 44px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  padding: 12px 16px;
  flex: 0 0 auto;
`;

const StSignupButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: rgb(8, 112, 209);
  color: white;
  font-family: "helveticaneue";
  font-weight: 900;
  font-size: 1rem;
  &:hover {
    background-color: #2986f7;
  }
  &:active {
    background-color: #0870d1;
  }
`;

const StKakaoButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: #f7e600;
  color: #3a1d1d;
  font-family: "helveticaneue";
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 1rem;
  &:hover {
    background-color: #fff34f;
  }
  &:active {
    background-color: #dbcc00;
  }
`;

const StLoginLink = styled.div`
  font-family: "helveticaneue";
  font-size: 1rem;
  color: rgb(109, 115, 120);
  margin-top: 1rem;
`;

const StLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: #1890ff;
    text-decoration: none;
  }
`;
