let data = {
    title: [
        "ANDRXRXSSO & BLOODTHXRN - DARKSIDE (1)",
        "ANDRXRXSSO & BLOODTHXRN - DARKSIDE",
        "phonk killazz & MantiCxrs - ALL I WANT IS YOU",
        "phonk killazz & MantiCxrs - MONTAGEM MASENTAD"


    ],

    song: [
        "music/ANDRXRXSSO & BLOODTHXRN - DARKSIDE (1).mp3",
        "music/ANDRXRXSSO & BLOODTHXRN - DARKSIDE.mp3",
        "music/Phonk Killazz & MantiCxrs - Holding Out For A Hero Hoodtrap.mp3",
        "music/phonk killazz & MantiCxrs - MONTAGEM MASENTADO.mp3"

    ],
    poster: [
        "https: //media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyeWh6OTV1NnhtemN6djJ5eG51YzJkcjB1dGU1NXBscW8yamhzemU5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/200w.gif",
        " https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyeWh6OTV1NnhtemN6djJ5eG51YzJkcjB1dGU1NXBscW8yamhzemU5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/4oMoIbIQrvCjm/200w.gif",
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGF2ZXl2Z3NuZ2NyYmlhdXhndnl4aWxud29pejV4cWFvZWR4bHZucyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tqfS3mgQU28ko/200w.webp",
        "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGF2ZXl2Z3NuZ2NyYmlhdXhndnl4aWxud29pejV4cWFvZWR4bHZucyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wsWcsrfMXjJgk/100.webp"





    ]


}


let song = new Audio()
let currentSong = 0

window.onload = function () {
    playSon()





}

function playSon() {
    song.src = data.song[currentSong]
    let sondTitle = document.getElementById("songTitle")
    sondTitle.textContent = data.title[currentSong]

    let img = document.getElementById("row1")
    img.style.backgroundImage = "url (" + data.poster[currentSong] + "  )"

    let main = document.getElementById("main")
    img.style.backgroundImage = "url (" + data.poster[currentSong] + "  )"
    song.play()





}
function playSong() {
    let play = document.getElementById("play")
    if (song.paused) {
        song.play()
        play.src = "images/pause.png"

    } else {
        song.pause()
        play.src = "images/play-button-arrowhead.png"



    }






}





song.addEventListener("timeupdate", function () {

    let fill = document.getElementById("fill")
    let position = song.currentTime / song.duration
    fill.style.width = position * 100 + "%"
    convertTime(song.currentTime)
    totalTime(Math.round(song.duration))


    if (song.ended) {
        next()





    }


})

function convertTime(seconds) {

    let currentTime = document.getElementById("curentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    currentTime.textContent = min + ":" + sec

}




function totalTime(seconds){

    
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec
    currentTime.textContent += min + ":" + sec









}


function next(){
currentSong++
if(currentSong >= data.song.length){
 currentSong = 0





}
playSong()
play.src ="images/paus.png"
}


function pre (){
currentSong--
if(currentSong <= 0){
 currentSong = data.song.leength -1



}
playSong()
play.src = "images/pause.png"

}

function muted(){
let mute = document.getElementById("mute")
 if(song.muted){
   song.muted = false
  mute.src = "images/volum.png"

 }else{
song.muted = true
mute.src = "images/volume-mute.png"

 }


}


























