export default function FavoriteButton(onToggleFavorite, isFavorite) {
  return (
    <button type="button" onClick={() => onToggleFavorite(!isFavorite)}>
      {isFavorite ? "Add to favorites" :"Remove from favorites"}
    </button>
  );
}
