const answerButtons = document.querySelectorAll('.answer-button')
const volumeBtn = document.querySelector('.volume-button')

const audio1 = new Audio('./audios/n.mp3')
const audio2 = new Audio('./audios/n.mp3')
const audio3 = new Audio('./audios/n.mp3')
const audio4 = new Audio('./audios/n.mp3')
const sounds = [audio1, audio2, audio3, audio4]

function initSoundOnHover() {
  answerButtons.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      // audios[index].play()
      sounds[index].play()
    })
  })
}

function onCLickVolumeIcon() {
  if (volumeBtn.classList.contains('active')) {
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

// Listeners
window.addEventListener('load', onCLickVolumeIcon)

volumeBtn.addEventListener('click', () => {
  volumeBtn.classList.toggle('active')
})