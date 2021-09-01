const pakNewspapers = "pak-newspapers";
const assets = [
  "/",
  "/index.html",
  "/src/urdufont.ttf",
  "/src/jquery.min.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(pakNewspapers).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
