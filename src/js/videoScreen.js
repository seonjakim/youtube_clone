import "../css/style.css";
import Dom from "../lib/Dom";

const videoScreen = () => {
  const $main = new Dom("div", "videoContainer");
  $main.el.innerHTML = `
    <video class='videoCtr'></video>
  `;

  return $main.el;
};

export default videoScreen;
