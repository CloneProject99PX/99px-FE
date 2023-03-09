import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logIn } from "../api/auth";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/ui/Header";
import useIsLogin from "../hooks/useIsLogin";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const navigate = useNavigate();

  const isLogin = useIsLogin();

  const [cookie, setCookie, delCookie] = useCookies(["authorization"]);

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, [isLogin]);

  const logInButtonHandler = () => {
    if (!(emailValue && pwValue)) {
      alert("Please fill the blanks");
    } else if (
      !(emailValue.includes("@") || emailValue.includes("@")
        ? emailValue.split("@")[1].includes(".")
        : null)
    ) {
      alert("Make sure your email right");
    } else {
      logIn({ email: emailValue, password: pwValue })
        .then((res) => {
          setCookie("authorization", res.headers.authorization);
          navigate("/");
        })
        .catch((error) => {
          if (error.response.status === 400)
            return alert(
              "Email or Password does not right. Please check it again"
            );
        });
    }
  };

  return (
    <Wrapper>
      <Header />
      <StLoginWrap>
        <StLoginBox>
          <StLoginHeader>Log in to 500px</StLoginHeader>
          <StInputDiv>
            <StInputTitle>Email or Username*</StInputTitle>
            <StInput
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </StInputDiv>
          <StInputDiv>
            <StInputTitle>Password*</StInputTitle>
            <StInput
              type="password"
              value={pwValue}
              onChange={(e) => setPwValue(e.target.value)}
            />
          </StInputDiv>
          <StLoginButton
            onClick={() => {
              logInButtonHandler();
            }}
          >
            Log in
          </StLoginButton>
          <StKakaoButton>Log in with Kakao</StKakaoButton>
          <StLoginLink>
            Don't have an account? <StLink to={"/signup"}>Sign up</StLink>
          </StLoginLink>
        </StLoginBox>
      </StLoginWrap>
    </Wrapper>
  );
};

export default Login;

const StLoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(247, 248, 250);
  height: 100vh;
`;

const StLoginBox = styled.div`
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

const StLoginHeader = styled.div`
  font-family: "helveticaneue";
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
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

const StLoginButton = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 100px;
  background-color: rgb(8, 112, 209);
  color: white;
  font-family: "helveticaneue";
  font-weight: 900;
  font-size: 1rem;
  margin-bottom: 2rem;
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
  margin-bottom: 1.5rem;
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
