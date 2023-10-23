//TABS
window.addEventListener("load", function() {
  // store tabs variable
  var theTabs = document.querySelectorAll("ul.nav-tabs > li");

  function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent = tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll("ul.nav-tabs > li");
      for (var i = 0; i < theTabs.length; i++) {
          theTabs[i].classList.remove("active");
      }
      
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var contentPanes = tabParent.querySelectorAll(".tab-pane");
      for (i = 0; i < contentPanes.length; i++) {
          contentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = tabParent.querySelector(activePaneId);
      activePane.classList.add("active");
  }
  for (i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks)
  }
});

//IMAGE GALLERY
//https://codesandbox.io/s/vanilla-js-responsive-image-slider-vblu3

// OR USE GLIDER
//https://nickpiscitelli.github.io/Glider.js/


//SCROLLER
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//AUDIO PLAYER
function $(id) { return document.getElementById(id); };
const media = $('audio');

let ui = {
  play: 'play-audio',
  audio: 'audio',
  percentage: 'player-percentage',
  seekObj: 'seek-obj',
  currentTime: 'current-time'
};

function togglePlay() {
  if (media.paused === false) {
    media.pause();
    $(ui.play).classList.remove('pause');
  } else {
    media.play();
    $(ui.play).classList.add('pause');
  }
}

function calculatePercentPlayed() {
  let percentage = (media.currentTime / media.duration).toFixed(2) * 100;
  $(ui.percentage).style.width = `${percentage}%`;
}

function calculateCurrentValue(currentTime) {
  const currentMinute = parseInt(currentTime / 60) % 60;
  const currentSecondsLong = currentTime % 60;
  const currentSeconds = currentSecondsLong.toFixed();
  const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
  currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
  }`;
  
  return currentTimeFormatted;
}

function initProgressBar() {
  const currentTime = calculateCurrentValue(media.currentTime);
  $(ui.currentTime).innerHTML = currentTime;
  $(ui.seekObj).addEventListener('click', seek);

  media.onended = () => {
    $(ui.play).classList.remove('pause');
    $(ui.percentage).style.width = 0;
    $(ui.currentTime).innerHTML = '00:00';
  };

  function seek(e) {
    const percent = e.offsetX / this.offsetWidth;
    media.currentTime = percent * media.duration;
  }
  
  calculatePercentPlayed();
}

$(ui.play).addEventListener('click', togglePlay)
$(ui.audio).addEventListener('timeupdate', initProgressBar);
