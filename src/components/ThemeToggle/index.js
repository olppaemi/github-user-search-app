import styled from "styled-components";
import rem from "styles/utils/rem";
import iconSun from "assets/icon-sun.svg";
import iconMoon from "assets/icon-moon.svg";

const Label = styled.label`
  width: ${rem(76)};
  height: ${rem(38)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::after {
    display: inline-block;
    content: "";
    width: ${rem(20)};
    height: ${rem(20)};
    background: ${({ checked }) =>
      checked ? `no-repeat url(${iconSun})` : `no-repeat url(${iconMoon})`};
  }
`;
const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  opacity: 0;
  width: 0;
  height: 0;
`;
const Text = styled.span`
  font-size: ${rem(13)};
  font-weight: bold;
  text-transform: uppercase;
`;

const ThemeToggle = ({ mode, onChange }) => {
  return (
    <Label checked={mode === "dark"}>
      <Checkbox checked={mode === "dark"} onChange={onChange} />
      <Text>{mode === "dark" ? "light" : "dark"}</Text>
    </Label>
  );
};

export default ThemeToggle;
