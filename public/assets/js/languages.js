   // Tenta obter o idioma do localstorage
   let currentLanguage = localStorage.getItem('language');
   let flagActive = localStorage.getItem('flag-active');

   // Se não houver idioma no localStorage, define o idioma padrão para pt-br
   if (!currentLanguage) {
      currentLanguage = 'pt-br';
      localStorage.setItem('language', 'pt-br');
   }

   // Se não houver flag no localStorage, define a flag padrão para eua active
   if (!flagActive) {
      flagActive = 'eua active';
      localStorage.setItem('flag-active', 'eua active');
   }

   loadTranslations(currentLanguage); // Carrega o idioma que esta no localStorage
   updateFlagVisuals(flagActive); // Carrega a bandeira que esta no localStorage

// Função para atualizar as bandeiras
function updateFlagVisuals(flagActive) {
   const brasilFlag = document.querySelector('.brasil');
   const euaFlag = document.querySelector('.eua');

   // Atualiza visualmente a flag com base na flag ativa no localStorage
   if (flagActive === 'eua active') {
      euaFlag.classList.add('active');
      brasilFlag.classList.remove('active');
   } else {
      euaFlag.classList.remove('active');
      brasilFlag.classList.add('active');
   }
}


function loadTranslations(language) {
   fetch(`/assets/json/language/${language}.json`)
      .then(response => response.json())
      .then(translations => {
         // Atualiza o conteúdo dos elementos com base nas traduções carregadas
         updateContent(translations);
         currentLanguage = language // Atualiza o idioma atual
      })
      .catch(error => console.error('Erro ao carregar traduções', error))
};

function updateContent(translations) {
   // Itera sobre os elementos com data-lang
   for (const key in translations) {
      for (const keyLang in translations[key]) {
         const data = document.querySelector(`[data-lang="${keyLang}"]`);
         if(data) {
            // Verifica se o elemento é um input
            if (data.tagName.toLowerCase() === 'input') {
               // Verifica se o tipo do input é submit
               if (data.type.toLowerCase() === 'submit') {
                  // Atualiza o value do input
                  data.value = translations[key][keyLang];
               } else {
                  // Atualiza o placeholder do input
                  data.placeholder = translations[key][keyLang];
               }
            } else if (data.tagName.toLowerCase() === 'textarea') {
               // Atualiza o placeholder do textarea
               data.placeholder = translations[key][keyLang];
            } else {
               // Atualiza o innerHTML para outros elementos
               data.innerHTML = translations[key][keyLang];
            }
         }
      }
   }
}



function changeLanguage() {
   const brasilFlag = document.querySelector('.brasil');
   const euaFlag = document.querySelector('.eua');
   const currentFlag = localStorage.getItem('flag-active');

   // Troca as classes e atualiza flag-active no localStorage
   localStorage.setItem('flag-active', currentFlag === 'eua active' ? 'brasil active' : 'eua active');
   brasilFlag.classList.toggle('active');
   euaFlag.classList.toggle('active');

   // Troca o idioma e carrega as traduções
   const currentLanguage = localStorage.getItem('language');
   const newLanguage = (currentLanguage === 'en') ? 'pt-br' : 'en';
   localStorage.setItem('language', newLanguage);
   loadTranslations(newLanguage);
}

// executada dentro do dns-grid.min.js
function startPage() {
   loadTranslations(currentLanguage); // Carrega o idioma que esta no localStorage
}



function setLanguage(language) {
   const htmlLang = document.documentElement;
   htmlLang.setAttribute('lang', language)

   localStorage.setItem('language', language);
}

window.addEventListener('load', function () {
   // Carrega o idioma do localStorage
   let currentLanguage = localStorage.getItem('language') || 'pt-br';
   setLanguage(currentLanguage);

   // Adicionar ouvindo de evento para o botao de troca de idioma
   const languageButton = document.querySelector('.language');
   if (languageButton) {
      languageButton.addEventListener('click', function() {
         // trocar idioma quando o botao for clicado
         currentLanguage = (currentLanguage === 'en') ? 'pt-br' : 'en'
         setLanguage(currentLanguage)
      })
   }
})