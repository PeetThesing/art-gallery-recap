import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import FavoriteButton from "../FavouriteButton";
import styled from "styled-components";

const Root = styled.div`
  display: inline-block;
  border: 2px solid #ccc;
  padding: 2rem;
  overflow: hidden;
  position: relative;
`;

const Caption = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  color: #ccc;
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
      <Caption>
        <strong>{title}</strong>&nbsp;by&nbsp;<em>{artist}</em>
      </Caption>
    </Root>
  );
}
