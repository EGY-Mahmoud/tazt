//navbar responsive
var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}
// search

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icons').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// swiper slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
// swiper slider
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
        spaceBetween: 30,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop:true,

  });

  // to top button
  window.onscroll=function toTop(){
    if(window.pageYOffset>2200){
      btnTop.style.display='block'
    }
    else{
      btnTop.style.display='none'
    }
  };
  let btnTop = document.querySelector('.top');
  btnTop.onclick = function scrolltop(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }


// loader
// function loader(){
//   document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut(){
//   setInterval(loader, 2500);
// }
// window.onload = fadeOut();

