function removeTransiton(e){
    if(e.propertyName !== "transform") return
    e.target.classList.remove("playing")
}


function playsong(e){
    console.log(e)

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(key){

        key.classList.add('playing') 
        audio.currentTime = 0
        audio.play()
    }

}
const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key=> key.addEventListener('transitionend',removeTransiton))

window.addEventListener('keydown',playsong)