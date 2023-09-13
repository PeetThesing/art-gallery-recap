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
        width={width * 0.75}
        height={height * 0.75}
      />
      <p>
        {title}&nbsp;by&nbsp;{artist}
      </p>
    </>
  );
}
