import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPieceInfo, setArtPieceInfo] = useState([]);

  console.log(data);
  if (error) return <div>failing</div>;
  if (isLoading) return <div>Loading</div>;

  function handleToggleFavorite(slug) {
    setArtPieceInfo((artPieceInfo) => {
      const findArtPieceInfo = artPieceInfo.find(
        (piece) => piece.slug === slug
      );

      if (findArtPieceInfo) {
        return artPieceInfo.map((findArtPieceInfo) =>
          findArtPieceInfo.slug === slug
            ? {
                ...findArtPieceInfo,
                isFavorite: !findArtPieceInfo.isFavorite,
              }
            : findArtPieceInfo
        );
      }
      return [...artPieceInfo, { slug, isFavorite: true }];
    });
  }

  {
    data.map(({ slug }) => {
      const { isFavorite } = artPieceInfo.find(
        (findArtPieceInfo) => findArtPieceInfo.slug === slug
      ) ?? {
        isFavorite: false,
      };
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          data={data}
          {...pageProps}
          artPieceInfo={artPieceInfo}
          setArtPieceInfo={setArtPieceInfo}
          handleToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
