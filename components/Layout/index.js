import styled from "styled-components";
import Navigation from "../Navigation";

const Root = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  overflow: auto;
`;

export default function Layout({ children }) {
  return (
    <Root>
      <Main>{children}</Main>
      <Navigation />
    </Root>
  );
}
