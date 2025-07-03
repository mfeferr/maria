function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
  
    if (usuario === "Admin" && senha === "123@4") {
      window.location.href = "home.html";
    } else {
      document.getElementById("erroLogin").innerText = "Usuário ou senha incorretos.";
    }
  }
  
  function selecionarCarro(nome) {
    document.getElementById("formularioAluguel").style.display = "block";
    document.getElementById("mensagem").innerText = `Veículo escolhido: ${nome}`;
    localStorage.setItem("carroEscolhido", nome);
  }
  
  function finalizarAluguel() {
    const nome = document.getElementById("nomeMotorista").value;
    const cnh = document.getElementById("cnhMotorista").value;
    const carro = localStorage.getItem("carroEscolhido");
  
    if (nome && cnh) {
      document.getElementById("mensagem").innerText =
        `Aluguel efetuado com sucesso!\nVeículo: ${carro}\nMotorista: ${nome} (CNH: ${cnh})`;
      document.getElementById("formularioAluguel").style.display = "none";
    } else {
      alert("Preencha todos os campos!");
    }
  }
  