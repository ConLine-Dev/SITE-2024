function validateFile() {
   let fileInput = document.getElementById('form_file');
   let filePath = fileInput.value;
   let allowedExtensions = /(\.doc|\.docx|\.pdf)$/i;
   const modal = document.querySelector('.modal.fade');

   if (!allowedExtensions.exec(filePath)) {
      modal.classList.add('show');
      modal.style.display = 'block';
      fileInput.value = '';

      // Adiciona um ouvinte de evento ao documento para detectar cliques fora do modal-dialog
      document.addEventListener('click', remove_modal);

      return false;
  }
};

// Remove modal
function remove_modal(click) {
   const modal = document.querySelector('.modal.fade');
   const modal_dialog = document.querySelector('.modal-dialog');

   // Verifica se o clique ocorreu fora do modal-dialog
   if(!modal_dialog.contains(click.target)) {
      modal.classList.remove('show');
      modal.style.display = 'none';

      // Remove o ouvinte de evento após fechar o modal
      document.removeEventListener('click', remove_modal);
   }
}