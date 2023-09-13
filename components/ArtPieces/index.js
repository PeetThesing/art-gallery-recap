import ArtPiecesPreview from "../ArtPiecesPreview";
import styled from "styled-components";
import Link from "next/link";
const StyledLi = styled.li`
  list-style: none;
`;

export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>Art Gallery - All Pieces</h1>
      <ul>
        {pieces.map((piece) => (
          <StyledLi key={piece.slug}>
            <ArtPiecesPreview
              title={piece.name}
              artist={piece.artist}
              imageSource={piece.imageSource}
              width={piece.dimensions.width}
              height={piece.dimensions.height}
              slug={piece.slug}
            />
          </StyledLi>
        ))}
      </ul>
    </>
  );
}
