import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { checkFilter } from "../../redux/modules/filter";
import DropdownCheck from "../asset/DropdownCheck.svg";

const DropdownCategoriesValue = ({ children, id }) => {
  const checkedArr = useSelector((state) => state.filter.checked);
  const dispatch = useDispatch();

  return (
    <StCategoriesValue onClick={() => dispatch(checkFilter({ value: id }))}>
      <StCheckBox checked={checkedArr.includes(id)} />
      <StCategoriesLabel>{children}</StCategoriesLabel>
    </StCategoriesValue>
  );
};

export default DropdownCategoriesValue;

const StCategoriesValue = styled.div`
  padding: 0.25rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
