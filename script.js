const playBtn = document.querySelector("#playBtn");
const playIcon = document.querySelector("#play");
const pauseBtn = document.querySelector("#pauseBtn");
const pauseIcon = document.querySelector("#pause");
const stopBtn = document.querySelector("#stopBtn");
const stopIcon = document.querySelector("#stop");
const visor = document.querySelector("#visor");
const borderExt = document.querySelector("#borderExt");
const borderExtOff = document.querySelector("#borderExtOff");
let hora = 0;
let minuto = 0;
let segundo = 1;
let tempo;
let interTime;

if(hora<10) {
    hora = "0"+hora;
}
if(minuto<10) {
    minuto = "0"+minuto;
}

playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", stop);

function play() {
    console.log("play");
    borderExt.classList.add("bdAnime");
    borderExt.classList.remove("pauseAnime");
    borderExtOff.classList.add("bdAnimeOff");
    borderExtOff.classList.remove("pauseAnime");
    playBtn.classList.add("disabledClick");
    pauseBtn.classList.remove("disabledClick");
    stopBtn.classList.remove("disabledClick");
    playIcon.setAttribute("src", "img/player-play.png");
    pauseIcon.setAttribute("src", "img/player-pause-filled.png");
    stopIcon.setAttribute("src", "img/player-stop-filled.png");
    interTime = setInterval(()=> {
        if(segundo == 0 || segundo<10) {
            segundo = "0"+segundo;
        }

        if(segundo>59) {
            segundo = "0"+0;
            minuto++;
            if(minuto == 0 || minuto<10) {
                minuto = "0"+minuto;
            } 
        }

        if(minuto>59) {
            minuto = "0"+0;
            hora++;
            if(hora == 0 || hora<10) {
                hora = "0"+hora;
            } 
        }

        if(hora>59) {
            hora = 0;
            if(hora == 0 || hora<10) {
                hora = "0"+hora;
            } 
        }
        tempo = `${hora}:${minuto}:${segundo}`;
        segundo++;
        visor.innerHTML = tempo;
    }, 1000);
}

function pause() {
    console.log("pause");
    borderExt.classList.add("pauseAnime");
    borderExtOff.classList.add("pauseAnime");
    clearInterval(interTime);
    playBtn.classList.remove("disabledClick");
    pauseBtn.classList.add("disabledClick");
    playIcon.setAttribute("src", "img/player-play-filled.png");
    pauseIcon.setAttribute("src", "img/player-pause.png");
}

function stop() {
    console.log("stop");
    borderExt.classList.add("pauseAnime");
    borderExtOff.classList.add("pauseAnime");
    pauseBtn.classList.add("disabledClick");
    stopBtn.classList.add("disabledClick");
    playBtn.classList.remove("disabledClick");
    pauseIcon.setAttribute("src", "img/player-pause.png");
    stopIcon.setAttribute("src", "img/player-stop.png");
    playIcon.setAttribute("src", "img/player-play-filled.png");
    clearInterval(interTime);
    hora = 0;
    minuto = 0;
    segundo = 0;
    if(hora<10) {
        hora = "0"+hora;
    }
    if(minuto<10) {
        minuto = "0"+minuto;
    }
    if(segundo<10) {
        segundo = "0"+segundo;
    }
    tempo = `${hora}:${minuto}:${segundo}`;
    visor.innerHTML = tempo;
    segundo = 1;
}