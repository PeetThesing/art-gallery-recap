import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  // console.log(data);
  if (error) return <div>failing</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}

function ArtPieces({ pieces }) {
  // console.log(pieces);
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecesPreview
            title={piece.name}
            artist={piece.artist}
            imageSource={piece.imageSource}
            width={piece.dimensions.width}
            height={piece.dimensions.height}
          />
        </li>
      ))}
    </ul>
  );
}

function ArtPiecesPreview({ title, artist, imageSource, width, height }) {
  // console.log(title);
  return (
    <>
      <Image
        src={imageSource}
        alt={title}
        width={width}
        height={height}
      ></Image>
      <p>
        {title}&nbsp;by&nbsp;{artist}
      </p>
    </>
  );
}
