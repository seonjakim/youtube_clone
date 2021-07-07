const Dom2 = (...args) => {
  if (args.length) {
    let el;
    el = document.createElement(args[0]);
    el.className = args[1];
    return el;
  }
  return {
    sayOh: function() {
      return 'Oh Oh';
    }
  }
}

export default Dom2;