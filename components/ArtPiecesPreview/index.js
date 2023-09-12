import Image from "next/image";

export default function ArtPiecesPreview({
  title,
  artist,
  imageSource,
  width,
  height,
}) {
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
