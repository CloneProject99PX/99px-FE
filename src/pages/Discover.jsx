import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import DropdownCategoriesDiv from "../components/Discover/DropdownCategoriesDiv";
import Dropdown from "../components/Discover/Dropdown";
import useOutsideClick from "../hooks/useOutsideClick";
import { useSelector } from "react-redux";
import Header from "../components/ui/Header";
import DropdownPhotographersDiv from "../components/Discover/DropdownPhotographersDiv";
import DropdownSortDiv from "../components/Discover/DropdownSortDiv";
import { loadImage } from "../api/loadImage";
import { useNavigate } from "react-router-dom";

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
  const [imageList, setImageList] = useState([]);

  const [counter, setCounter] = useState(1);

  const infLoadMore = () => {
    loadImage(counter, 2).then((res) => {
      setImageList((prev) => [...prev].concat([...res.data.data.content]));
    });
  };

  const infScrollRef = useRef(null);
  const navigate = useNavigate();

  const io = new IntersectionObserver(() => {
    setCounter((prev) => prev + 1);
  });

  useEffect(() => {
    infLoadMore();
  }, [counter]);

  useEffect(() => {
    loadImage(0, 7).then((res) => {
      setImageList(res.data.data.content);
    });
    io.observe(infScrollRef.current);
  }, []);

  const categoriesRef = useOutsideClick(() => {
    setCategoriesToggle(false);
  });

  const photographersRef = useOutsideClick(() => {
    setPhotographersToggle(false);
  });

  const sortByRef = useOutsideClick(() => {
    setSortBy(false);
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
          <StDropdownDiv ref={photographersRef}>
            <Dropdown
              key={"Photographers"}
              isToggle={photographersToggle}
              onClick={() => {
                setPhotographersToggle(!photographersToggle);
              }}
            >
              Photographers
            </Dropdown>
            {photographersToggle ? <DropdownPhotographersDiv /> : null}
          </StDropdownDiv>
          <StDropdownDiv ref={sortByRef}>
            <Dropdown
              key={"Sort"}
              isToggle={sortBy}
              onClick={() => {
                setSortBy(!sortBy);
              }}
            >
              Sort by: {`Pulse`}
            </Dropdown>
            {sortBy ? <DropdownSortDiv /> : null}
          </StDropdownDiv>
        </StFilterBox>
      </StStickyBar>
      <StImageList>
        <StAllImageeDiv>
          {imageList?.map((val, index) => {
            return (
              <StImageBox
                key={index}
                onClick={() => {
                  navigate(`/photo/${val.id}`);
                }}
              >
                <StImage src={val.url} />
                <StInfoBox />
              </StImageBox>
            );
          })}
        </StAllImageeDiv>
      </StImageList>
      <div ref={infScrollRef}>test</div>
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
  z-index: 5;

  padding: 0 4rem;
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

const StImageList = styled.div`
  background-color: rgb(247, 248, 250);
  z-index: 0;
`;

const StAllImageeDiv = styled.div`
  margin: 0 4rem;
  margin-top: 0.5rem;
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  flex-wrap: wrap;
  height: 100%;
  gap: 0.5rem;
  align-items: center;
`;

const StImageBox = styled.div`
  position: relative;
`;

const StImage = styled.img`
  width: auto;
  max-height: 250px;
  object-fit: cover;
  display: block;
  flex-grow: 1;
`;

const StInfoBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), 90%, rgba(0, 0, 0, 0.15));
  }
`;
