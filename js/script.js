function toggleInfo(idToggle, idLink) {
  let extendedDisplay = document.getElementById(idToggle);
  let toggleLink = document.getElementById(idLink);

  if (extendedDisplay.style.display == 'none' || extendedDisplay.style.display == '') {
    extendedDisplay.style.display = 'block';
    toggleLink.text = 'How to use? (show less)';
  } else {
    extendedDisplay.style.display = 'none';
    toggleLink.text = 'How to use? (show more)';
  }
  console.log("toggled display!")
};

function togglePortrait(idCheckbox, idPortrait) {
  let checkbox = document.getElementById(idCheckbox);
  let image = document.getElementById(idPortrait);

  if (checkbox.checked) {
    image.parentElement.style.visibility = 'visible'; // The black border
    image.style.visibility = 'visible'; // The image itself
  } else {
    image.parentElement.style.visibility = 'hidden'; // The black border
    image.style.visibility = 'hidden'; // The image itself
  }
};

function clearPortrait(identifier) {
  let image = document.getElementById(identifier);
  image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  image.nextElementSibling.value = null
};


function toggleText(idCheckbox, idTextarea) {
  let checkbox = document.getElementById(idCheckbox);
  let textarea = document.getElementById(idTextarea);
  let fontFamily = window.getComputedStyle(textarea, 'font-family').getPropertyValue('font-family');

  if (checkbox.checked) {
    textarea.style.fontFamily = 'OMORI_DISTURBED';
  } else {
    textarea.style.fontFamily = 'OMORI_MAIN';
  }
};

function clearFrame(identifier) {
  let frame = document.getElementById(identifier);
  // The below needs to be refactored at some point, OH GOD
  let inputList = frame.getElementsByTagName('input');
  let charName = inputList[4];
  let download = frame.getElementsByTagName('a')[0];
  // End of refactor section
  let image = frame.getElementsByTagName('img')[0];
  let canvas = frame.getElementsByTagName('canvas')[0];

  frame.reset();
  image.src = "https://via.placeholder.com/106/000000?text=click+me!";
  canvas.style.display = "none";
  download.style.display = "none";

};

function displayPortrait(event, identifier) {
  // Adapted from https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript, by Jiwan Thapa
  let image = document.getElementById(identifier);
  image.src = URL.createObjectURL(event.target.files[0])
};

function displayDownload(identifier) {
  let downloadButton = document.getElementById(identifier);
  downloadButton.style.display = 'block';
};
