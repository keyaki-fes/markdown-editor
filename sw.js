if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const o=e=>r(e,i),c={module:{uri:i},exports:t,require:o};s[i]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-_Wf9VqsTl-AmHEYh5Vfwx.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_offline",revision:"_Wf9VqsTl-AmHEYh5Vfwx"},{url:"/markdown-editor/_next/static/_Wf9VqsTl-AmHEYh5Vfwx/_buildManifest.js",revision:"e1b40d8de82f8663927d12def0ca2ce5"},{url:"/markdown-editor/_next/static/_Wf9VqsTl-AmHEYh5Vfwx/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/markdown-editor/_next/static/chunks/638-920bee50e8319690.js",revision:"920bee50e8319690"},{url:"/markdown-editor/_next/static/chunks/895-2fe1d4780c51a6be.js",revision:"2fe1d4780c51a6be"},{url:"/markdown-editor/_next/static/chunks/fec483df-ff52b95efcae3638.js",revision:"ff52b95efcae3638"},{url:"/markdown-editor/_next/static/chunks/framework-36098b990598bc0c.js",revision:"36098b990598bc0c"},{url:"/markdown-editor/_next/static/chunks/main-6712a3f949cc78c1.js",revision:"6712a3f949cc78c1"},{url:"/markdown-editor/_next/static/chunks/pages/_app-3393dd3ced0f66a4.js",revision:"3393dd3ced0f66a4"},{url:"/markdown-editor/_next/static/chunks/pages/_error-409f831d3504c8f5.js",revision:"409f831d3504c8f5"},{url:"/markdown-editor/_next/static/chunks/pages/_offline-4bb906b4b584913e.js",revision:"4bb906b4b584913e"},{url:"/markdown-editor/_next/static/chunks/pages/help-56653326a9cbfdbb.js",revision:"56653326a9cbfdbb"},{url:"/markdown-editor/_next/static/chunks/pages/index-55b050c9626a53ba.js",revision:"55b050c9626a53ba"},{url:"/markdown-editor/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/markdown-editor/_next/static/chunks/webpack-573307368fcfae2d.js",revision:"573307368fcfae2d"},{url:"/markdown-editor/_next/static/css/076749a54284f1c2.css",revision:"076749a54284f1c2"},{url:"/markdown-editor/_next/static/css/c4e34457454f4a6b.css",revision:"c4e34457454f4a6b"},{url:"/markdown-editor/code_FILL0_wght400_GRAD0_opsz48.svg",revision:"c57aa87cd826af3a09ffc298761a3aa3"},{url:"/markdown-editor/code_blocks_FILL0_wght400_GRAD0_opsz48.svg",revision:"6b40f151f96ae667d79c338fa046b905"},{url:"/markdown-editor/favicon.ico",revision:"1b388b654ded75fe99a2a24eef67f182"},{url:"/markdown-editor/file_copy_FILL0_wght400_GRAD0_opsz48.svg",revision:"d56666b24dea27c03882c7041f5cec28"},{url:"/markdown-editor/format_bold_FILL0_wght400_GRAD0_opsz48.svg",revision:"1638ef964203bf1576ff282f666e3cad"},{url:"/markdown-editor/format_italic_FILL0_wght400_GRAD0_opsz48.svg",revision:"5f8754dc0c7ddd9c96ec06ea366dc60d"},{url:"/markdown-editor/format_list_numbered_FILL0_wght400_GRAD0_opsz48.svg",revision:"0de00c09b9bfe9078aa994c50dc1fee8"},{url:"/markdown-editor/format_quote_FILL0_wght400_GRAD0_opsz48.svg",revision:"e917b32cb5697508f8c182fba4af3b41"},{url:"/markdown-editor/help_FILL0_wght400_GRAD0_opsz48.svg",revision:"8191094cb987cb3e239a78200fce2150"},{url:"/markdown-editor/icon-192x192.png",revision:"9fcf5a36a7a762302f28e5bb7d92e184"},{url:"/markdown-editor/icon-256x256.png",revision:"f3ac18a17329c155d92a63bca6676aeb"},{url:"/markdown-editor/icon-384x384.png",revision:"f75a59579e71cfa50a0acb347292d7a8"},{url:"/markdown-editor/icon-512x512.png",revision:"69dafd1bb0c1d75ea4720ebcbd1742ef"},{url:"/markdown-editor/icon.png",revision:"0e2a82b055913415f06cc8b2934c7d71"},{url:"/markdown-editor/image_FILL0_wght400_GRAD0_opsz48.svg",revision:"80489a1833c72e3cdc3c05a501bda340"},{url:"/markdown-editor/link_FILL0_wght400_GRAD0_opsz48.svg",revision:"c5d3ca319f651d72edd65be7327737d9"},{url:"/markdown-editor/list_FILL0_wght400_GRAD0_opsz48.svg",revision:"f6c7f50fdcb942f2f453926ed89ba00e"},{url:"/markdown-editor/manifest.json",revision:"3eeea54aa82914dc983924da61561390"},{url:"/markdown-editor/ogp.png",revision:"62b06deaa3253312cb0da43e028206b5"},{url:"/markdown-editor/restart_alt_FILL0_wght400_GRAD0_opsz48.svg",revision:"786288d8b69701584e949d96ae27fdbc"},{url:"/markdown-editor/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/markdown-editor",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
