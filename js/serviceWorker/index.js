
// self.addEventListener("install", function (e){
//     e.waitUntil(
//             caches.open("RestaurantReview"),
//     );
// });

self.addEventListener("fetch", function(e){

    e.respondWith(

        caches.match(e.request).then((response)=>{
            if(response){
                return response;
            }

            fetch(e.request).then((response) => {
                caches.open("RestaurantReview").then((cache) =>{
                    cache.put(e.request, response);
                    return response;
                })
            })

        })
    )
});