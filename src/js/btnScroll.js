const botaoFixo = document.querySelector('#botao-fixo')

window.addEventListener('scroll', function() {
  if( window.scrollY > 200 ){
    botaoFixo.style.opacity = '1'
  } else {
    botaoFixo.style.opacity = '0'
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  // Add click event listener to the hamburger
  hamburger.addEventListener('click', function () {
      // Toggle the 'active' class to show/hide the menu
      menu.classList.toggle('active');
  });
});
