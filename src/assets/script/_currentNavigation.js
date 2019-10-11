export default class {
  // Constructor
  constructor() {
    $('[data-type="navi"] a').each(function() {
      var $href = $(this).attr('href')
      if (location.href.match($href)) {
        $(this)
          .parents('li')
          .addClass('-active')
      } else if (location.href.match('/$')) {
        $(this)
          .parents('li')
          .removeClass('-active')
          .removeClass('-inactive')
      } else {
        $(this)
          .parents('li')
          .removeClass('-active')
          .addClass('-inactive')
      }
    })
  }
}
