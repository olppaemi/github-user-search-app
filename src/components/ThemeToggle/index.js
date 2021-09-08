import ToggleSwitch, { Checkbox, Text } from "styles/components/ToggleSwitch";

const ThemeToggle = ({ mode, onChange }) => {
  return (
    <ToggleSwitch checked={mode === "dark"}>
      <Checkbox checked={mode === "dark"} onChange={onChange} />
      <Text>{mode === "dark" ? "light" : "dark"}</Text>
    </ToggleSwitch>
  );
};

export default ThemeToggle;
