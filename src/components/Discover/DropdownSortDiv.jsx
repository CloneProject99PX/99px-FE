import { useState } from "react";
import styled from "styled-components";
import CheckShape from "../asset/CheckShape";

const DropdownSortDiv = () => {
  const [sortSelectValue, setSortSelectValue] = useState(false);

  return (
    <StDropdownBox>
      <StDropdownBoxInnerDiv>
        <StSortContents
          onClick={() => {
            setSortSelectValue(false);
          }}
        >
          <StSortContentText>Pulse</StSortContentText>
          {sortSelectValue ? null : <CheckShape />}
        </StSortContents>
        <StSortContents
          onClick={() => {
            setSortSelectValue(true);
          }}
        >
          <StSortContentText>Newest</StSortContentText>
          {sortSelectValue ? <CheckShape /> : null}
        </StSortContents>
      </StDropdownBoxInnerDiv>
    </StDropdownBox>
  );
};

export default DropdownSortDiv;

const StDropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  position: absolute;
  right: -8px;
  width: 212px;
  max-height: calc(100vh - 264px);
  background-color: white;
  min-height: 24px;
  max-width: inherit;
  min-width: inherit;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px, rgb(0 0 0 / 16%) 0px 4px 12px;
  top: calc(100% + 14px);
`;

const StDropdownBoxInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  overflow-y: auto;
  width: 100%;
`;

const StSortContents = styled.div`
  padding: 0 1rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
    background-color: #f7f8fa;
  }
`;

const StSortContentText = styled.div`
    font-family : 'heleveticaneue'
    font-size : 1rem;
`;
