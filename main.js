const audio = document.querySelector("audio");
const slider = document.querySelector(".slider input")
const play = document.querySelector("input#play")
const leftCircle = document.querySelector("#left-circle")
const rightCircle = document.querySelector("#right-circle")

let degrees = 0
let speed = 1
let interval;

function addDegrees(x) {
  degrees = (degrees + x)
}

play.addEventListener('change', (e) => {
  let action, buttonName

  if (e.target.checked) {
    action = 'play'
    buttonName = 'pause'

    interval = setInterval(() => {
      leftCircle.style.setProperty('transform', `rotate(${degrees}deg)`)
      rightCircle.style.setProperty('transform', `rotate(${degrees}deg)`)

      degrees += speed * 10
    }, 50)

  } else {
    action = 'pause'
    buttonName = 'play'

    clearInterval(interval)
  }

  const label = e.target.parentElement
  label.querySelector('p').innerHTML = buttonName
  label.querySelector('i').className = `fas fa-${buttonName}`

  audio[action]()
})

slider.addEventListener("input", (e) => {
  speed = parseFloat(e.target.value)

  audio.playbackRate = speed;
});
