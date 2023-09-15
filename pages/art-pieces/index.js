import ArtPieces from "@/components/ArtPieces/";

export default function ArtPiecesPage({
  data,
  onToggleFavorite,
  artPieceInfo,
}) {
  return (
    <ArtPieces
      pieces={data}
      onToggleFavorite={onToggleFavorite}
      artPieceInfo={artPieceInfo}
    />
  );
}
