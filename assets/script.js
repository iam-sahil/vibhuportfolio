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
  const marqueeElements = document.querySelectorAll(selector);

    marqueeElements.forEach(marqueeElement => {
    let i = 0, interval;
    const firstElement = marqueeElement.children[0];
    const start = () => interval = setInterval(() => firstElement.style.marginLeft = `-${(i += speed) % firstElement.clientWidth}px`, 10);
    start();
  });
}
window.addEventListener('load', () => Marquee('.marquee', .7));