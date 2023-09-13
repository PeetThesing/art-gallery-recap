import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ArtPiecesPreview({
  title,
  artist,
  imageSource,
  width,
  height,
  slug,
}) {
  console.log(slug);
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={imageSource}
          alt={title}
          width={width * 0.75}
          height={height * 0.75}
        />
      </Link>
      <p>
        {title}&nbsp;by&nbsp;{artist}
      </p>
    </>
  );
}
