import { useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import DropdownCategoriesDiv from "../components/Discover/DropdownCategoriesDiv";
import Dropdown from "../components/Discover/Dropdown";
import useOutsideClick from "../hooks/useOutsideClick";
import { useSelector } from "react-redux";
import Header from "../components/ui/Header";

const Discover = () => {
  const checkedCategories = useSelector((state) => state.filter.checked);

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

  const [categoriesToggle, setCategoriesToggle] = useState(false);
  const [photographersToggle, setPhotographersToggle] = useState(false);
  const [sortBy, setSortBy] = useState(false);

  const categoriesRef = useOutsideClick(() => {
    setCategoriesToggle(false);
  });

  return (
    <Wrapper>
      <Header />
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
              key={index}
            >
              <StTablistContent>{val}</StTablistContent>
            </StTablistContentDiv>
          ))}
        </StTablistDiv>
        <StFilterBox>
          <StDropdownDiv ref={categoriesRef}>
            <Dropdown
              key={"Categories"}
              isToggle={categoriesToggle}
              onClick={() => {
                setCategoriesToggle(!categoriesToggle);
              }}
            >
              Categories
              {checkedCategories.length === 0
                ? null
                : ` (${checkedCategories.length})`}
            </Dropdown>
            {categoriesToggle ? (
              <DropdownCategoriesDiv
                onClick={() => {
                  setCategoriesToggle(false);
                }}
              />
            ) : null}
          </StDropdownDiv>
          <StDropdownDiv>
            <Dropdown key={"Photographers"}>Photographers</Dropdown>
          </StDropdownDiv>
          <StDropdownDiv>
            <Dropdown key={"Sort"}>Sort by: {`Pulse`}</Dropdown>
          </StDropdownDiv>
        </StFilterBox>
      </StStickyBar>
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
  top: 4.5rem;

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

const StDropdownDiv = styled.div`
  position: relative;
`;
