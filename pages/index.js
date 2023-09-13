import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
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
    </div>
  );
}
