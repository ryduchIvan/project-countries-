import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./Container";
import { clearDetails } from "../features/Details/slice-details";
import { clearSearch } from "../features/Search/slice-search";
import { Theme } from "../features/Theme/Theme";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/"
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(store => store.theme);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={() => {
            dispatch(clearDetails());
            dispatch(clearSearch());
          }}
          >
            Where is the world?
          </Title>
          <Theme />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
