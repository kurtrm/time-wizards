'use-strict';

 // This section adds text data to historical figure

var historicalFigureIntroEl = document.getElementById('historical-text');
historicalFigureIntroEl.textContent = (einstein.intro);
var historicalFigureImageEl = document.getElementById('historical-image');
historicalFigureImageEl.setAttribute('src', einstein.image);
