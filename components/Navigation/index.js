import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 50px;
  display: flex;
  background: #ccc;
  align-items: center;
  text-align: center;
  > a {
    font-weight: 2rem;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    &:hover {
      background-color: #333;
      color: white;
    }
  }
`;
export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Art Pieces</Link>
      <Link href="/favorites">Favorites</Link>
    </StyledNav>
  );
}
