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
        }

        if (altura <= 0 || altura >= 3.0) {
            console.log("Altura inválida");
            tdIMC.textContent = "Altura inválida!";
            alturaValida = false;
        }


        if (pesoValido && alturaValida) {
            //calculando o IMC
            var imc = peso / (altura * altura);
            tdIMC.textContent = imc.toFixed(2);
        } else {
            tdIMC.textContent = "Altura ou peso inválidos!";
        };

    }
        

        


 

