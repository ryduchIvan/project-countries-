import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { chengeTheme, selectTheme } from "./slice-theme";
import { useSelector } from "react-redux";
import {useAppDispatch} from "../../store";
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;
function Theme() {
	const dispatch = useAppDispatch();
	const theme = useSelector(selectTheme);
	const handleTheme = (): void => {
		dispatch(chengeTheme(theme === "light" ? "dark" : "light"))
	}
	return (
		<ModeSwitcher onClick={handleTheme}>
			{theme === "light" ? (
				<IoMoonOutline size="14px" />
			) : (
				<IoMoon size="14px" />
			)}{" "}
			<span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
		</ModeSwitcher>
	)
}

export { Theme };