import Head from "next/head";
import { useForm } from "react-hook-form";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";
import { useEffect, useLayoutEffect, useState, useCallback } from "react";
import { saveAs } from "file-saver";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export default function Home() {
  const [file, setFile] = useState<null | any>(null);
  const [isPreview, setIsPreview] = useState(false);

  const onChangeFile = async (e) => {
    const files = e.target.files;
    if (files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        setFile(reader.result);
      };
    }
  };

  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  let contents = {
    body: watch("body"),
  };

  useEffect(() => {
    if (contents.body?.length > 0) {
      localStorage.setItem("value", contents.body);
    }
  }, [contents.body]);

  useEffect(() => {
    if (localStorage.getItem("value")) {
      reset({ body: localStorage.getItem("value") });
    }
  }, []);

  async function download() {
    const blob = new Blob([contents.body], {
      type: "text/markdown",
    });
    const title = `markdown${new Date().toLocaleDateString()}`;
    saveAs(blob, `${title}.md`);
  }

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (file) {
      reset({ body: file });
    }
  }, [file]);

  function copyText() {
    navigator.clipboard.writeText(contents.body);
  }

  return (
    <div className="md:px-8 px-4 bg-sky-100/50 w-screen h-screen flex flex-col">
      <Head>
        <title>Keyaki Fes Markdown Editor</title>
        <meta
          name="description"
          content="けやき祭IT管理部が開発したマークダウンエディタです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sm:flex py-3">
        <div>
          <div className="text-sm text-gray-900 font-medium leading-none">
            KEYAKI FES
          </div>
          <div className="text-2xl text-gray-900 font-bold leading-none">
            Markdown Editor
          </div>
        </div>
        <label className="ml-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          Upload
          <input
            type="file"
            name="upload"
            accept=".md"
            onChange={onChangeFile}
            className="hidden"
          />
        </label>
        <button
          onClick={() => {
            download();
          }}
          className="ml-2 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Download
        </button>
        <button
          onClick={() => {
            setIsPreview(!isPreview);
          }}
          className={`${
            width < 1024 ? "" : "hidden"
          } ml-2 drop-shadow-[0_10px_10px_rgba(29,78,216,0.20)] w-24 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-slate-100 py-2 px-2 rounded items-center`}
        >
          {isPreview ? <>Edit</> : <>Preview</>}
        </button>
      </div>
      <div className="lg:grid gap-6 grid-cols-2 flex-auto overflow-y-scroll py-4">
        <div
          className={`${
            isPreview && width < 1024 ? "hidden" : ""
          } relative px-6 py-10 shadow-xl rounded-md h-full w-full bg-white`}
        >
          <div
            onClick={() => {
              copyText();
            }}
            className="text-slate-300 rounded-tr-md px-2 py-1 hover:bg-slate-100/50 hover:text-slate-400 cursor-pointer text-sm absolute top-0 right-0"
          >
            copy
          </div>
          <textarea
            id="body"
            className="overflow-y-scroll hidden-scrollbar h-full w-full resize-none focus:outline-none bg-white w-full h-full rounded-md text-gray-900"
            {...register("body")}
          ></textarea>
          <div className="text-right text-sm text-slate-300">
            {contents.body?.trim().length}word
            {contents.body?.trim().length > 2 ? "s" : ""}
          </div>
        </div>
        <div
          className={`${
            !isPreview && width < 1024 ? "hidden" : ""
          } overflow-y-scroll  overflow-x-scroll znc px-6 py-10 shadow-xl rounded-md h-full w-full bg-white text-gray-900`}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(contents.body || ""),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
