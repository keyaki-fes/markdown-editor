import Document, { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="けやき祭IT管理部が開発したマークダウンエディタです"
        />
        <meta
          property="og:image"
          content="https://keyaki-fes.github.io/markdown-editor/ogp.png"
        />
        <meta property="og:title" content="Keyaki Fes Markdown Editor" />
        <meta
          property="og:description"
          content="けやき祭IT管理部が開発したマークダウンエディタです"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://keyaki-fes.github.io/markdown-editor/"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#EEF2F6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
