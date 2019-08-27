importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6e6f2879affea38e7e8f.js",
    "revision": "d7cf092ea2335cf9a5916badc14c8181"
  },
  {
    "url": "/_nuxt/8fa485b0734a529b377b.js",
    "revision": "4ac98d9e2f405186d6b65b5b13554775"
  },
  {
    "url": "/_nuxt/98896601d983d832fded.js",
    "revision": "bdbb919b3e488f543ded7ef8203244b5"
  },
  {
    "url": "/_nuxt/9d58eb90af7345271493.js",
    "revision": "7639196a33f92ae22a6af885b8c1e448"
  },
  {
    "url": "/_nuxt/abae70e425a2099564a1.js",
    "revision": "5081bffa97251012196efc483539da25"
  },
  {
    "url": "/_nuxt/bdbfc0712f417f3b63dc.js",
    "revision": "a39b6f145e356d9a75b3b430f2ac027c"
  },
  {
    "url": "/_nuxt/d3d4a1937294104773aa.js",
    "revision": "97b55f28f9323970674bd47419f5d887"
  },
  {
    "url": "/_nuxt/d3d78a653514383258f6.js",
    "revision": "fe77b97725f1bc1cadacc240b00f9e56"
  },
  {
    "url": "/_nuxt/e91328e1c23709ff914e.js",
    "revision": "04b64e398a0516b9e531abdccdd496cd"
  },
  {
    "url": "/_nuxt/ee97e0ecbcf2f012118c.js",
    "revision": "2e4517f4ee99930e0d51ca60637ca50a"
  }
], {
  "cacheId": "devfest-women",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
