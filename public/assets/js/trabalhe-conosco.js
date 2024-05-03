const form = document.querySelector('#contact-form');

// Função que apresenta o nome do arquivo no input
function showFileName() {
    const fileInput = document.getElementById('form_file');
    const fileNameDisplay = document.getElementById('file-name-display');
 
    // Verifica se algum arquivo foi selecionado
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileNameDisplay.textContent = '' + fileName;
    } else {
        // Se nenhum arquivo foi selecionado, limpa o conteúdo
        fileNameDisplay.textContent = '';
    }
};

// Verifica se o formulário esta todo preenchido para poder habilitar o botão de ENVIAR MENSAGEM
form.addEventListener('input', function(e){
    e.preventDefault();

    const form_name = document.getElementById('form_name');
    const form_email = document.getElementById('form_email');
    const form_message = document.getElementById('form_message');
    const form_file = document.getElementById('form_file');
    const btn_submit = document.getElementById('submit-button');

    if(form_name.value.trim() == '' || form_email.value.trim() == '' || form_message.value.trim() == '' || !form_file.files[0] || form_file.files[0].size == 0) {
        btn_submit.disabled = true
    } else {
        btn_submit.disabled = false
    }
})

// Quando clicar no botão de ENVIAR MENSAGEM envia os dados para o servidor para o email ser enviado para o RH
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Seleciona os elementos que fazem parte do formulário
    const form_name = document.getElementById('form_name');
    const form_email = document.getElementById('form_email');
    const form_message = document.getElementById('form_message');
    const form_file = document.getElementById('form_file');
    const fileNameDisplay = document.getElementById('file-name-display');
    const btn_submit = document.getElementById('submit-button');
    const btn_loading = document.getElementById('btn-loading');

    // Depois que o botão de submit por clicado, da display none no botão e display block em um botao de loading
    btn_submit.style.display = 'none';
    btn_loading.style.display = 'block';

    // Verificação se foi anexado algum arquivo
    if(!form_file.files[0] || form_file.files[0].size == 0) {
        return false;
    }

    // Verificação se os campos de texto foram preenchidos
    if(form_name.value.trim() == '' || form_email.value.trim() == '' || form_message.value.trim() == '') {
        return false;
    }

    // Captura os valores dos inputs para enviar ao servidor
    const formData = new FormData();
    formData.append('name', document.getElementById('form_name').value);
    formData.append('email', document.getElementById('form_email').value);
    formData.append('message', document.getElementById('form_message').value);
    formData.append('file', document.getElementById('form_file').files[0]);

    // Rota para enviar o email. Se for bem sucedido limpa os campos, apresenta um alerta e desabilitado o botão de submit
    fetch('/api/send-email', {
        method: 'POST',
        body: formData,
    })
    .then(res => res.json())
    .then(data => {
        if (data.captchaSucess) {
            form_name.value = '';
            form_email.value = '';
            form_message.value = '';
            form_file.value = '';
            fileNameDisplay.textContent = '';
            btn_submit.style.display = 'block';
            btn_loading.style.display = 'none';
            btn_submit.disabled = true;

            Swal.fire({
                icon: "success",
                title: "Conline em movimento!",
                text: "Seu e-mail foi com sucesso, assim que possivel estaremos entrando em contato!",
                showConfirmButton: false,
                timer: 5000
            });
        } else {
            // Caso de algum erro ao enviar o email vai apresentar esse alerta
            btn_submit.style.display = 'block';
            btn_loading.style.display = 'none';
            btn_submit.disabled = true;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Erro ao enviar o email, por favor, verifique os campos do formulário! Por favor, atualize a página e tente novamente",
                showConfirmButton: false,
                timer: 5000
            });
        }
    })
   .catch(err => console.error(err));
});