let overlay = document.getElementById('overlay');
let vid = document.getElementById('video-player');

vid.addEventListener('click',
    function () {
    if (vid.paused){
        vid.play();
        overlay.classList.toggle('player');
    } else {
        vid.pause();
        overlay.classList.toggle('player');
    }
    }
    );

let nav = document.querySelector('nav');
let menylink = document.querySelector('.burger-meny');
menylink.addEventListener(
    'click',
    ()=>{
        nav.classList.toggle('burger-meny-active');
    }
);