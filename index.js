window.addEventListener('keydown', handleKey);
window.addEventListener('mousedown', handleMouse);

function handleKey(e) {
  const audio = document.querySelector(`audio[id="${e.key.toUpperCase()}"]`);
  console.log(audio.parentNode.id);
  display(audio.parentNode.id);
  playSound(audio);
}

function handleMouse(e) {
  const audio = document.querySelector(`audio[id="${e.target.firstChild.id}"]`);
  console.log(audio.parentNode.id);
  display(audio.parentNode.id);
  playSound(audio);
}

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

function display(sound) {
  const displayBox = document.querySelector('#display');
  displayBox.innerText = sound;
}

/*function getTarget(e) {
    const audio = document.querySelector(`audio[id="${e.target.firstChild.id}"]`);
    audio.currentTime = 0;
    audio.play();
    //console.log(e.target.firstChild.id);
    console.log(`audio[id="${e.target.firstChild.id}"]`);
  }
  
  function playSound(e) {
    const audio = document.querySelector(`audio[id="${e.key.toUpperCase()}"]`);
    audio.currentTime = 0;
    audio.play();
    console.log(e.key.toUpperCase());
    console.log(`audio[id="${e.key.toUpperCase()}"]`)
  }*/