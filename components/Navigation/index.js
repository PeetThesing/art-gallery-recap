import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  font-weight: 2rem;
  background-color: #ccc;
  justify-content: space-evenly;
  height: 80px;
  > a {
    font-weight: 2rem;
    text-decoration: none;
    color: inherit;
    padding: 10px;
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
