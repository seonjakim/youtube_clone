import videoScreen from "./js/videoScreen";
import FrameVideo from './js/components/FrameVideo';
import "./css/style.css";

const Index = async() => {
  const root = document.querySelector('body');
  root.innerHTML = await FrameVideo.render();
  const test = document.querySelector('.main-wrap');
  test.innerHTML = await videoScreen.render();
  // root.innerHTML = await videoScreen.render();
  await videoScreen.after_render();
};
Index();
