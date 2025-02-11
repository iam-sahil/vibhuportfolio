window.addEventListener('scroll', function() {
    var bodyElement = document.body;
    var panelElements = document.querySelectorAll('.panel');
    var scroll = window.scrollY + (window.innerHeight / 5);
    panelElements.forEach(function(panel) {
      var panelElement = panel;
      if (panelElement.offsetTop <= scroll && panelElement.offsetTop + panelElement.offsetHeight > scroll) {
        bodyElement.classList.forEach(function(className) {
          if (className.startsWith('color-')) {
            bodyElement.classList.remove(className);
          }
        });
        var colorData = panelElement.dataset.color;
        if (colorData) {
          bodyElement.classList.add('color-' + colorData);
        }
      }
    });
  });
window.dispatchEvent(new Event('scroll'));

function Marquee(selector, speed) {
  document.querySelectorAll(selector).forEach(marqueeElement => {
    const firstElement = marqueeElement.children[0];
    let i = 0;
    setInterval(() => firstElement.style.marginLeft = `-${(i += speed) % firstElement.clientWidth}px`, 10);
  });
}
window.addEventListener('load', () => Marquee('.marquee', 0.6));


const backToTopBtn = document.getElementById("backToTopBtn");
window.onscroll = function() {
  if (document.body.scrollTop > window.innerHeight * 1.5 || document.documentElement.scrollTop > window.innerHeight * 1.5) {
    backToTopBtn.style.opacity = "1";
    backToTopBtn.style.visibility = "visible"; 
    backToTopBtn.style.transition = "opacity 0.5s ease, visibility 0s";
  } else {
    backToTopBtn.style.opacity = "0";
    backToTopBtn.style.visibility = "hidden";
    backToTopBtn.style.transition = "opacity 0.5s ease, visibility 0s 0.5s";
  }
};

backToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
