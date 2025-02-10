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

