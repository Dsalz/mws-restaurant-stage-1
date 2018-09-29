
self.addEventListener("fetch", function(e){

    e.respondWith(
        //checking if a response to the current request has been cached previously
        caches.match(e.request).then((response)=>{

          //Returning the response if there is one
            if(response){
                return response;
            }
            //Fetching and cacheing the response before returning it if there isnt one
            fetch(e.request).then((response) => {
                caches.open("RestaurantReview").then((cache) =>{
                    cache.put(e.request, response);
                    return response;
                })
            })

        })
    )
});