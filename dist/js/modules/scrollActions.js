export function scrollActions() {

  document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])').forEach((btn, index) => {
    btn.addEventListener("click", function() {
      var w = window.innerWidth;
      gsap.to(window, { duration: 1, scrollTo: { y: this.getAttribute('href'), offsetY: 100 } });

      const parentElement = btn.closest(".top-menu");  
      if (parentElement && w < 990) {
        const toggler = document.querySelector('.navbar-toggler[aria-expanded="true"]');
        if (toggler) {
          toggler.click();
        }
      }

    });
  });

  function initParallax() {
    var layers = document.getElementsByClassName("parallax-holder");

    function parallaxScroll() {
      var top = window.pageYOffset;

      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var speed = parseFloat(layer.getAttribute('data-speed'));
        var yPos = -(top * speed / 100);
        gsap.to(layer, { y: yPos, ease: "elastic", delay: 0 });
      }
    }

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: parallaxScroll,
      onUpdateParams: ["{self}"],
    });
  }

  function nonParallax() {
    gsap.set("#nonParallaxContent", { display: 'block' });
    gsap.set("#parallaxContent", { display: 'none' });
  }

  function startSite() {
    var platform = navigator.platform.toLowerCase();

    if (platform.indexOf('ipad') !== -1 || platform.indexOf('iphone') !== -1) {
      nonParallax();
    } else {
      initParallax();
    }
  }

  startSite();


}