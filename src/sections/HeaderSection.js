import ThemeToggle from "components/ThemeToggle/index";
import Header from "styles/layout/Header";

const HeaderSection = ({ mode, onChange }) => {
  return (
    <Header>
      <h1>devfinder</h1>
      <ThemeToggle mode={mode} onChange={onChange} />
    </Header>
  );
};

export default HeaderSection;
