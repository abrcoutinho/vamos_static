
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


// Tabs em detalhe do contrato
function changeAssetsTab(evt, content) {
  var i,  tabcontent, tablink;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }

  document.getElementById(content).style.display = "block";
  evt.currentTarget.className += " active";
}


// Desmobilizar ativos em detalhe do contrato
function revealSelectedAssets() {
  document.querySelector(".contract_detail > aside").style.display = "none";
  document.querySelector(".contract_detail .ativos_selecionados").style.display = "flex";
}
function cancelSelectedAssets() {
  document.querySelector(".contract_detail > aside").style.display = "flex";
  document.querySelector(".contract_detail .ativos_selecionados").style.display = "none";
}
function confirmDesmobSelectedAssets() {
  document.querySelector(".contract_detail .ativos_selecionados .dialog").style.display = "block";
}
function cancelDesmobDialog() {
  document.querySelector(".contract_detail .ativos_selecionados .dialog").style.display = "none";
}
function selectMotivo() {
  document.querySelector(".contract_detail .ativos_selecionados .motivo_desmob_menu").style.display = "block";
}


// Expande cards da esteira de desmobilizacao
function expandDesmobCard(evt) {
  var i, desmob_card;

  desmob_card = document.getElementsByClassName("desmob_card");
  for (i = 0; i < desmob_card.length; i++) {
    desmob_card[i].className = desmob_card[i].className.replace(" expanded", "");
  }
  evt.currentTarget.className += " expanded";
}

