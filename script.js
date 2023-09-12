const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const stopBtn = document.querySelector("#stopBtn");
const visor = document.querySelector("#visor");
let hora = 0;
let minuto = 0;
let segundo = 1;
let tempo;

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
    setInterval(()=> {
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
        tempo = `${hora}:${minuto}:${segundo}`;
        segundo++;
        visor.innerHTML = tempo;
    }, 1000);
}

function pause() {
    console.log("pause")
}

function stop() {
    console.log("stop")
}