// self.addEventListener('install', (e) => {
//     e.waitUntil(
//       caches.open('fox-store').then((cache) => cache.addAll([
//         '../orderly.html',
//         'index.js',
//         'main.js',
//         '../styles/style.css',
//       ])),
//     );
//   });

//   self.addEventListener('fetch', (e) => {
//     console.log(e.request.url);
//     e.respondWith(
//       caches.match(e.request).then((response) => response || fetch(e.request)),
//     );
//   });

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image', 
  // new workbox.strategies.CacheFirst()
  new workbox.strategies.NetworkFirst()
)
