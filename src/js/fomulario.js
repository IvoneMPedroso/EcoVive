document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio para teste

    // Verifica se o nome contém pelo menos 3 caracteres
    const nome = document.getElementById('nome').value;
    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    // Verifica se o telefone está no formato correto
    const telefone = document.getElementById('telefone').value;
    const telefonePattern = /^\d{2}-\d{5}-\d{4}$/;
    if (!telefonePattern.test(telefone)) {
        alert("O telefone deve estar no formato (xx) xxxxx-xxxx.");
        return;
    }

    // Se todas as validações passarem, enviar o formulário
    alert("Formulário enviado com sucesso!");
    this.submit(); // Envia o formulário
});