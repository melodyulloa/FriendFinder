
var friends=[];

var names =["James","Robert","Aliyah","Tyler","Sarah",
            "Emily","William", "Oscar","Johnny","Ezra"];

var photos =[
  "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/10/931/524/RT-James-Franco.jpg?ve=1&tl=1",
  "https://batman-on-film.com/wp-content/uploads/2019/11/RPats.jpg",
  "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzgyODExNjMxMDY4ODQ2/aaliyah-4-raw-1.jpg",
  "https://pmcvariety.files.wordpress.com/2019/01/tyler-perry-1.jpg?w=1000&h=563&crop=1",
  "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDAyNDgxMzE0OTMyNDIx/sarah-jessica-parker_gettyimages-454648566jpg.jpg",
  "https://pbs.twimg.com/profile_images/1793368388/emilydeschanel_profile.jpg",
  "https://www.shortlist.com/media/imager/201905/14812-posts.article_lg.jpg",
  "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTIwNjA4NjM0MDUyOTA0NDYw/oscar-de-la-hoya-9542428-1-402.jpg",
  "http://images.huffingtonpost.com/2015-06-10-1433953732-1951627-johnnydepp90s06.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0c/Ezra_Miller_2017.jpg"
];

var scores=[];
// generate 10 random numbers, ten times 
for(let i=0; i < 10; i++){
    let subArray = [];
    for(let x =0; x<10; x++){
        let num = Math.ceil(Math.random()* 5);
        subArray.push(num);
    }
    scores.push(subArray);
}

// create array of friend objects

let obj={
    name: names[0],
    photo:photos[0],
    scores:scores[0]
};

for(let i =0; i<10; i++){
    let obj={
        name: names[i],
        photo:photos[i],
        scores:scores[i]
    }; 
    friends.push(obj);
}

module.exports=friends;