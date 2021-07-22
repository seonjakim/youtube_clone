import { icons } from './data/utils'

const videoScreen = {
  render: async () => `
    <div id='video-area'>
      <div class='videoContainer'>
        <video id='video-tag'
          poster="https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg" >
          <source
            src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
            type="video/mp4">
          <source
            src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
            type="video/ogg">
          <source
            src="https://archive.org/download/ElephantsDream/ed_hd.avi"
            type="video/avi">
          Your browser doesn't support HTML5 video tag.
        </video>
        <div class='video-controls'>
          <div class='progress-bar'>
            <div class='watched'></div>
          </div>
          <div class='control-buttons svg-fill'>
            <div class='left-buttons'>
              <a class='prev-btn'></a>
              <button id='ytb-play' class='play-btn'></button>
              <a id='ytb-next-video' class='next-btn'></a>
              <button id='ytb-volume' class='volume'></button>
              <div class='volume-panel'></div>
              <div class='time-display'>
                <span id='ytb-current-time'>0:00 / 10:54</span>
              </div>
            </div>
            <div class='right-buttons'>${displayRightIcons}</div>
          </div>
        </div>
      </div>
    </div>
    `,
  after_render: async () => {
    /** align icons */
    let play, next, volume
    ;({ play, next, volume } = icons)
    const playButton = document.getElementById('ytb-play')
    const nextButton = document.getElementById('ytb-next-video')
    const volumeButton = document.getElementById('ytb-volume')
    let isModal = false
    playButton.innerHTML = play
    nextButton.innerHTML = next
    volumeButton.innerHTML = volume

    /** state management */
    let state = 'pause'
    let screenSize = 'normal'
    let timer = null
    let currentX, currentY
    let initialX, initialY
    let xOffset = 0,
      yOffset = 0
    let active = false

    const screenControl = document.querySelector('.videoContainer')
    const setVideoAs = document.getElementById('video-tag')
    const videoCurrentTime = document.getElementById('ytb-current-time')
    const playNpauseSVG = document.getElementById('ytp-id-148')
    const progress = document.querySelector('.watched')
    const fullScreen = document.getElementById('right-ctr-4')
    const videoModal = document.getElementById('video-area')
    const body = document.querySelector('.root')

    // setVideoAs.addEventListener('scroll', (e) => {
    //   console.log(e)
    // })
    let videoBottom = setVideoAs.getBoundingClientRect().bottom
    body.addEventListener('scroll', (e) => {
      // if (!isModal && e.target.scrollTop > videoBottom) {
      //   console.log("hello")
      //   document.documentElement.style.setProperty('--video-width', '450px')
      //   videoModal.className = 'modal-position'
      //   isModal = true
      // } else if (isModal && e.target.scrollTop < videoBottom) {
      //   document.documentElement.style.setProperty('--video-width', '1500px')
      //   videoModal.classList.remove = 'modal-position'
      //   isModal = false
      // }
    })
    /** drag and drop the video modal */
    const dragStart = (e) => {
      initialX = e.clientX - xOffset
      initialY = e.clientY - yOffset
      active = true
    }
    const dragEnd = (e) => {
      initialX = currentX
      initialY = currentY
      active = false
    }
    const drag = (e) => {
      if (active) {
        e.preventDefault()
        currentX = e.clientX - initialX
        currentY = e.clientY - initialY
        xOffset = currentX
        yOffset = currentY
        setTranslate(currentX, currentY)
      }
    }
    const setTranslate = (xPos, yPos) => {
      videoModal.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`
    }

    videoModal.addEventListener('mousedown', dragStart, false)
    videoModal.addEventListener('mouseup', dragEnd, false)
    videoModal.addEventListener('mousemove', drag, false)

    /** play and pause */
    playButton.addEventListener('click', async () => {
      if (state === 'pause') {
        setVideoAs.play()
        state = 'play'
        playNpauseSVG.setAttribute(
          'd',
          'M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z'
        )
        timer = setInterval(() => {
          videoCurrentTime.innerHTML = `${timeInterpret(
            setVideoAs.currentTime
          )} / ${timeInterpret(setVideoAs.duration)}`
          progress.style.width = `${
            (setVideoAs.currentTime / setVideoAs.duration) * 100
          }%`
        }, 100)
      } else if (state === 'play') {
        setVideoAs.pause()
        state = 'pause'
        playNpauseSVG.setAttribute(
          'd',
          'M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z'
        )
        clearInterval(timer)
      }
    })

    /** volume */
    volumeButton.addEventListener('click', async () => {})

    /** full screen */
    fullScreen.addEventListener('click', async () => {
      if (screenSize === 'normal') {
        screenControl.requestFullscreen()
        screenSize = 'fullscreen'
        fullScreen.innerHTML = icons[5]
      } else if (screenSize === 'fullscreen') {
        document.exitFullscreen()
        screenSize = 'normal'
        fullScreen.innerHTML = icons[4]
      }
    })
  },
}

const displayRightIcons = Object.values(icons)
  .map((el, idx) => {
    if (idx < 5) {
      return `<button style="width: 40px;" id='right-ctr-${idx}'>${el}</button>`
    }

    return ''
  })
  .join('')

/** change milliseconds to human readable time */
const timeInterpret = (time) => {
  const hr = ~~(time / 3600)
  const min = ~~((time % 3600) / 60)
  const sec = time % 60
  let secMin = ''
  if (hr > 0) {
    secMin += `${String(hr)}:${min < 10 ? '0' : ''}`
  }
  secMin += `${String(min)}:${sec < 10 ? '0' : ''}`
  secMin += `${Math.round(sec)}`

  return secMin
}

export default videoScreen
// https://tpc.googlesyndication.com/simgad/3525672876266075641 광고 예시
