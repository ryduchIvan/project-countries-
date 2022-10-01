import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setSearchByName } from "./slice-search";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country..."
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`;

export const Search = () => {
  const dispatch = useDispatch();
  const setSearch = (event) => {
    let value = event.target.value;
    dispatch(setSearchByName(value));
  };
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={setSearch} />
    </InputContainer>
  );
};
