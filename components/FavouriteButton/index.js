import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0px;
  top: 0px;
  color: red;

  svg {
    display: block;
    height: 6em;
    width: 6em;
  }
`;


export default function FavoriteButton({ onToggleFavorite, slug, artPieceInfo }) {
  
  const { isFavorite } = artPieceInfo.find(
    (pieceInfo) => pieceInfo.slug === slug
  ) ?? {
    isFavorite: false,
  };



  return (
    <Button type="button" onClick={() => onToggleFavorite(slug)}>
      {/* {isFavorite ? "Add to favorites" : "Remove from favorites"} */}

      <svg
        stroke="currentColor"
        fill={isFavorite ? "currentColor" : "transparent"}
        viewBox="0 0 24 24"
      >
        <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
      </svg>
    </Button>
  );
}
