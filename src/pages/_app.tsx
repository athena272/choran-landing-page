import Head from "next/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Choran Landing Page</title>
        <meta name="description" content="Choran Landing Page - A modern and interactive landing page built with Next.js and React." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
