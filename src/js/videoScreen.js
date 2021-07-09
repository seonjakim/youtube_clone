//d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"

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
        <div class='progress-bar'></div>
        <div class='control-buttons'>
          <div class='left-buttons'>
            <a class='prev-btn'></a>
            <button id='ytb-play' class='play-btn svg-fill'>
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
              <span>3:43</span>
              <span>/</span>
              <span>11:15</span>
            </div>
          </div>
          <div class='right-buttons'>
          </div>
        </div>
      </div>
    </div>
    `;
  },
  after_render: async () => {
    const setVideoAs = document.getElementById('videoBasic');
    // document
    //   .getElementById('videoBasic')
    //   .addEventListener('click', async (e) => {
    //     console.log(e);
    //   })
    /** play and pause */
    document
      .getElementById('ytb-play')
      .addEventListener('click', async (e) => {
        console.log(setVideoAs)
        console.log(e)
        // setVideoAs.play();
      })
    /** volume */
    document
      .getElementById('ytb-volume')
      .addEventListener('click', async () => {

      })
  }
};

export default videoScreen;
//https://tpc.googlesyndication.com/simgad/3525672876266075641 광고 예시
