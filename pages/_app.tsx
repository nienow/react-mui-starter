import type {AppProps} from 'next/app';
import {css, Global} from "@emotion/react";
import {DialogProvider} from "@/providers/DialogProvider";

const GLOBAL_STYLES = css`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  //div#__next {
  //  min-height: 100%;
  //}
`;

function NextWeb3App({Component, pageProps}: AppProps) {
  return (
    <DialogProvider>
      <Global styles={GLOBAL_STYLES}/>
      <Component {...pageProps} />
    </DialogProvider>
  );
}

export default NextWeb3App;
