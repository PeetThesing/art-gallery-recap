import Image from "next/image";
import FavoriteButton from "../FavouriteButton";
import styled from "styled-components";

const Root = styled.section`
  background-color: #999;
  padding: 1rem;
  display: inline-flex;
  gap: 1rem;
`;

const Piece = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Title = styled.strong`
  font-size: 1.2vw;
  margin: 1rem;
`;

const Details = styled.em`
  font-style: italic;
  font-size: 1vw;
  color: #555;
`;

const Artist = styled.div`
  width: 50px;
  padding: 1rem;
  color: #333;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5vw;
`;

export default function ArtPieceDetails({
  slug,
  onToggleFavorite,
  artPieceInfo,
  name: title,
  artist,
  imageSource,
  dimensions,
  year,
  genre,
}) {
  const { width, height } = dimensions;

  return (
    <Root>
      <Piece>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          artPieceInfo={artPieceInfo}
          slug={slug}
        />
        <Image
          src={imageSource}
          alt={title}
          width={width * 0.4}
          height={height * 0.4}
        />
        <Title>{title}</Title>
        <Details>
          by {artist} | {genre} | {year}
        </Details>
      </Piece>
      <Artist>{artist}</Artist>
    </Root>
  );
}
