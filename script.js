function consultarCep() {
  const cep = document.getElementById('cep').value.replace(/\D/g, '');

  if (cep.length !== 8) {
    alert('CEP inválido. Digite no formato 00000-000.');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados => {
      if (dados.erro) {
        document.getElementById('resultado').innerHTML = `<p>CEP não encontrado.</p>`;
      } else {
        document.getElementById('resultado').innerHTML = `
                    <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
                    <p><strong>Bairro:</strong> ${dados.bairro}</p>
                    <p><strong>Cidade:</strong> ${dados.localidade}</p>
                    <p><strong>Estado (UF):</strong> ${dados.uf}</p>
                    <p><strong>CEP:</strong> ${dados.cep}</p>
                `;
      }
    })
    .catch(erro => {
      console.error(erro);
      document.getElementById('resultado').innerHTML = `<p>Erro ao consultar o CEP.</p>`;
    });
}
