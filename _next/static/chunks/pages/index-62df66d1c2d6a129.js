(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{48312:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(67126)}])},67126:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return m}});var t=s(85893),n=s(9008),o=s.n(n),r=s(87536),a=s(13654);s(82207);var i=s(67294),d=s(93162),c=s(11752),u=s.n(c);function h(e){let{publicRuntimeConfig:l}=u()();return l.urlPrefix+e}let g=()=>{let[e,l]=(0,i.useState)([0,0]);return(0,i.useLayoutEffect)(()=>{let e=()=>{l([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),e};function m(){var e,l;let[s,n]=(0,i.useState)(null),[c,u]=(0,i.useState)(!1),m=async e=>{let l=e.target.files;if(null!=l&&l[0]){let s=l[0],t=new FileReader;t.readAsText(s),t.onload=()=>{n(t.result)}}},{register:x,watch:b,reset:v,formState:{errors:f}}=(0,r.cI)(),p={body:b("body")};function w(e){let l=document.querySelector("textarea");if(!l)return;let s=l.value,t=s.length,n=l.selectionStart,o=l.selectionEnd,r=s.substring(0,n),a="";switch(e){case"bold":a="**";break;case"italic":a="*";break;case"strikethrough":a="~~";break;case"inlinecode":a="`";break;case"link":a="[]()";break;case"image":a="![]()";break;case"backquote":a="> ";break;case"codeblock":a="```\n\n```";break;case"ul":a="- ";break;case"ol":a="1. ";break;case"hr":a="---";break;case"h1":a="# ";break;case"h2":a="## "}s=o==n?r+a+s.substring(o,t):r+a+s.substring(n,o)+a+s.substring(o,t),l.value=s,l.focus(),l.setSelectionRange(n+a.length+(o-n),n+a.length+(o-n))}async function _(){let e=new Blob([p.body],{type:"text/markdown"}),l="markdown".concat(new Date().toLocaleDateString());(0,d.saveAs)(e,"".concat(l,".md"))}(0,i.useEffect)(()=>{var e;(null===(e=p.body)||void 0===e?void 0:e.length)>0&&localStorage.setItem("value",p.body)},[p.body]),(0,i.useEffect)(()=>{localStorage.getItem("value")&&v({body:localStorage.getItem("value")})},[]);let[y,k]=g();return(0,i.useEffect)(()=>{s&&v({body:s})},[s]),(0,t.jsxs)("div",{className:"md:px-8 px-4 bg-[#F1F2F6] w-screen h-screen flex flex-col",children:[(0,t.jsxs)(o(),{children:[(0,t.jsx)("title",{children:"Keyaki Fes Markdown Editor"}),(0,t.jsx)("meta",{name:"description",content:"けやき祭IT管理部が開発したマークダウンエディタです"}),(0,t.jsx)("link",{rel:"icon",href:h("/favicon.ico")})]}),(0,t.jsxs)("div",{className:"flex-row flex py-3",children:[(0,t.jsx)("img",{src:h("/icon.png"),className:"w-10 h-10 mr-2"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm text-gray-900 font-medium leading-none",children:"KEYAKI FES"}),(0,t.jsx)("div",{className:"text-2xl text-gray-900 font-bold leading-none",children:"Markdown Editor"})]}),(0,t.jsxs)("label",{className:"hidden sm:block ml-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:["Upload",(0,t.jsx)("input",{type:"file",name:"upload",accept:".md",onChange:m,className:"hidden"})]}),(0,t.jsx)("button",{onClick(){_()},className:"hidden sm:block ml-2 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:"Download"}),(0,t.jsx)("button",{onClick(){u(!c)},className:"".concat(y<1024?"":"hidden"," ml-auto sm:ml-2 drop-shadow-[0_10px_10px_rgba(29,78,216,0.20)] w-24 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-slate-100 py-2 px-2 rounded items-center"),children:c?(0,t.jsx)(t.Fragment,{children:"Edit"}):(0,t.jsx)(t.Fragment,{children:"Preview"})})]}),(0,t.jsxs)("div",{className:"flex sm:hidden",children:[(0,t.jsxs)("label",{className:"ml-auto bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:["Upload",(0,t.jsx)("input",{type:"file",name:"upload",accept:".md",onChange:m,className:"hidden"})]}),(0,t.jsx)("button",{onClick(){_()},className:"ml-2 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center",children:"Download"})]}),(0,t.jsxs)("div",{className:"lg:grid gap-6 grid-cols-2 flex-auto overflow-y-scroll pt-4 pb-2",children:[(0,t.jsxs)("div",{className:"".concat(c&&y<1024?"hidden":""," h-full w-full flex flex-col gap-2"),children:[(0,t.jsxs)("div",{className:"rounded-md w-full text-sm gap-2 py-2 px-6 flex flex-row bg-white",children:[(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("bold")},children:(0,t.jsx)("img",{src:h("/format_bold_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("italic")},children:(0,t.jsx)("img",{src:h("/format_italic_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("inlinecode")},children:(0,t.jsx)("img",{src:h("/code_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("codeblock")},children:(0,t.jsx)("img",{src:h("/code_blocks_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("link")},children:(0,t.jsx)("img",{src:h("/link_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("image")},children:(0,t.jsx)("img",{src:h("/image_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("ul")},children:(0,t.jsx)("img",{src:h("/list_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("ol")},children:(0,t.jsx)("img",{src:h("/format_list_numbered_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{className:"hover:bg-blue-300 p-0.5 h-6 w-6 rounded",onClick(){w("backquote")},children:(0,t.jsx)("img",{src:h("/format_quote_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{onClick(){let e;localStorage.removeItem("value"),v({body:""}),(e=document.querySelector("textarea"))&&(e.value="")},className:"p-0.5 h-6 w-6 rounded ml-auto hover:bg-blue-300 hover:text-slate-400 cursor-pointer",children:(0,t.jsx)("img",{src:h("/restart_alt_FILL0_wght400_GRAD0_opsz48.svg")})}),(0,t.jsx)("div",{onClick(){navigator.clipboard.writeText(p.body)},className:"p-0.5 h-6 w-6 rounded hover:bg-blue-300 hover:text-slate-400 cursor-pointer text-sm",children:(0,t.jsx)("img",{src:h("/file_copy_FILL0_wght400_GRAD0_opsz48.svg")})})]}),(0,t.jsxs)("div",{className:"bg-white h-full w-full px-6 pt-4 pb-10 bg-white rounded-md",children:[(0,t.jsx)("textarea",{id:"body",spellCheck:"false",className:"overflow-y-scroll hidden-scrollbar h-full w-full resize-none focus:outline-none bg-white w-full h-full rounded-md text-gray-900",...x("body")}),(0,t.jsxs)("div",{className:"text-right text-sm text-slate-300",children:[null===(e=p.body)||void 0===e?void 0:e.trim().length,"word",(null===(l=p.body)||void 0===l?void 0:l.trim().length)>2?"s":""]})]})]}),(0,t.jsx)("div",{className:"".concat(!c&&y<1024?"hidden":""," overflow-y-scroll  overflow-x-scroll znc px-6 py-10  rounded-md h-full w-full bg-white  text-gray-900"),children:(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:(0,a.ZP)(p.body||"")}})})]}),(0,t.jsxs)("div",{className:"py-2 text-right hidden md:block text-xs",children:["Created by Koga Secondary School - The 7th Keyaki Fes IT management dept. View source on"," ",(0,t.jsx)("a",{href:"https://github.com/keyaki-fes/markdown-editor",className:"text-blue-500 hover:text-blue-600 hover:underline",children:"Github"})]})]})}},22868:function(){},14777:function(){},99830:function(){},70209:function(){}},function(e){e.O(0,[714,593,774,888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);