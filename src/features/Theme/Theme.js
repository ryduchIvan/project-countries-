import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { chengeTheme, selectTheme } from "./slice-theme";
import { useDispatch, useSelector } from "react-redux";

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`;
function Theme(params) {
	const disatch = useDispatch();
	const theme = useSelector(selectTheme);
	const handleTheme = () => {
		disatch(chengeTheme(theme === "light" ? "dark" : "light"))
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