(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{14186:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return b}});var s=l(85893),n=l(9008),a=l.n(n),r=l(87536),o=l(13654);l(82207);var i=l(67294),d=l(93162),c=l(50639),m=l(84539),x=l(20728),u=l(41664),h=l.n(u);let g=()=>{let[e,t]=(0,i.useState)([0,0]);return(0,i.useLayoutEffect)(()=>{let e=()=>{t([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e};function b(){var e,t;let[l,n]=(0,i.useState)(null),[u,b]=(0,i.useState)(!1),[f,v]=(0,i.useState)(!1);function p(){v(!1)}let y=async e=>{let t=e.target.files;if(null!=t&&t[0]){let l=t[0],s=new FileReader;s.readAsText(l),s.onload=()=>{n(s.result)}}},{register:w,watch:j,reset:k,formState:{errors:_}}=(0,r.cI)(),N={body:j("body"),title:j("title")};function L(e){let t=N.body;if(!t)return;let l=t.length,s=document.querySelector("textarea");if(!s)return;let n=s.selectionStart,a=s.selectionEnd,r=t.substring(0,n),o="";switch(e){case"bold":o="**";break;case"italic":o="*";break;case"strikethrough":o="~~";break;case"inlinecode":o="`";break;case"link":o="[]()";break;case"image":o="![]()";break;case"backquote":o="> ";break;case"codeblock":o="```\n\n```";break;case"ul":o="- ";break;case"ol":o="1. ";break;case"hr":o="---";break;case"h1":o="# ";break;case"h2":o="## "}k({body:t=a==n?r+o+t.substring(a,l):r+o+t.substring(n,a)+o+t.substring(a,l)}),s.focus(),s.setSelectionRange(n+o.length+(a-n),n+o.length+(a-n))}async function F(){let e=new Blob([N.body],{type:"text/markdown"}),t=N.title?N.title:"markdown".concat(new Date().toLocaleDateString());(0,d.saveAs)(e,"".concat(t,".md"))}async function C(){let e=(0,o.ZP)(N.body),t=new Blob([e],{type:"text/html"}),l=N.title?N.title:"markdown".concat(new Date().toLocaleDateString());(0,d.saveAs)(t,"".concat(l,".html"))}(0,i.useEffect)(()=>{var e;(null===(e=N.body)||void 0===e?void 0:e.length)>0&&localStorage.setItem("value",N.body)},[N.body]),(0,i.useEffect)(()=>{localStorage.getItem("value")&&k({body:localStorage.getItem("value")})},[]);let[I,S]=g();return(0,i.useEffect)(()=>{l&&k({body:l})},[l]),(0,s.jsxs)("div",{className:"absolte top-0 left-0 md:px-8 px-4 bg-[#F1F2F6] w-screen h-screen flex flex-col",children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Keyaki Fes Markdown Editor"}),(0,s.jsx)("meta",{name:"description",content:"けやき祭IT管理部が開発したマークダウンエディタです"}),(0,s.jsx)("link",{rel:"icon",href:(0,c.H)("/favicon.ico")})]}),(0,s.jsxs)("div",{className:"flex-row flex py-3",children:[(0,s.jsx)("img",{src:(0,c.H)("/icon.png"),className:"w-10 h-10 mr-2"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-sm text-gray-900 font-medium leading-none",children:"KEYAKI FES"}),(0,s.jsx)("div",{className:"text-2xl text-gray-900 font-bold leading-none",children:"Markdown Editor"})]}),(0,s.jsxs)("label",{className:"hidden sm:block ml-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:["Upload",(0,s.jsx)("input",{type:"file",name:"upload",accept:".md",onChange:y,className:"hidden"})]}),(0,s.jsx)("button",{onClick(){v(!0)},className:"hidden sm:block ml-2 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:"Download"}),(0,s.jsx)("button",{onClick(){b(!u)},className:"".concat(I<1024?"":"hidden"," ml-auto sm:ml-2 drop-shadow-[0_10px_10px_rgba(29,78,216,0.20)] w-24 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-slate-100 py-2 px-2 rounded items-center"),children:u?(0,s.jsx)(s.Fragment,{children:"Edit"}):(0,s.jsx)(s.Fragment,{children:"Preview"})})]}),(0,s.jsxs)("div",{className:"flex sm:hidden",children:[(0,s.jsxs)("label",{className:"ml-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:["Upload",(0,s.jsx)("input",{type:"file",name:"upload",accept:".md",onChange:y,className:"hidden"})]}),(0,s.jsx)("button",{onClick(){v(!0)},className:"ml-2 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:"Download"})]}),(0,s.jsxs)("div",{className:"lg:grid gap-6 grid-cols-2 flex-auto overflow-y-scroll pt-4 pb-2",children:[(0,s.jsxs)("div",{className:"".concat(u&&I<1024?"hidden":""," h-full w-full flex flex-col gap-2"),children:[(0,s.jsxs)("div",{className:"rounded-md w-full text-sm gap-2 py-2 px-6 flex flex-row bg-white",children:[(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("bold")},children:(0,s.jsx)("img",{src:(0,c.H)("/format_bold_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("italic")},children:(0,s.jsx)("img",{src:(0,c.H)("/format_italic_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("inlinecode")},children:(0,s.jsx)("img",{src:(0,c.H)("/code_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("codeblock")},children:(0,s.jsx)("img",{src:(0,c.H)("/code_blocks_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("link")},children:(0,s.jsx)("img",{src:(0,c.H)("/link_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("image")},children:(0,s.jsx)("img",{src:(0,c.H)("/image_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("ul")},children:(0,s.jsx)("img",{src:(0,c.H)("/list_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("ol")},children:(0,s.jsx)("img",{src:(0,c.H)("/format_list_numbered_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){L("backquote")},children:(0,s.jsx)("img",{src:(0,c.H)("/format_quote_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{onClick(){let e;localStorage.removeItem("value"),k({body:""}),(e=document.querySelector("textarea"))&&(e.value="")},className:"p-0.5 h-6 w-6 rounded ml-auto hover:bg-blue-300 hover:text-slate-400 cursor-pointer",children:(0,s.jsx)("img",{src:(0,c.H)("/restart_alt_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,s.jsx)("div",{onClick(){navigator.clipboard.writeText(N.body)},className:"p-0.5 h-6 w-6 rounded hover:bg-blue-300 hover:text-slate-400 cursor-pointer text-sm",children:(0,s.jsx)("img",{src:(0,c.H)("/file_copy_FILL0_wght400_GRAD0_opsz48.svg")})})]}),(0,s.jsxs)("div",{className:"bg-white h-full w-full px-6 pt-4 pb-10 bg-white rounded-md",children:[(0,s.jsx)("textarea",{id:"body",spellCheck:"false",className:"overflow-y-scroll hidden-scrollbar h-full w-full resize-none focus:outline-none bg-white text-gray-900",...w("body")}),(0,s.jsxs)("div",{className:"text-right text-sm text-slate-300",children:[null===(e=N.body)||void 0===e?void 0:e.trim().length,"word",(null===(t=N.body)||void 0===t?void 0:t.trim().length)>2?"s":""]})]})]}),(0,s.jsx)("div",{className:"".concat(!u&&I<1024?"hidden":""," overflow-y-scroll  overflow-x-scroll znc px-6 py-10  rounded-md h-full w-full bg-white  text-gray-900"),children:(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:(0,o.ZP)(N.body||"")}})})]}),(0,s.jsxs)("div",{className:"flex flex-row",children:[(0,s.jsx)(h(),{href:"/help",className:"text-blue-500 hover:text-blue-600 text-xs py-2",children:"help"}),(0,s.jsxs)("div",{className:"ml-auto py-2 text-right hidden md:block text-xs",children:["Created by Koga Secondary School - The 7th Keyaki Fes IT management dept. View source on"," ",(0,s.jsx)(h(),{href:"https://github.com/keyaki-fes/markdown-editor",className:"text-blue-500 hover:text-blue-600 hover:underline",children:"Github"})]})]}),(0,s.jsx)(m.u,{appear:!0,show:f,as:i.Fragment,children:(0,s.jsxs)(x.V,{as:"div",className:"relative z-10",onClose:p,children:[(0,s.jsx)(m.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,s.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,s.jsx)(m.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,s.jsxs)(x.V.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,s.jsx)(x.V.Title,{as:"h3",className:"mx-1 text-lg font-medium leading-6 text-gray-900",children:"ダウンロード"}),(0,s.jsx)("div",{className:"mt-2 mx-1",children:(0,s.jsx)("p",{className:"text-sm text-gray-500",children:"作成したファイルをダウンロードできます。ファイルタイプが表示されたボタンをクリックするとダウンロードが始まります。"})}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("input",{type:"text",placeholder:"ファイル名を入力してください",...w("title"),className:"mx-1 bg-white rounded-md px-2 py-2 w-full border border-gray-200 text-sm focus:outline-none"})}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsxs)("div",{className:"mt-1 flex items-center rounded-md p-1.5 transition duration-100 ease-in-out hover:bg-blue-50 cursor-pointer",onClick(){F()},children:[(0,s.jsx)("div",{className:"text-sm flex h-10 w-10 shrink-0 items-center justify-center text-blue-500 font-bold bg-blue-100 rounded-lg",children:"md"}),(0,s.jsx)("div",{className:"ml-4",children:(0,s.jsx)("p",{className:"text-lg font-medium text-gray-700",children:"Markdown"})})]}),(0,s.jsxs)("div",{className:"mt-1 flex items-center rounded-md p-1.5 transition duration-100 ease-in-out hover:bg-yellow-50 cursor-pointer",onClick(){C()},children:[(0,s.jsx)("div",{className:"text-sm flex h-10 w-10 shrink-0 items-center justify-center text-yellow-500 font-bold bg-yellow-100 rounded-lg",children:"html"}),(0,s.jsx)("div",{className:"ml-4",children:(0,s.jsx)("p",{className:"text-lg font-medium text-gray-700",children:"HTML"})})]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:p,children:"キャンセル"})})]})})})})]})})]})}},50639:function(e,t,l){"use strict";l.d(t,{H:function(){return a}});var s=l(11752),n=l.n(s);function a(e){let{publicRuntimeConfig:t}=n()();return t.urlPrefix+e}},22868:function(){},14777:function(){},99830:function(){},70209:function(){}}]);