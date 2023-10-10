let cacheName = "appV1";
let assets = [
  "http://localhost:8000/products",
  "https://images.pexels.com/photos/532173/pexels-photo-532173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5185146/pexels-photo-5185146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/635705/pexels-photo-635705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1694830/pexels-photo-1694830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "/static/js/bundle.js",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/static/js/src_components_NotFound_jsx.chunk.js",
  "/static/js/src_components_MyNavbar_jsx.chunk.js",
  "/static/js/src_components_index_js.chunk.js",
  "/static/js/src_components_Home_jsx.chunk.js",
  "/static/js/src_components_Cart_jsx.chunk.js",
  "/static/js/src_components_Products_index_js.chunk.js",
  "/static/js/src_components_Products_ProductDetails_jsx.chunk.js",
  "/static/js/src_components_Products_ProductCard_jsx.chunk.js",
  "/static/js/src_components_Products_ProductForm_jsx.chunk.js",
  "/static/js/src_components_Products_Products_jsx.chunk.js",
  "/index.html",
  "/bootstrap/min/css",
  "/bootstrap/min/js",
  "/products",
  "/cart",
  "/",
];

this.addEventListener("install", async (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assets)));
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) return result;
        fetch(event.request);
      })
    );
  }
});
