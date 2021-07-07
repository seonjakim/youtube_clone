import "../css/style.css";
import Dom from "../lib/Dom";

const videoScreen = () => {
  let attr = {
    src: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    poster: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217",
    width: "620"
  }
  const $main = new Dom("div", "videoContainer");
  const $video = new Dom('video', 'videoBase',attr);
  const btn = new Dom('button', 'play');
  const test5 = document.createElement('button');
  const videoAction = (e) => {
    console.log(e)
  }
  test5.addEventListener('click', videoAction);
  const windowCall = document.querySelector('body');
  windowCall.appendChild(test5)
  btn.el.innerText = 'hello'
  $main.el.appendChild($video.el);
  $main.el.appendChild(btn.el);
  btn.el.addEventListener('click', () => {
    btn.el.innerText = 'bye'
  })
//   $main.el.innerHTML = `
//   <video class='videoBase'
//   src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
//   poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
//   width="620">

//   Sorry, your browser doesn't support embedded videos,
//   but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
//   and watch it with your favorite video player!

//   </video>
//   <button class='play'>play</button>
// `;
  const test = $main.el.querySelector('.videoBase');
  const play = $main.el.querySelector('.play');
  console.log(play);
  return $main.el.innerHTML;
};

export default videoScreen;
//https://tpc.googlesyndication.com/simgad/3525672876266075641 광고 예시
