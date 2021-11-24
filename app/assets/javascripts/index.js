window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
  pad.classList.remove('playing'); // prevent stuck class
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  pad.classList.add('playing');
});

function removeEffect(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};

const pads = document.querySelectorAll('.pad');
pads.forEach(pad => pad.addEventListener('transitionend', removeEffect));
