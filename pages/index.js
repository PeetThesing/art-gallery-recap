import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/";
import Spotlight from "@/components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failing</div>;
  if (isLoading) return <div>Loading</div>;

  function getRandomPiece(data) {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomPiece = getRandomPiece(data);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
        width={randomPiece.dimensions.width}
        height={randomPiece.dimensions.height}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}
