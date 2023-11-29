function createModalCookie() {
   const divModalCookies = document.createElement('div');
   divModalCookies.className = 'modal-cookies';
   divModalCookies.style.display = 'flex';

   divModalCookies.innerHTML = `
      <div class="box-content">
         <div style="margin-bottom: 8px;">
               <span data-lang="bem-vindo">Bem-vindo!</span>
         </div>
         <span data-lang="sobre-privacidade">A CONLINE usa cookies para armazenar informações sobre como você usa o nosso site e APPs e as páginas que visita. Tudo para tornar sua experiência a mais agradável possível. Para entender os tipos de cookies que utilizamos, clique em '<a class="privacidade-link" href="privacidade" target="_blank">Termos de Uso e Política de Privacidade</a>'. Ao clicar em 'Aceitar', você consente com a utilização de cookies e com os termos de uso e política de privacidade.</span>
      </div>
      <div class="box-button">
         <button class="btn-aceitar" data-lang="btn-aceitar">ACEITAR</button>
         <button class="btn-termos"><a href="privacidade" target="_blank" data-lang="btn-termos">TERMOS DE USO</a></button>
      </div>
   `

   // Adiciona ao body
   document.body.appendChild(divModalCookies);

   return divModalCookies;
};

// Ao carregar a página, verifica se a politica de privacidade esta true no localstorage, se tiver nao apresenta o modal
document.addEventListener('DOMContentLoaded', function() {
   const privacidadeAceita = localStorage.getItem('politica-privacidade') === 'true';

   if(!privacidadeAceita) {
      createModalCookie() // cria o modal

      // Se inserir o modal for criado ele seleciona os elementos
      const btnAceitaCookies = document.querySelector('.btn-aceitar');
      const modalCookies = document.querySelector('.modal-cookies');

      // Ao clicar em aceitar, salva a key e o value no localStorage para nao aparecer mais
      btnAceitaCookies.addEventListener('click', function() {
         localStorage.setItem('politica-privacidade', 'true')
         modalCookies.style.display = 'none'
      })
   }
});