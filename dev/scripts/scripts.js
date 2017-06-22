$(document).ready(function () {
  $sc = $('.rm__showcase');
  $scroll = $('.rm__scrollable_content');

  $sc.click(function() {
    $this = $(this);
    if (!$this.hasClass('main')) {
      $sc.removeClass('main');
      var i = $this.index();
      $scroll.css('left', (i-1)*(-50) + 'vw');
      $this.addClass('main');
    }
  });
});
