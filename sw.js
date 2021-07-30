/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "icons/icon-144x144.png",
    "revision": "7f47e8b815b45988b5b3a7ac2070b811"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "e901a03f12ca37a76bc1c52c136fd757"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "6d22e9de4d4ab3044398263d903716a4"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "869198f3ce80e385992e6cd25de9aa1c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "e5750d2189a8fa0fa9e1f47cbb09ea3e"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "0de43592593b1e8c980d515ca3174167"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "5ee3a522ad6797f94ce764564b73a31d"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "e3236a87558f05fec14879a61b5e2266"
  },
  {
    "url": "framework-d995d79d3ecc8bd1a83d.js"
  },
  {
    "url": "app-cfd20c81fc70caeb0841.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "20b0df5bc46fbc13e4ab3af9234f88d6"
  },
  {
    "url": "webpack-runtime-5d098ece859f4409a16e.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-8c3eac79cc32a4623e0a.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "350fbc5b8a23486aeac24b2f0d259b75"
  },
  {
    "url": "polyfill-496f4c8769d3a712231d.js"
  },
  {
    "url": "styles.607f204ee7558054229f.css"
  },
  {
    "url": "21c26070e29f402fa47864e61054b9c8f446eb63-68b4dcd7baf674e9989a.js"
  },
  {
    "url": "component---src-pages-404-tsx-47a3762f92e019cf4013.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "8a41671ef7c7cc05a607910227fa033d"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "bda88f30c74c21366dc9634b3f174377"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "a1ff82a7c4a8449469bcd32624381375"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "c9dd5ecdc7dfe42a428e9c805bb9ec06"
  },
  {
    "url": "component---src-templates-section-tsx-36210adbf839a8726e27.js"
  },
  {
    "url": "page-data/chapter_1/page-data.json",
    "revision": "8267b283c2b46b972fda3162b8a6225c"
  },
  {
    "url": "page-data/chapter_2/page-data.json",
    "revision": "c348b87c7036808a383100df607d1e97"
  },
  {
    "url": "component---src-pages-index-tsx-ed21e909200869ce0c16.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9e30271249e6250b39a2c79f6e61b908"
  },
  {
    "url": "component---src-pages-page-two-tsx-cb5dd76af54064507051.js"
  },
  {
    "url": "page-data/page-two/page-data.json",
    "revision": "5fcd178537ef7c439905fab80fca3d87"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "4662bda9186c60339afa223c3d16f94a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/gatsby-starter-paaw-basic`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/gatsby-starter-paaw-basic/app-cfd20c81fc70caeb0841.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/gatsby-starter-paaw-basic/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
