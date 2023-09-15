import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "../FavouriteButton";

const Root = styled.section`
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 1rem;
`;

const Piece = styled.div`
  flex: 1;
  padding: 1rem;
  position: relative;
`;

const Artist = styled.div`
  width: 50px;
  padding: 1rem;
  color: white;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5vw;
`;
function SpotLight({
  image,
  artist,
  width,
  height,
  slug,
  onToggleFavorite,
  artPieceInfo,
}) {
  return (
    <Root>
      <Piece>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          slug={slug}
          artPieceInfo={artPieceInfo}
        />

        <Image
          src={image}
          alt="spotlight piece"
          width={width * 0.75}
          height={height * 0.75}
        />
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}

export default SpotLight;
