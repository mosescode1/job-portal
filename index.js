function changeBg() {
    let bar = document.getElementById('bar');
    var scrollValue = window.scrollY;
    if(scrollValue < 520) {
        bar.classList.remove('header-scrolled');
    }else{
        bar.classList.add('header-scrolled');
    }
    console.log(scrollValue); 
}

window.addEventListener('scroll', changeBg)


 $(document).ready(function () {
   $("#icon").click(function () {
     $("ul").toggleClass("show");
   });
 });



// const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 150) {
//         header.classList.add('header-scrolled');
//     }
// })