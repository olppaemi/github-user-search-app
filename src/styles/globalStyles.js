import Boilerplate from "./foundation/Boilerplate";
import Colors from "./foundation/Colors";
import Typography from "./foundation/Typography";
import Container from "./layout/Container";
import Wrapper from "./layout/Wrapper";

const GlobalStyles = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Boilerplate />
        <Colors />
        <Typography />
        {children}
      </Wrapper>
    </Container>
  );
};

export default GlobalStyles;
