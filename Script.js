var qtdNotas = 4;
var qtdAluno = 1;

function calcular() {
  let notaParcial;
  let notaSoma;
  let mediaFinal;

  for (let aluno = 1; aluno <= qtdAluno; aluno++) {
    notaParcial = 0;
    notaSoma = 0;
    mediaFinal = 0;

    for (let nota = 1; nota <= qtdNotas; nota++) {
      notaParcial = Number(
        document.getElementById(`nota${nota}-${aluno}`).value
      );
      notaSoma += notaParcial;
    }
    mediaFinal = notaSoma / qtdNotas;
    document.getElementById(`media${aluno}`).innerText = mediaFinal;

    if (mediaFinal < 50) {
      document.getElementById(`situacao${aluno}`).innerText = "REPROVADO";
      document.getElementById(`situacao${aluno}`).style.background = "red";
    }

    if (mediaFinal >= 50 && mediaFinal < 70) {
      document.getElementById(`situacao${aluno}`).innerText = "RECUPERACÃO";
      document.getElementById(`situacao${aluno}`).style.background = "yellow";
    }

    if (mediaFinal >= 70) {
      document.getElementById(`situacao${aluno}`).innerText = "APROVADO";
      document.getElementById(`situacao${aluno}`).style.background = "green";
    }
  }

  /*2ª Opção - para calcular a média
    
    let situacao = '';
    let situacaoCor='';
    if (mediaFinal<50){
      situacao = "REPROVADO";
      situacaoCor = "red";

    }else if(mediaFinal>=50 && mediaFinal<70)
      situacao = "RECUPERAÇÃO";
      situacaoCor = "yellow";

    }else if(mediaFinal>=70){
      situacao = "APROVADO";
      situacaoCor = "Green"
      
    }
        
    document.getElementById(`media${aluno}`).innerText = mediaFinal;
    document.getElementById(`situacao${aluno}`).innerText = situacao;
    document.getElementById(`situacao${aluno}`).style.background = situacaoCor; */
}

function desenharTabela() {
  const tabela = document.querySelector("#tabela");
  let dadoAntigo = "";
  for (let aluno = 1; aluno <= qtdAluno; aluno++) {
    dadoAntigo = tabela.innerHTML;
    tabela.innerHTML =
      dadoAntigo +
      `<tr>
                                        <th>${aluno}</th>
                                        <td><input type="text" class="form-control nome" id="nome${aluno}" cplaceholder="nome1"/></td>
                                        <td><input type="number" class="form-control nota" id="nota1-${aluno}" placeholder=""/></td>
                                        <td><input type="number" class="form-control nota" id="nota2-${aluno}" placeholder=""/></td>
                                        <td><input type="number" class="form-control nota" id="nota3-${aluno}" placeholder=""/></td>
                                        <td><input type="number" class="form-control nota" id="nota4-${aluno}" placeholder=""/></td>
                                        <td><output id="media${aluno}"></output></td>
                                        <td><output id="situacao${aluno}"></output></td>

                                      </tr>`;
  }
}

function adicionaColuna() {}

function deletaNota() {}

function addAluno() {
  qtdAluno = qtdAluno + 1;

  const tabela = document.querySelector("#tabela");
  let linha = document.createElement("tr"); //criar elemnto linha da tabela
  let headerLinha = document.createElement("th");
  let dadoNome = document.createElement("td");
  let inNome = document.createElement("input");
  let dadoNota = "";
  let InNota = "";

  headerLinha.innerText = qtdAluno;

  inNome.classList.add("form-control");
  inNome.id = `nome${qtdAluno}`;
  inNome.type = "text";
  inNome.placeholder = "nome";

  dadoNome.appendChild(inNome);
  linha.appendChild(headerLinha);
  linha.appendChild(dadoNome);

  for (let nota = 1; nota <= qtdNotas; nota++) {
    dadoNota = document.createElement("td");
    InNota = document.createElement("input");
    InNota.classList.add("form-control");
    InNota.id = `nota${nota}-${qtdAluno}`;
    InNota.type = "number";

    dadoNota.appendChild(InNota);
    linha.appendChild(dadoNota);
  }

  tabela.appendChild(linha);
}
