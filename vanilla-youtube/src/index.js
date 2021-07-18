import videoScreen from "./js/videoScreen";
import FrameVideo from './js/components/FrameVideo';
import VideoSection from './js/components/VideoSection'
import "./css/style.css";

const Index = async() => {
  const root = document.querySelector('body');
  root.innerHTML = await FrameVideo.render();
  const test = document.querySelector('.main-wrap');
  test.innerHTML = await VideoSection.render();
  await VideoSection.after_render();
  // await videoScreen.render();
  // root.innerHTML = await videoScreen.render();
  // await videoScreen.after_render();
};
Index();
