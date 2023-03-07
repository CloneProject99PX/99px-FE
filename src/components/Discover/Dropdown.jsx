import { useState } from "react";
import styled from "styled-components";
import DropdownArrowDown from "../asset/DropdownArrowDown";

const Dropdown = ({ children, isToggle, onClick }) => {
  return (
    <StFilterDropdown
      isToggle={isToggle}
      onClick={() => {
        onClick();
      }}
    >
      {children}
      <StRotateDiv isToggle={isToggle}>
        <StDropdownArrowDown />
      </StRotateDiv>
    </StFilterDropdown>
  );
};

export default Dropdown;

const StFilterDropdown = styled.div`
  font-family: "helveticaneue";
  font-weight: 400;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 8px 22px;
  background-color: transparent;
  border: ${(props) =>
    props.isToggle ? "2px solid #316eca" : "2px solid #d7d8db"};
  border-radius: 4rem;
  transition: all 0.2s ease 0s;
  color: #525558;
  gap: 0.5rem;
  background-color: white;
  position: relative;
  &:hover {
    border: 2px solid #316eca;
    color: #2986f7;
    background-color: #eff6fd;
    cursor: pointer;
  }
`;

const StRotateDiv = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s ease 0s;
  transform: ${(props) => (props.isToggle ? `rotate(0.5turn)` : null)};
`;

const StDropdownArrowDown = styled(DropdownArrowDown)`
  color: #525558;
  transition: all 0.2s ease 0s;
  &:hover {
    color: #0870d1;
  }
`;
