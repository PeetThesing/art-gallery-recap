import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  title,
  artist,
  imageSource,
  width,
  height,
  year,
  genre,
}) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <>
      <button type="button" onClick={() => router.push("/art-pieces")}>
        🔙 Art Gallery
      </button>
      {/* <ArtPieceDetails
        title={title}
        artist={artist}
        imageSource={imageSource}
        width={width}
        height={height}
        genre={genre}
        year={year}
      /> */}
    </>
  );
}

{
  /* <ArtPieceDetails
        title={title}
        artist={artist}
        imageSource={imageSource}
        width={width}
        height={height}
        genre={genre}
        year={year}
      /> */
}
