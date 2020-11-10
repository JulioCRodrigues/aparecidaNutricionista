    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Cida Nutrição";

    //manipulando os dados do primeiro paciente

    //selecionando o primeiro paciente através do ID
    var pacientes = document.querySelectorAll(".paciente");
    console.log(paciente);


    for (var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];

        //selecionando peso e altura atraves do paciente
        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");

        var tdIMC = paciente.querySelector(".info-imc");

        //pegando somente o conteúdo das variaveis
        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        var pesoValido = true;
        var alturaValida = true;
        //selecionando a coluna IMC

        if (peso <= 0 || peso >= 1000) {
            console.log("Peso inválido!");
            tdIMC.textContent = "Peso inválido!";
            pesoValido = false;
            paciente.classList.add("paciente-invalido");
        }

        if (altura <= 0 || altura >= 3.0) {
            console.log("Altura inválida");
            tdIMC.textContent = "Altura inválida!";
            alturaValida = false;
            paciente.classList.add("paciente-invalido");
        }


        if (pesoValido && alturaValida) {
            //calculando o IMC
            var imc = peso / (altura * altura);
            tdIMC.textContent = imc.toFixed(2);
        } else {
            tdIMC.textContent = "Altura ou peso inválidos!";
        };

    }
        
var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function (event){
    
    event.preventDefault();

    var form = document.querySelector('#form-adicionar');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var IMcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

});
        


 

