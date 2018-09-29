
self.addEventListener("install", function (e){
    e.waitUntil(
            caches.open("RestaurantReview").then((cache)=>{
                cache.addAll([
                '/mws-restaurant-stage-1/',
                '/mws-restaurant-stage-1/js/dbhelper.js',
                '/mws-restaurant-stage-1/js/main.js',
                '/mws-restaurant-stage-1/js/restaurant_info.js',
                '/mws-restaurant-stage-1/css/styles.css',
                '/mws-restaurant-stage-1/img/1.jpg',
                '/mws-restaurant-stage-1/img/2.jpg',
                '/mws-restaurant-stage-1/img/3.jpg',
                '/mws-restaurant-stage-1/img/4.jpg',
                '/mws-restaurant-stage-1/img/5.jpg',
                '/mws-restaurant-stage-1/img/6.jpg',
                '/mws-restaurant-stage-1/img/7.jpg',
                '/mws-restaurant-stage-1/img/8.jpg',
                '/mws-restaurant-stage-1/img/9.jpg',
                '/mws-restaurant-stage-1/img/10.jpg',
                '/mws-restaurant-stage-1/img/food.png',
                '/mws-restaurant-stage-1/img/Icon-96.png',
                '/mws-restaurant-stage-1/img/Icon-192.png',
                '/mws-restaurant-stage-1/img/Icon-512.png',
                '/mws-restaurant-stage-1/data/restaurants.json',
                '/mws-restaurant-stage-1/manifest.json',
                '/mws-restaurant-stage-1/index.html',
                '/mws-restaurant-stage-1/restaurant.html',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                'https://damola.cf/mws-restaurant-stage-1/data/restaurants.json'
                ])
            }),then(() => console.log("logging ting"))
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('Rest') &&
                   cacheName != "RestaurantReview";
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
  return response || fetch(event.request);
      })
    );
});





// self.addEventListener("fetch", function(e){

//     e.respondWith(

//         caches.match(e.request).then((response)=>{
//             if(response){
//                 console.log("got One")
//                 return response;
//             }

//             fetch(e.request).then((response) => {
//                 caches.open("RestaurantReview").then((cache) =>{
//                     cache.put(e.request, response);
//                     console.log("got One now")
//                     return response;
//                 })
//             })

//         })
//     )
// });