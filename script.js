let icon = document.getElementById("icon")

icon.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme")
    if(document.body.classList.contains("darkTheme")){
        icon.src = "./imgs/sun.png"
    }

    else{
        icon.src = "./imgs/moon.png"
    }
})

let songs = [

    {titulo: "Julieta", artista: "Kamaitachi", src:"./Musics/Julieta.mp3", img:"./imgs/julieta.png"},
    {titulo: "Exagerado", artista: "Cazuza", src:"./Musics/exagerado.mp3", img:"./imgs/Exagerado.jpg"},
    {titulo: "Chalé em Alaska", artista: "Kamaitachi", src:"./Musics/chalé em alaska.mp3", img:"./imgs/chalé.jpg"},
    {titulo: "Chove Chuva", artista: "Jorge Ben", src:"./Musics/chove chuva.mp3", img:"./imgs/chove.jpg"},
    {titulo: "Sunflower", artista: "Post Malone", src:"./Musics/Sunflower.mp3", img:"./imgs/sunflower.jpg"},
    {titulo: "Garota de Ipanema", artista: "Tom Jobim", src:"./Musics/Garota de ipanema.mp3", img:"./imgs/garota.jpg"},
    {titulo: "Don't let me down", artista: "Beatles", src:"./Musics/Don't let me down.mp3", img:"./imgs/dont.jpg"},
]


let music = document.querySelector("audio")
let indexSong = 0


let musicName = document.querySelector("#description h2")
let artistName = document.querySelector("#description p")
let image = document.getElementById("cover")
let play = document.getElementById("play")
let pause = document.getElementById("pause")
let next = document.getElementById("next")
let prev = document.getElementById("prev")


prev.addEventListener("click", function(){
    indexSong--
    if(indexSong < 0){
        indexSong = 7
    }

    renderMusic(indexSong)
})


next.addEventListener("click", function(){
    indexSong++
    if(indexSong > 7){
        indexSong = 0
    }

    renderMusic(indexSong)

})


function renderMusic(index){
    music.setAttribute("src", songs[index].src)
    music.addEventListener("loadeddata", function(){
        musicName.textContent = songs[index].titulo
        artistName.textContent = songs[index].artista
        image.src = songs[index].img
    })
}

play.addEventListener("click", function(){
   music.play()
   document.getElementById("pause").style.display = "inline-block"
   document.getElementById("play").style.display = "none"
   

})

pause.addEventListener("click", function(){
    music.pause()
    document.getElementById("pause").style.display = "none"
    document.getElementById("play").style.display = "inline-block"
})
