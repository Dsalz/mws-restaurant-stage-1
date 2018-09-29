
// self.addEventListener("install", function (e){
//     e.waitUntil(
//             caches.open("RestaurantReview").then((cache)=>{
//                 cache.addAll([

//                 ])
//             })
//     );
// });

self.addEventListener("fetch", function(e){

    e.respondWith(

        caches.match(e.request).then((response)=>{
            if(response){
                console.log("got One")
                return response;
            }

            fetch(e.request).then((response) => {
                caches.open("RestaurantReview").then((cache) =>{
                    cache.put(e.request, response);
                    console.log("got One now")
                    return response;
                })
            })

        })
    )
});