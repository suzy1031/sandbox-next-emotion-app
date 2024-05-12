import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global.css";
import { container } from "../styles/layout.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <div css={container}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
