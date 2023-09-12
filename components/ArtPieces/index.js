import ArtPiecesPreview from "../ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
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
