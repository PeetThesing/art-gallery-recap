import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

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
    <>
      <button type="button" onClick={() => router.push("/art-pieces")}>
        🔙 Art Gallery
      </button>
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
    </>
  );
}
