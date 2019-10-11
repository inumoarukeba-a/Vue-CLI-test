export default class {
  // Constructor
  constructor() {
    const $menuBtn = $('#btn-sp-menu')
    const $menuInner = $('.head-inner')
    const $wrap = $('#wrapper')
    let current_scrollY
    let menuflag = false

    $menuBtn.on(clickEventType, function() {
      $(this).toggleClass('-opened')
      $menuInner.toggleClass('-opened')
      if (!menuflag) {
        current_scrollY = $win.scrollTop()
        $wrap.css({
          position: 'fixed',
          width: '100%',
          top: -1 * current_scrollY,
        })
        menuflag = true
      } else {
        $wrap.attr({
          style: '',
        })
        $('html, body').prop({
          scrollTop: current_scrollY,
        })
        menuflag = false
      }
    })
  }
}
