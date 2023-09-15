import styled from "styled-components";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";


const Root = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BackButton = styled.button`
  background-color: #ccc;
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
  align-self: flex-start;

  &:hover {
    background-color: #999;
    color: #fff;
  }
`;
export default function ArtPieceDetailsPage({
  data,
  artPieceInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const findImage = data.find((piece) => {
    return piece.slug === slug;
  });
  // const { imageSource, name, artist, year, genre } = findImage;
  return (
    <Root>
      <BackButton type="button" onClick={() => router.push("/art-pieces")}>
        🔙 Art Gallery
      </BackButton>
      <ArtPieceDetails
        onToggleFavorite={onToggleFavorite}
        artPieceInfo={artPieceInfo}
        // title={name}
        // artist={artist}
        // imageSource={imageSource}
        // width={findImage.dimensions.width}
        // height={findImage.dimensions.height}
        // year={year}
        // genre={genre}
        {...findImage}
      />
    </Root>
  );
}
