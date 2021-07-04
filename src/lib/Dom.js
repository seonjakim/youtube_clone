let el;

export default class Dom {
  constructor(tag, className, attr) {
    el = document.createElement(tag);

    if (className) {
      el.className = className;
    }

    attr = attr || {};

    for (const k in attr) {
      el.setAttribute(k, attr[k]);
    }

    this.el = el;
  }

  removeStyle(key) {
    this.el.style.removeProperty(key);

    return this;
  }

  addClass(...args) {
    this.el.classList.add(...args);

    return this;
  }

  removeClass(...args) {
    this.el.classList.remove(...args);

    return this;
  }
}
