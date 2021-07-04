import videoScreen from "./js/videoScreen";
import "./css/style.css";
// import Dom from './lib/Dom';
// import App from './lib/App'

const Index = () => {
  const $body = document.querySelector("body");
  const $root = document.createElement('div');
  $body.appendChild($root);
  $root.classList.add('root');
  $root.appendChild(videoScreen());
};
Index();
