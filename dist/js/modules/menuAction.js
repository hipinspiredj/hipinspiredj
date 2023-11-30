export function menuAction() {

  //on scroll/ready toggle class
  var $document = jQuery(document),
    $topMenu = jQuery('.top-menu'),
    className = 'fixed';

  //on scroll
  $document.scroll(function () {
    $topMenu.toggleClass(className, $document.scrollTop() >= 50);
  });

  //on ready
  $document.ready(function () {
    $topMenu.toggleClass(className, $document.scrollTop() >= 50);
  });

};




