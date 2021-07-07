import Dom from '../../lib/Dom';

const Nav = () => {
  const $main = new Dom('nav', 'navContainer');
  return $main.el;
}

export default Nav;