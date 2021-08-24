self.skipWaiting();
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('newspapers').then(function(cache) {
     return cache.addAll([
       './',
       'index.html',
       'images/192x192.png',
       'images/256x256.png',
       'images/384x384.png',
       'images/512x512.png',
       'https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&amp;display=swap',
       'https://shahfahad19.github.io/newspapers/src/urdufont.ttf'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});