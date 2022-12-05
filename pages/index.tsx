import Head from "next/head";
import { useForm } from "react-hook-form";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";
import { useEffect, useLayoutEffect, useState, useCallback } from "react";
import { saveAs } from "file-saver";
import { url } from "../utils/config";

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

  const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files != null && files[0]) {
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

  function addTag(tag: string) {
    let content = document.querySelector("textarea");

    if (!content) {
      return;
    }

    let sentence = content.value;
    let len = sentence.length;
    let pos = content.selectionStart;
    let last = content.selectionEnd;

    let before = sentence.substring(0, pos);
    let word = "";
    switch (tag) {
      case "bold":
        word = "**";
        break;
      case "italic":
        word = "*";
        break;
      case "strikethrough":
        word = "~~";
        break;
      case "inlinecode":
        word = "`";
        break;
      case "link":
        word = "[]()";
        break;
      case "image":
        word = "![]()";
        break;
      case "backquote":
        word = "> ";
        break;
      case "codeblock":
        word = "```\n\n```";
        break;
      case "ul":
        word = "- ";
        break;
      case "ol":
        word = "1. ";
        break;
      case "hr":
        word = "---";
        break;
      case "h1":
        word = "# ";
        break;
      case "h2":
        word = "## ";
        break;
      default:
        break;
    }

    if (last == pos) {
      sentence = before + word + sentence.substring(last, len);
    } else {
      sentence =
        before +
        word +
        sentence.substring(pos, last) +
        word +
        sentence.substring(last, len);
    }

    content.value = sentence;
    content.focus();
    content.setSelectionRange(
      pos + word.length + (last - pos),
      pos + word.length + (last - pos)
    );
  }

  function resetText() {
    localStorage.removeItem("value");
    reset({ body: "" });
    let content = document.querySelector("textarea");

    if (!content) {
      return;
    }
    content.value = "";
  }

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
    <div className="md:px-8 px-4 bg-[#F1F2F6]  w-screen h-screen flex flex-col">
      <Head>
        <title>Keyaki Fes Markdown Editor</title>
        <meta
          name="description"
          content="けやき祭IT管理部が開発したマークダウンエディタです"
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
        <label className="hidden sm:block ml-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
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
          className="hidden sm:block ml-2 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          Download
        </button>
        <button
          onClick={() => {
            setIsPreview(!isPreview);
          }}
          className={`${
            width < 1024 ? "" : "hidden"
          } ml-auto sm:ml-2 drop-shadow-[0_10px_10px_rgba(29,78,216,0.20)] w-24 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-slate-100 py-2 px-2 rounded items-center`}
        >
          {isPreview ? <>Edit</> : <>Preview</>}
        </button>
      </div>
      <div className="flex sm:hidden">
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
      </div>
      <div className="lg:grid gap-6 grid-cols-2 flex-auto overflow-y-scroll pt-4 pb-2">
        <div
          className={`${
            isPreview && width < 1024 ? "hidden" : ""
          } h-full w-full flex flex-col gap-2`}
        >
          <div className="rounded-md w-full text-sm gap-2  py-2 px-6 flex flex-row bg-white">
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("bold");
              }}
            >
              <img src={url("/format_bold_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("italic");
              }}
            >
              <img src={url("/format_italic_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("inlinecode");
              }}
            >
              <img src={url("/code_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("codeblock");
              }}
            >
              <img src={url("/code_blocks_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("link");
              }}
            >
              <img src={url("/link_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("image");
              }}
            >
              <img src={url("/image_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("ul");
              }}
            >
              <img src={url("/list_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("ol");
              }}
            >
              <img
                src={url(
                  "/format_list_numbered_FILL0_wght400_GRAD0_opsz48.svg"
                )}
              />
            </div>
            <div
              className="hover:bg-blue-300 p-0.5 h-6 w-6 rounded"
              onClick={() => {
                addTag("backquote");
              }}
            >
              <img src={url("/format_quote_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              onClick={() => {
                resetText();
              }}
              className="p-0.5 h-6 w-6 rounded ml-auto hover:bg-blue-300 hover:text-slate-400 cursor-pointer"
            >
              <img src={url("/restart_alt_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
            <div
              onClick={() => {
                copyText();
              }}
              className="p-0.5 h-6 w-6 rounded hover:bg-blue-300 hover:text-slate-400 cursor-pointer text-sm"
            >
              <img src={url("/file_copy_FILL0_wght400_GRAD0_opsz48.svg")} />
            </div>
          </div>

          <div className="bg-white h-full w-full px-6 pt-4 pb-10 bg-white rounded-md">
            <textarea
              id="body"
              spellCheck="false"
              className="overflow-y-scroll hidden-scrollbar h-full w-full resize-none focus:outline-none bg-white w-full h-full rounded-md text-gray-900"
              {...register("body")}
            ></textarea>
            <div className="text-right text-sm text-slate-300">
              {contents.body?.trim().length}word
              {contents.body?.trim().length > 2 ? "s" : ""}
            </div>
          </div>
        </div>

        <div
          className={`${
            !isPreview && width < 1024 ? "hidden" : ""
          } overflow-y-scroll  overflow-x-scroll znc px-6 py-10  rounded-md h-full w-full bg-white  text-gray-900`}
        >
          <p
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(contents.body || ""),
            }}
          ></p>
        </div>
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
