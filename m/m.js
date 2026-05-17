const button = document.querySelector('.b')
// const video = document.querySelector('.a')
const div2 = document.querySelector('.bb')
const div = document.querySelector('.aa')


const video = $('.a')[0]


let i = 0

button.addEventListener('click', function () {

  if (i == 0) {
    video.muted = false

    i = i + 1
  }
  else {
    video.muted = true

    i = 0
  }

})
// button.addEventListener('click', function () {
//   if (video.paused) {
//     video.play();
//     btn.textContent = '暂停';
//   } else {
//     video.pause();
//     btn.textContent = '播放';
//   }

// })






