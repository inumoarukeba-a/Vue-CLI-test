export default class {
  // Constructor
  constructor() {
    this.timer
  }

  // Functions
  resizeTimer(interval, func) {
    window.addEventListener('resize', () => {
      clearTimeout(this._timer)
      this._timer = setTimeout(() => {
        func()
      }, interval)
    })
  }
}
