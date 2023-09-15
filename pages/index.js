import SpotLight from "@/components/Spotlight";
import Spotlight from "@/components/Spotlight";
import styled from "styled-components";

const Root = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export default function SpotlightPage({
  data,
  artPieceInfo,
  onToggleFavorite,
}) {
  function getRandomPiece(data) {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomPiece = getRandomPiece(data);

  return (
    <Root>
      <SpotLight
        image={randomPiece.imageSource}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
        artPieceInfo={artPieceInfo}
        onToggleFavorite={onToggleFavorite}
        slug={randomPiece.slug}
      />
    </Root>
  );
}
