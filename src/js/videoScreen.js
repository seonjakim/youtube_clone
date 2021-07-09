const videoScreen = {
  render: async () => {
    return `
    <div class='videoContainer'>
      <video id='videoBasic'
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
            <button id='ytb-play' class='play-btn'>
              <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <use xlink:href="#ytp-id-148"></use>
                <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-148"></path>
              </svg>
            </button>
            <a class='next-btn svg-fill'>
              <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-12"></use><path class="ytp-svg-fill" d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z" id="ytp-id-12"></path></svg>
            </a>
            <button id='ytb-volume' class='volume'>
              <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-14"></use><use class="ytp-svg-shadow" xlink:href="#ytp-id-15"></use><defs><clipPath id="ytp-svg-volume-animation-mask"><path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path><path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path><path class="ytp-svg-volume-animation-mover" d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path></clipPath><clipPath id="ytp-svg-volume-animation-slash-mask"><path class="ytp-svg-volume-animation-mover" d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path></clipPath></defs><path class="ytp-svg-fill ytp-svg-volume-animation-speaker" clip-path="url(#ytp-svg-volume-animation-mask)" d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z" fill="#fff" id="ytp-id-14"></path><path class="ytp-svg-fill ytp-svg-volume-animation-hider" clip-path="url(#ytp-svg-volume-animation-slash-mask)" d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-15" style="display: none;"></path></svg>
            </button>
            <div class='volume-panel'></div>
            <div class='time-display'>
              <span id='ytb-current-time'>0:00 / 10:54</span>
            </div>
          </div>
          <div class='right-buttons'>${displayRightIcons}</div>
        </div>
      </div>
    </div>
    `;
  },
  after_render: async () => {
    let state = 'pause';
    let screenSize = 'normal';
    const screenControl = document.querySelector('.videoContainer');
    const setVideoAs = document.getElementById('videoBasic');
    const playNpauseSVG = document.getElementById("ytp-id-148");
    const videoCurrentTime = document.getElementById('ytb-current-time');
    const progress = document.querySelector('.watched');
    const fullScreen = document.getElementById('right-ctr-4');
    let timer = null;

    /** play and pause */
    document
      .getElementById('ytb-play')
      .addEventListener('click', async () => {
        if (state === 'pause') {
          setVideoAs.play();
          state = 'play';
          playNpauseSVG.setAttribute('d', "M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z")
          timer = setInterval(() => {
            videoCurrentTime.innerHTML = timeInterpret(setVideoAs.currentTime) + ' / ' + timeInterpret(setVideoAs.duration);
            progress.style.width = `${setVideoAs.currentTime / setVideoAs.duration * 100}%`
          }, 100);
        } else if (state === 'play') {
          setVideoAs.pause();
          state = 'pause';
          playNpauseSVG.setAttribute('d', "M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z")
          clearInterval(timer);
        }
      })

    /** volume */
    document
      .getElementById('ytb-volume')
      .addEventListener('click', async () => {

      })

    /** full screen */
    fullScreen.addEventListener('click', async () => {
      if (screenSize === 'normal') {
        screenControl.requestFullscreen();
        screenSize = 'fullscreen';
      } else if (screenSize === 'fullscreen') {
        document.exitFullscreen();
        screenSize = 'normal';
      }
    })
  }
};

/** right side icons map */
const icons = {
  0 : `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-16"></use><path d="M11,11 C9.9,11 9,11.9 9,13 L9,23 C9,24.1 9.9,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M11,17 L14,17 L14,19 L11,19 L11,17 L11,17 Z M20,23 L11,23 L11,21 L20,21 L20,23 L20,23 Z M25,23 L22,23 L22,21 L25,21 L25,23 L25,23 Z M25,19 L16,19 L16,17 L25,17 L25,19 L25,19 Z" fill="#fff" id="ytp-id-16"></path></svg>`,
  1 : `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-18"></use><path d="m 23.94,18.78 c .03,-0.25 .05,-0.51 .05,-0.78 0,-0.27 -0.02,-0.52 -0.05,-0.78 l 1.68,-1.32 c .15,-0.12 .19,-0.33 .09,-0.51 l -1.6,-2.76 c -0.09,-0.17 -0.31,-0.24 -0.48,-0.17 l -1.99,.8 c -0.41,-0.32 -0.86,-0.58 -1.35,-0.78 l -0.30,-2.12 c -0.02,-0.19 -0.19,-0.33 -0.39,-0.33 l -3.2,0 c -0.2,0 -0.36,.14 -0.39,.33 l -0.30,2.12 c -0.48,.2 -0.93,.47 -1.35,.78 l -1.99,-0.8 c -0.18,-0.07 -0.39,0 -0.48,.17 l -1.6,2.76 c -0.10,.17 -0.05,.39 .09,.51 l 1.68,1.32 c -0.03,.25 -0.05,.52 -0.05,.78 0,.26 .02,.52 .05,.78 l -1.68,1.32 c -0.15,.12 -0.19,.33 -0.09,.51 l 1.6,2.76 c .09,.17 .31,.24 .48,.17 l 1.99,-0.8 c .41,.32 .86,.58 1.35,.78 l .30,2.12 c .02,.19 .19,.33 .39,.33 l 3.2,0 c .2,0 .36,-0.14 .39,-0.33 l .30,-2.12 c .48,-0.2 .93,-0.47 1.35,-0.78 l 1.99,.8 c .18,.07 .39,0 .48,-0.17 l 1.6,-2.76 c .09,-0.17 .05,-0.39 -0.09,-0.51 l -1.68,-1.32 0,0 z m -5.94,2.01 c -1.54,0 -2.8,-1.25 -2.8,-2.8 0,-1.54 1.25,-2.8 2.8,-2.8 1.54,0 2.8,1.25 2.8,2.8 0,1.54 -1.25,2.8 -2.8,2.8 l 0,0 z" fill="#fff" id="ytp-id-18"></path></svg>`,
  2 : `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-20"></use><path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z" fill="#fff" id="ytp-id-20"></path></svg>`,
  3 : `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-21"></use><path d="m 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z" fill-rule="evenodd" id="ytp-id-21"></path></svg>`,
  4 : `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><g class="ytp-fullscreen-button-corner-0"><use class="ytp-svg-shadow" xlink:href="#ytp-id-6"></use><path class="ytp-svg-fill" d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z" id="ytp-id-6"></path></g><g class="ytp-fullscreen-button-corner-1"><use class="ytp-svg-shadow" xlink:href="#ytp-id-7"></use><path class="ytp-svg-fill" d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z" id="ytp-id-7"></path></g><g class="ytp-fullscreen-button-corner-2"><use class="ytp-svg-shadow" xlink:href="#ytp-id-8"></use><path class="ytp-svg-fill" d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z" id="ytp-id-8"></path></g><g class="ytp-fullscreen-button-corner-3"><use class="ytp-svg-shadow" xlink:href="#ytp-id-9"></use><path class="ytp-svg-fill" d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z" id="ytp-id-9"></path></g></svg>`
}

const displayRightIcons = Object.values(icons).map((el, idx) => {
  return (`<button style="width: 40px;" id='right-ctr-${idx}'>${el}</button>`)
}).join('');

/** change milliseconds to human readable time */
const timeInterpret = (time) => {
  let hr = ~~(time / 3600);
  let min = ~~((time % 3600) / 60);
  let sec = time % 60;
  let sec_min = '';
  if (hr > 0) {
    sec_min += '' + hrs + ':' + (min < 10 ? '0' : '');
  }
  sec_min += '' + min + ':' + (sec < 10 ? '0' : '');
  sec_min += '' + Math.round(sec);
  return sec_min;
}

export default videoScreen;
//https://tpc.googlesyndication.com/simgad/3525672876266075641 광고 예시
