let musicBtn= document.getElementById("musicBtn")
const loop = new Tone.Loop(repeat, "8n").start(0);

let index= 0

musicBtn.onclick= (event)=>{
    event.preventDefault()

    if (musicBtn.innerHTML == "Play"){
        musicBtn.innerHTML= "Stop"
        Tone.Transport.start()
    }
    else {
        musicBtn.innerHTML= "Play"
        Tone.Transport.stop()
    }
}

function repeat(){
    const sound1= new Tone.Player("tones/clap-808.wav").toDestination()
    const sound1CurrNote= "s1n"+((index%8)+1)
    if (document.getElementById(sound1CurrNote).checked){
        sound1.autostart= true
    }
    const sound2= new Tone.Player("tones/kick-808.wav").toDestination()
    const sound2CurrNote= "s2n"+((index%8)+1)
    if (document.getElementById(sound2CurrNote).checked){
        sound2.autostart= true
    }
    const sound3= new Tone.Player("tones/snare-808.wav").toDestination()
    const sound3CurrNote= "s3n"+((index%8)+1)
    if (document.getElementById(sound3CurrNote).checked){
        sound3.autostart= true
    }
    const sound4= new Tone.Player("tones/tom-808.wav").toDestination()
    const sound4CurrNote= "s4n"+((index%8)+1)
    if (document.getElementById(sound4CurrNote).checked){
        sound4.autostart= true
    }
    index ++
}