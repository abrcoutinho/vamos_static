
// Color theme
const switchTheme = document.getElementById('switch_theme');
function toggleTheme(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    switchTheme.className = "on";
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    switchTheme.className = "off";
  }
}
switchTheme.addEventListener('change', toggleTheme, false);


// Desmob cards
function expandDesmobCard(evt) {
  var i, desmob_card;

  desmob_card = document.getElementsByClassName("desmob_card");
  for (i = 0; i < desmob_card.length; i++) {
    desmob_card[i].className = desmob_card[i].className.replace(" expanded", "");
  }
  evt.currentTarget.className += " expanded";

}

