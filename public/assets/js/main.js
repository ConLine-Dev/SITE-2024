// Ao clicar rola a tela para baixo
function arrowScroll(element) {
   window.scroll({top: window.innerHeight, behavior: 'smooth'})
}

// Rola para o inicio da página ao clicar no home
function scrollToHome(element) {
   if (element) {
      window.scrollTo({
         top: element.offsetTop,
         behavior: "smooth"
      });
   };
};