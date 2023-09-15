import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import FavoriteButton from "../FavouriteButton";
import styled from "styled-components";

const Root = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

export default function ArtPiecesPreview({
  onToggleFavorite,
  artPieceInfo,
  title,
  artist,
  imageSource,
  width,
  height,
  slug,
}) {
  console.log(slug);
  return (
    <Root>
      <FavoriteButton
        slug={slug}
        onToggleFavorite={onToggleFavorite}
        artPieceInfo={artPieceInfo}
      />
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
    </Root>
  );
}
