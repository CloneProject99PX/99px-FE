import { useState } from "react";
import styled from "styled-components";
import DropdownArrowDown from "../components/asset/DropdownArrowDown";
import Wrapper from "../components/common/Wrapper";
import Dropdown from "../components/Discover/Dropdown";

const Discover = () => {
  const tablistTitle = [
    `What's popular today`,
    `Trending in the community`,
    `The newest uploads`,
    `Hand-picked by our editors`,
    `Featured galleries`,
    `Resource Hub`,
  ];
  const tablistDesc = [
    `See recently added photos with the highest Pulse.`,
    `Browse photos with a rising Pulse.`,
    `Be one of the first to discover the photos just added to 500px.`,
    `Check out photos selected by our 500px Editors.`,
    `Browse through some of the best galleries on 500px.`,
    `Discover Resources to help you learn and grow as a photographer.`,
  ];
  const tablistName = [
    `Popular`,
    `Upcoming`,
    `Fresh`,
    `Editor's Choice`,
    `Gallaries`,
    `Resource Hub`,
  ];
  const [selectedTablist, setSelectedTablist] = useState(0);

  const Categories = [
    `Abstract`,
    `Aerial`,
    `Animals`,
    `Black and White`,
    `Celebrities`,
    `City & Architecture`,
    `Commercial`,
    `Concert`,
    `Family`,
    `Fashion`,
    `Food`,
    `Fine Art`,
    `Film`,
    `Journalism`,
    `Landscapes`,
    `Macro`,
    `Nature`,
    `Night`,
    `People`,
    `Performing Arts`,
    `Sport`,
    `Still Life`,
    `Street`,
    `Transportation`,
    `Travel`,
    `Underwater`,
    `Urban Exploration`,
    `Wedding`,
    `Other`,
  ];

  return (
    <Wrapper>
      <StDiscoverHeader>{tablistTitle[selectedTablist]}</StDiscoverHeader>
      <StDiscoverDesc>{tablistDesc[selectedTablist]}</StDiscoverDesc>
      <StStickyBar>
        <StTablistDiv>
          {tablistName.map((val, index) => (
            <StTablistContentDiv
              onClick={() => {
                setSelectedTablist(index);
              }}
              selected={tablistName[selectedTablist] === val}
            >
              <StTablistContent>{val}</StTablistContent>
            </StTablistContentDiv>
          ))}
        </StTablistDiv>
        <StFilterBox>
          <Dropdown key={"Categories"}>
            Categories<StDropdownBox>something</StDropdownBox>
          </Dropdown>
          <Dropdown key={"Photographers"}>Photographers</Dropdown>
          <Dropdown key={"Sort"}>Sort by: {`Pulse`}</Dropdown>
        </StFilterBox>
      </StStickyBar>
      <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    </Wrapper>
  );
};

export default Discover;

const StDiscoverHeader = styled.div`
  font-family: "helveticaneue";
  font-weight: 550;
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: #222222;
  margin: 2rem 4rem 0.5rem 4rem;
`;

const StDiscoverDesc = styled.div`
  font-family: "helveticaneue";
  font-size: 1.125rem;
  line-height: 1.25rem;
  color: #6d7378;

  margin: 0 4rem;
`;

const StStickyBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 51px;
  background-color: white;
  position: sticky;
  align-items: center;
  top: 0;

  margin: 0 4rem;
`;

const StTablistDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 2;
`;

const StTablistContentDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-right: 0.5rem;
  height: 2.25rem;
  box-shadow: ${(props) =>
    props.selected === true ? `#0870d1 0px -3px 0px -1px inset` : null};
  color: ${(props) => (props.selected === true ? `#0870d1` : `#6d7378`)};
  &:nth-child(n + 2) {
    margin-left: 0.5rem;
  }
  &:hover {
    box-shadow: #2986f7 0px -3px 0px -1px inset;
    color: #2986f7;
    cursor: pointer;
  }
`;

const StTablistContent = styled.div`
  font-family: "helveticaneue";
  font-weight: 550;
  font-size: 1rem;
  line-height: 1.25rem;
`;

const StFilterBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  z-index: 3;
  gap: 0.5rem;
  @media screen and (max-width: 1205px) {
    display: none;
  }
`;

// --------------

const StDropdownBox = styled.div`
  display: flex;

  border-radius: 0.25rem;
  position: absolute;
  right: -8px;
  max-height: calc(100vh - 264px);
  min-height: 24px;
  max-width: inherit;
  min-width: inherit;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 4px, rgb(0 0 0 / 16%) 0px 4px 12px;
  top: calc(100% + 14px);
`;
