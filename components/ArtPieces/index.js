import ArtPiecesPreview from "../ArtPiecesPreview";
import styled from "styled-components";
const StyledLi = styled.li`
  list-style: none;
`;

const Root = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
`;

export default function ArtPieces({ pieces, onToggleFavorite, artPieceInfo }) {
  return (
    <>
      <h1>Art Gallery - All Pieces</h1>
      <Root>
        {pieces.map((piece) => (
          <StyledLi key={piece.slug}>
            <ArtPiecesPreview
              onToggleFavorite={onToggleFavorite}
              artPieceInfo={artPieceInfo}
              title={piece.name}
              artist={piece.artist}
              imageSource={piece.imageSource}
              width={piece.dimensions.width * 0.5}
              height={piece.dimensions.height * 0.5}
              slug={piece.slug}
            />
          </StyledLi>
        ))}
      </Root>
    </>
  );
}
