import Image from "next/image";

export default function ArtPieceDetails({
  title,
  artist,
  imageSource,
  width,
  height,
  year,
  genre,
}) {
  return (
    <div>
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
