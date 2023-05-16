// var width = $(window).width()

// window.onscroll = function () {
//   if (width >= 900) {
//     if (
//       document.body.scrollTop > 80 ||
//       document.documentElement.scrollTop > 80
//     ) {
//       $('#middle').css('background-size', '150% auto')
//     } else {
//       $('#middle').css('background-size', '100% auto')
//     }
//   }
// }

// document.getElementById('hamburger').addEventListener('click', function () {
//   const linksContainer = document.querySelector('.links-container')
//   linksContainer.classList.toggle('show')
// })

window.onscroll = function () {
  var width = $(window).width() // Update the width variable inside the function
  if (width >= 900) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $('#middle').css('background-size', '150% auto')
    } else {
      $('#middle').css('background-size', '100% auto')
    }
  }
}
