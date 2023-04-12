const answerButtons = document.querySelectorAll('.answer-button')
const volumeBtn = document.querySelector('.volume-icon')

const audi = document.querySelector('.sounds').children

const audio1 = audi[0]
const audio2 = audi[1]
const audio3 = audi[2]
const audio4 = audi[3]

const sounds = [audio1, audio2, audio3, audio4]
console.log(sounds)
function initSoundOnHover() {
  answerButtons.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      sounds[index].play()
    })
  })
}

function onCLickVolumeIcon() {
  if (volumeBtn.classList.contains('volume-on')) {
    sounds.forEach((sound) => {
      sound.muted = false
    })
  } else {
    sounds.forEach((sound) => {
      sound.muted = true
    })
  }
  initSoundOnHover()
}

volumeBtn.addEventListener('click', () => {
  volumeBtn.classList.toggle('volume-on')
  onCLickVolumeIcon()
})