export const start = (opt) => {
  class App {
    template() {
      return `<div>${opt.template}</div>`
    }
  }
  return new App(opt)
}
