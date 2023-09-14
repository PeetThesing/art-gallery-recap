import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const findImage = data.find((piece) => {
    return piece.slug === slug;
  });
  const { imageSource, name, artist, year, genre } = findImage;
  console.log(findImage.name);
  return (
    <>
      <button type="button" onClick={() => router.push("/art-pieces")}>
        🔙 Art Gallery
      </button>
      <ArtPieceDetails
        title={name}
        artist={artist}
        imageSource={imageSource}
        width={findImage.dimensions.width}
        height={findImage.dimensions.height}
        year={year}
        genre={genre}
      />
    </>
  );
}
