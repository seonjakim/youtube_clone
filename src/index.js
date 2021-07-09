import videoScreen from "./js/videoScreen";
import "./css/style.css";

const Index = async() => {
  const root = document.querySelector('body');
  root.innerHTML = 'hello'
  root.innerHTML = await videoScreen.render();
  await videoScreen.after_render();
};
Index();
