import videoScreen from "./js/videoScreen";
import Recommend from './js/components/Recommend';
import Nav from './js/components/Nav';
import "./css/style.css";
import Dom2 from './lib/Dom2';
// import App from './lib/App'

const Index = () => {
  const $body = document.querySelector('body');
  const $root = document.createElement('div');
  const videos = videoScreen();
  $body.appendChild($root);
  $root.classList.add('root');
  const test = Dom2('div', 'Iamhere');
  // const test2 = Dom2();
  console.log(test);
  console.log(Dom2);
  
  $root.innerHTML = `
    <nav class='navWrap'></nav>
    <div class='mainWrap'>${videos}</div>
    <aside class='asideWrap'></aside>
  `;
  //이런식으로 해결할 수 있을 듯!
  // $root.innerHTML = `
  //   <Nav></Nav>
  //   <videoScreen />
  //   <Recommend />
  // `;
  // $root.appendChild(Nav());
  // $root.appendChild(videoScreen());
  // $root.appendChild(Recommend());
};
Index();
