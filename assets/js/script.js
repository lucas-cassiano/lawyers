var usuario = document.getElementById("usuario");
var email = document.getElementById("email");
var botaoVerificar = document.getElementById("enviar");
var phone = document.getElementById("phone");
var comments = document.getElementById("comments");
var assunto = document.getElementById("assunto");

// Função para verificar os campos
function verificarCampos() {
  if (usuario.value === "") {
    alert("Por favor preencha o campo nome.");
    return;
  } else if (email.value === "") {
    alert("Por favor preencha o campo email.");
    return;
  } else if (!validarEmail(email.value)) {
    alert("Por favor digite um email válido.");
    return;
  } else if (phone.value === "") {
    alert("Por favor preencha o campo telefone.");
    return;
  } else if (assunto.value === "") {
    alert("Por favor preencha o campo assunto.");
    return;
  } else if (comments.value === "") {
    alert("Por favor preencha o campo mensagem.");
    return;
  }
}

function validarEmail(email) {
  // Expressão regular para validar o formato do e-mail
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Adiciona um evento de clique ao botão
botaoVerificar.addEventListener("click", function (event) {
  event.preventDefault(); // Evita o envio do formulário
  /// verificarCampos();

  var formData = new FormData();
  formData.append("email", email.value);
  formData.append("nome", usuario.value);
  formData.append("telefone", phone.value);
  formData.append("assunto", assunto.value);
  formData.append("mensagem", comments.value);

  fetch("assets/php/email.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Erro na requisição.");
      }
      return response.text();
    })
    .then(function (data) {
      console.log(data); // Exibe a resposta do servidor
    })
    .catch(function (error) {
      console.error("Erro: " + error);
    });
});
