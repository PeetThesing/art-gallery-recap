import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failing</div>;
  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component data={data} {...pageProps} />
      </Layout>
    </>
  );
}
