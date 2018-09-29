
self.addEventListener("install", function (e){
    e.waitUntil(
            caches.open("RestaurantReview").then((cache)=>{

                return cache.addAll([
                  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                  'https://unpkg.com/leaflet@1.3.1/dist/images/marker-icon.png',
                  "https://unpkg.com/leaflet@1.3.1/dist/images/marker-shadow.png",
                  './css/styles.css',
                  './js/dbhelper.js',
                  './js/main.js',
                  './js/restaurant_info.js',
                  './img/1.jpg',
                  './img/2.jpg',
                  './img/3.jpg',
                  './img/4.jpg',
                  './img/5.jpg',
                  './img/6.jpg',
                  './img/7.jpg',
                  './img/8.jpg',
                  './img/9.jpg',
                  './img/10.jpg',
                  './data/restaurants.json',
                  './',
                  './index.html',
                  './restaurant.html'
                  ])
            }).then(() => console.log("File Assets Cached"))
            .catch((error) => console.log("There was an issue with the cacheing") || console.log(error))
    );
});

self.addEventListener("fetch", function(e){

    e.respondWith(

        caches.match(e.request).then((response)=>{
            if(response){
                console.log("Response Gotten from the Cache!");
                return response;
            }

            return  console.log("So Fetch") || fetch(e.request);

        })
    )
});