
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



// const phoneToCopy = document.getElementsByClassName(".phone");

// for (var i = 0; i < phoneToCopy.length; i++) {
//   phoneToCopy[i].addEventListener('click', function() {
//     console.log(this.value);
//   }, false);
// }




// Copy phone to clipboard
// function copyPhone() {
//   const phoneToCopy = document.querySelectorAll(".phone");

//   for (var i = 0; i < phoneToCopy.length; i++) {
//     phoneToCopy[i].addEventListener('click', function(event) {
//       console.log(this.value);
//     });
//   }


  // phoneToCopy.select();
  // phoneToCopy.setSelectionRange(0, 99999); // For mobile devices

  // navigator.clipboard.writeText(phoneToCopy.value);

  // alert("Copied the text: " + phoneToCopy.value);
// }

