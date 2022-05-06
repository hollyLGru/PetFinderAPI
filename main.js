let button = document.getElementById("button")
let pic = document.getElementById("photo")

button.addEventListener('click', function(){
    let promise = fetch("https://dog.ceo/api/breeds/image/random").then(function(resp){
        return resp.json()
    }).then(function(json){
        // do something with the json payload
        let dog = json
        let photoURL = dog.message
        let img = document.getElementById("photo");
        img.src = photoURL;
        
        
    })
})

button.addEventListener('click', function(){
    let promise = fetch("https://random-data-api.com/api/name/random_name").then(function(resp){
        return resp.json()
    }).then(function(json){
        // do something with the json payload
        let nameJson = json;
        let name = nameJson.name;
        let h1 = document.getElementById("name");
        h1.innerText = name;
    })
})


button.addEventListener('click', function(){
    let promise = fetch("https://www.boredapi.com/api/activity").then(function(resp){
        return resp.json()
    }).then(function(json){
        // do something with the json payload
        let activityrec = json;
        let likeTodo = activityrec.activity;
       
        let ul = document.getElementById("likes");
        
        ul.innerText = likeTodo;
    })
})


