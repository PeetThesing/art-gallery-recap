import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: #888;
`;

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPieceInfo, setArtPieceInfo] = useState([]);

  if (error) return <div>failing</div>;
  if (isLoading) return <div>Loading</div>;

  function handleToggleFavorite(slug) {
    setArtPieceInfo((artPieceInfo) => {
      const foundInfo = artPieceInfo.find((piece) => piece.slug === slug);

      if (foundInfo) {
        return artPieceInfo.map((foundInfo) =>
          foundInfo.slug === slug
            ? {
                ...foundInfo,
                isFavorite: !foundInfo.isFavorite,
              }
            : foundInfo
        );
      }
      return [...artPieceInfo, { slug, isFavorite: true }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Title>Art Gallery</Title>
        <Component
          data={data}
          {...pageProps}
          artPieceInfo={artPieceInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
