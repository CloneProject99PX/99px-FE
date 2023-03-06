import styled from "styled-components";
import DropdownQuitBox from "../asset/DropdownQuitButton";
import DropdownCategoriesValue from "./DropdownCategoriesValue";
import DropdownCheck from "../asset/DropdownCheck.svg";
import { useSelector } from "react-redux";

const DropdownCategoriesDiv = ({ display, onClick }) => {
  const filter = useSelector((state) => state.filter);

  return (
    <StDropdownBox display={display}>
      <StDropdownBoxInnerDiv>
        <StAllCategoriesDiv>
          <StCheckBox checked={filter.checked.length === 0} />
          <StCategoriesLabel>All categories</StCategoriesLabel>
          <StCategoiesClose>
            <DropdownQuitBox onClick={onClick} />
          </StCategoiesClose>
        </StAllCategoriesDiv>
        <StCategories>
          {filter?.categories.map((val, index) => (
            <DropdownCategoriesValue key={index} id={index}>
              {val}
            </DropdownCategoriesValue>
          ))}
        </StCategories>
      </StDropdownBoxInnerDiv>
    </StDropdownBox>
  );
};

export default DropdownCategoriesDiv;

const StDropdownBox = styled.div`
  display: flex;
  border-radius: 0.25rem;
  position: absolute;
  right: -8px;
  width: 442px;
  max-height: calc(100vh - 264px);
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

const StAllCategoriesDiv = styled.div`
  margin: 1rem 1.5rem;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  padding: 0.25rem 0;
  align-items: center;
`;

const StCategoriesLabel = styled.div`
  font-family: "helveticaneue";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #222222;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const StCheckBox = styled.div`
  min-height: 1.5rem;
  min-width: 1.5rem;
  outline: 2px solid rgb(215, 216, 219);
  outline-offset: -2px;
  border-radius: 0.25rem;
  background-color: white;
  background-image: url("${(props) => (props.checked ? DropdownCheck : null)}");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px;
  cursor: pointer;
`;

const StCategoiesClose = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`;

const StCategories = styled.div`
  margin: 0 1.5rem 1rem 1.5rem;
  display: flex;
  flex-flow: column wrap;
  max-height: 512px;
`;
