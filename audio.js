
let data = {
    title: [
        "ANDRXRXSSO & BLOODTHXRN - DARKSIDE (1)",
        "music/SAYAN - Мальборо (Harddope Club Remix).mp3",
        "phonk killazz & MantiCxrs - ALL I WANT IS YOU",
        "music/Алина Гросу feat. Polyanskiy - Полотенце (EDscore Remix).mp3"
    ],

    song: [
        "music/ANDRXRXSSO & BLOODTHXRN - DARKSIDE (1).mp3",
        "music/SAYAN - Мальборо (Harddope Club Remix).mp3",
        "music/Phonk Killazz & MantiCxrs - Holding Out For A Hero Hoodtrap.mp3",
        "music/Алина Гросу feat. Polyanskiy - Полотенце (EDscore Remix).mp3"
    ],

    poster: [
        "https://media4.giphy.com/media/4oMoIbIQrvCjm/200w.gif",
        "https://media4.giphy.com/media/4oMoIbIQrvCjm/200w.gif",
        "https://media2.giphy.com/media/tqfS3mgQU28ko/200w.webp",
        "https://media4.giphy.com/media/wsWcsrfMXjJgk/100.webp"
    ]
};


let song = new Audio();
let currentSong = 0;


window.onload = function () {
    playSong();
};


function playSong() {

    song.src = data.song[currentSong];

    document.getElementById("songTitle").textContent =
        data.title[currentSong];


    let img = document.getElementById("row1");

    img.style.backgroundImage =
        `url(${data.poster[currentSong]})`;


    song.play();


    let play = document.getElementById("play");
    if(play){
        play.src = "images/pause.png";
    }
}



function playOrPauseSong() {

    let play = document.getElementById("play");

    if(song.paused){

        song.play();

        play.src = "images/pause.png";

    }else{

        song.pause();

        play.src = "images/play-button-arrowhead.png";
    }
}



song.addEventListener("timeupdate", function(){

    let fill = document.getElementById("fill");

    let position = song.currentTime / song.duration;

    fill.style.width = position * 100 + "%";


    convertTime(song.currentTime);
    totalTime(song.duration);


    if(song.ended){
        next();
    }

});



function convertTime(seconds){

    let currentTime = document.getElementById("curentTime");

    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);


    min = min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+sec : sec;


    currentTime.textContent = min + ":" + sec;
}



function totalTime(seconds){

    let total = document.getElementById("totalTime");

    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);


    min = min < 10 ? "0"+min : min;
    sec = sec < 10 ? "0"+sec : sec;


    total.textContent = min + ":" + sec;
}



function next(){

    currentSong++;


    if(currentSong >= data.song.length){

        currentSong = 0;

    }


    playSong();
}



function pre(){

    currentSong--;


    if(currentSong < 0){

        currentSong = data.song.length - 1;

    }


    playSong();
}



function muted(){

    let mute = document.getElementById("mute");


    song.muted = !song.muted;


    if(song.muted){

        mute.src = "images/volume-mute.png";

    }else{

        mute.src = "images/volume.png";
    }

}




function decrease(){

    song.volume -= 0.2;


    if(song.volume < 0){

        song.volume = 0;

    }
}



function increase(){

    song.volume += 0.2;


    if(song.volume > 1){

        song.volume = 1;

    }

}

function availableTracks(){

    let count = data.song.length;

    console.log("Available songs: " + count);

    return count;
}

function showSongs(){

    data.title.forEach(function(song, index){

        console.log((index + 1) + ". " + song);

    });

}

availableTracks();






