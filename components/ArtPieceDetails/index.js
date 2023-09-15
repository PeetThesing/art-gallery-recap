import Image from "next/image";
import FavoriteButton from "../FavouriteButton";

export default function ArtPieceDetails({
  slug,
  onToggleFavorite,
  artPieceInfo,
  name: title,
  artist,
  imageSource,
  dimensions,
  year,
  genre,
}) {
  const { width, height } = dimensions;

  return (
    <div>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        artPieceInfo={artPieceInfo}
        slug={slug}
      />
      <Image
        src={imageSource}
        alt={title}
        width={width * 0.75}
        height={height * 0.75}
      />
      <p>
        {title}&nbsp;by&nbsp;{artist},&nbsp; {year}
        ,&nbsp; {genre}
      </p>
    </div>
  );
}
