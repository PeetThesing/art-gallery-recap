import ArtPieces from "@/components/ArtPieces";

export default function FavoritePage({ data, onToggleFavorite, artPieceInfo }) {
  const favorites = data.filter(
    (piece) => artPieceInfo.find((info) => info.slug === piece.slug)?.isFavorite
  );

  console.log("favorites", favorites);

  return (
    <>
      <ArtPieces
        onToggleFavorite={onToggleFavorite}
        artPieceInfo={artPieceInfo}
        pieces={favorites}
      />
    </>
  );
}
