import styled from "styled-components";

const Wrapper = ({ children }) => {
  return <StWrapper>{children}</StWrapper>;
};

export default Wrapper;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
