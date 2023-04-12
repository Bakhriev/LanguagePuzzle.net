const answerButtons = document.querySelectorAll('.answer-button')
const volumeBtn = document.querySelector('.volume-icon')

const audi = document.querySelector('.sounds').children

const audio1 = audi[0]
const audio2 = audi[1]
const audio3 = audi[2]
const audio4 = audi[3]

const sounds = [audio1, audio2, audio3, audio4]
function initSoundOnHover() {
  answerButtons.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      sounds[index].play()
    })
    item.addEventListener('click', () => {
      sounds[index].play()
    })
    item.addEventListener('focus', (e) => {
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

//
const quiz1 = answerButtons[0]
const quiz2 = answerButtons[1]
const quiz3 = answerButtons[2]
const quiz4 = answerButtons[3]

window.addEventListener('keydown', (e) => {
  let focusIndex = e.target.dataset.focus

  switch (e.key) {
    case 'ArrowLeft':
      if (focusIndex === '1') {
        quiz1.focus()
      }
      if (focusIndex === '2') {
        quiz2.focus()
      }
      if (focusIndex === '3') {
        quiz3.focus()
      }
      if (focusIndex === '4') {
        quiz4.focus()
      }
      break
    case 'ArrowRight':
      if (focusIndex === '0') {
        quiz2.focus()
      }
      if (focusIndex === '1') {
        quiz3.focus()
      }
      if (focusIndex === '2') {
        quiz4.focus()
      }
      break
    case 'ArrowUp':
      if (focusIndex === '1') {
        quiz1.focus()
      }
      if (focusIndex === '2') {
        quiz2.focus()
      }
      if (focusIndex === '3') {
        quiz3.focus()
      }
      if (focusIndex === '4') {
        quiz4.focus()
      }

      break
    case 'ArrowDown':
      if (focusIndex === '0') {
        quiz2.focus()
      }
      if (focusIndex === '1') {
        quiz3.focus()
      }
      if (focusIndex === '2') {
        quiz4.focus()
      }

      break
  }
})