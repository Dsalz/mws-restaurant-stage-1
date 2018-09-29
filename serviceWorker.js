
self.addEventListener("install", function (e){
    e.waitUntil(
            caches.open("RestaurantReview").then((cache)=>{
                // return cache.addAll([
                // 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                // 'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                // '/mws-restaurant-stage-1/css/styles.css',
                // '/mws-restaurant-stage-1/',
                // '/mws-restaurant-stage-1/js/dbhelper.js',
                // '/mws-restaurant-stage-1/js/main.js',
                // '/mws-restaurant-stage-1/js/restaurant_info.js',
                // '/mws-restaurant-stage-1/img/1.jpg',
                // '/mws-restaurant-stage-1/img/2.jpg',
                // '/mws-restaurant-stage-1/img/3.jpg',
                // '/mws-restaurant-stage-1/img/4.jpg',
                // '/mws-restaurant-stage-1/img/5.jpg',
                // '/mws-restaurant-stage-1/img/6.jpg',
                // '/mws-restaurant-stage-1/img/7.jpg',
                // '/mws-restaurant-stage-1/img/8.jpg',
                // '/mws-restaurant-stage-1/img/9.jpg',
                // '/mws-restaurant-stage-1/img/10.jpg',
                // '/mws-restaurant-stage-1/data/restaurants.json',
                // '/mws-restaurant-stage-1/index.html',
                // '/mws-restaurant-stage-1/restaurant.html'
                // ])

                return cache.addAll([
                  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
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
                console.log(response);
                return response;
            }

            return console.log("Fetching Response") || fetch(e.request);

        })
    )
});