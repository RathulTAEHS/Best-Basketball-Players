var images=["https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254","https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254","https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6442.png&w=350&h=254"];

console.log(images);

images.forEach(function(a,b){
    $('.BasketballPlayers').append("<img src=" +images [b] + ">");
});

function newImages(){
    $('.button').val("");
    $('.BasketballPlayers').empty();
}

function addNewImage(){
    var addImage = $('.inputImage').val();
	images.push(addImage);
}

$('.button').click(function(){
    addNewImage();
    newImages();
    images.forEach(function(a,b){
        $('.BasketballPlayers').append("<img src=" + images[b] + ">");
});
    });
