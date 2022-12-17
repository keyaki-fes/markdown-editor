import Head from "next/head";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";
import { url } from "../utils/config";
import fs from "fs";

export default function Help() {
  return (
    <div className="absolte top-0 left-0 md:px-8 px-4 bg-[#F1F2F6]  w-screen h-screen flex flex-col">
      <Head>
        <title>Keyaki Fes Markdown Editor</title>
        <meta
          name="description"
          content="けやき祭IT管理部が開発したマークダウンエディタのヘルプページ"
        />
        <link rel="icon" href={url("/favicon.ico")} />
      </Head>
      <div className="flex-row flex py-3">
        <img src={url("/icon.png")} className="w-10 h-10 mr-2" />
        <div>
          <div className="text-sm text-gray-900 font-medium leading-none">
            KEYAKI FES
          </div>
          <div className="text-2xl text-gray-900 font-bold leading-none">
            Markdown Editor
          </div>
        </div>
      </div>
      <div
        className={`overflow-y-scroll  overflow-x-scroll znc px-6 py-10  rounded-md h-full w-full bg-white  text-gray-900`}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: "現在工事中です",
          }}
        ></p>
      </div>
      <div className="py-2 text-right hidden md:block text-xs">
        Created by Koga Secondary School - The 7th Keyaki Fes IT management
        dept. View source on{" "}
        <a
          href="https://github.com/keyaki-fes/markdown-editor"
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          Github
        </a>
      </div>
    </div>
  );
}

/*export async function getServerSideProps() {
  //const data = fs.readFileSync(url("/contents/help.md"), "utf8");
  const content = "現在工事中です";
  return {
    props: {
      content,
    },
  };
}*/
