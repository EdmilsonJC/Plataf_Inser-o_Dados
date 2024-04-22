var qtdNotas = 4;
var qtdAlunos = 5;

function desenharTabela() {
  const tabela = document.querySelector("#tabela"); //querySelector = get.ElementById || # = id
  // let dadoAntigo = "";
  for (let aluno = 1; aluno <= qtdAlunos; aluno++) {
    // dadoAntigo = tabela.innerHTML;
    tabela.innerHTML += `<tr id= linha${aluno}>
      <th>${aluno}</th>
      <td><input type="text" class="form-control" id="nome${aluno}" placeholder="nome"></td>
      <td><input type="number" class="form-control" id="a${aluno}n1" placeholder=""></td>
      <td><input type="number" class="form-control" id="a${aluno}n2" placeholder=""></td>
      <td><input type="number" class="form-control" id="a${aluno}n3" placeholder=""></td>
      <td><input type="number" class="form-control" id="a${aluno}n4" placeholder=""></td>
      <td><output id="media${aluno}"></output></td>
      <td><output id="situacao${aluno}"></output></td>
  </tr>`;
  }
}

function adicionarAluno() {
  qtdAlunos += 1;
  const tabela = document.querySelector("#tabela");

  //Criação dos elementos
  let linha = document.createElement("tr"); //criar tag linha da tabela
  let headerLinha = document.createElement("th");
  let dadoNome = document.createElement("td");
  let inputNome = document.createElement("input");
  let dadoNota = "";
  let inputNota = "";
  let outputMedia = "";
  let dadoMedia = "";
  let outputSitu = "";
  let dadoSitu = "";

  linha.id = `linha${qtdAlunos}`;

  headerLinha.innerText = qtdAlunos;
  inputNome.classList.add("form-control");
  inputNome.id = `a${qtdAlunos}`;
  inputNome.type = "text";
  inputNome.placeholder = "nome";

  dadoNome.appendChild(inputNome);
  linha.appendChild(headerLinha);
  linha.appendChild(dadoNome);

  for (let nota = 1; nota <= qtdNotas; nota++) {
    dadoNota = document.createElement("td");
    inputNota = document.createElement("input");
    inputNota.classList.add("form-control");
    inputNota.id = `a${qtdAlunos}n${nota}`;
    inputNota.type = "number";

    dadoNota.appendChild(inputNota);
    linha.appendChild(dadoNota);
  }

  outputMedia = document.createElement("output");
  dadoMedia = document.createElement("td");
  outputMedia.id = `media${qtdAlunos}`;

  outputSitu = document.createElement("output");
  dadoSitu = document.createElement("td");
  outputSitu.id = `situacao${qtdAlunos}`;

  linha.appendChild(dadoNota);
  dadoNota.appendChild(inputNota);

  linha.appendChild(dadoMedia);
  dadoMedia.appendChild(outputMedia);

  linha.appendChild(dadoSitu);
  dadoSitu.appendChild(outputSitu);
  tabela.appendChild(linha); // adiciona uma linha <tr> ao final da tabela
}

function deletarAluno() {
  if (qtdAlunos > 1) {
    let alunoDeletar = document.querySelector(`#linha${qtdAlunos}`);
    document.querySelector("#tabela").removeChild(alunoDeletar);
    qtdAlunos--;
    //qtdAlunos = qtdAlunos - 1;
  }
}

function criarNota() {
  qtdNotas++;
  //qtdNotas = qtdNotas + 1;
  let colunaReferencia = document.querySelector("#media0");
  let novaColuna = document.createElement("th");

  novaColuna.innerText = `Nota ${qtdNotas}`;
  document.querySelector("#linha0").insertBefore(novaColuna, colunaReferencia);

  for (let aluno = 1; aluno <= qtdAlunos; aluno++) {
    let dadoNota = document.createElement("td");
    let inputNota = document.createElement("input");

    inputNota.classList.add("form-control");
    inputNota.id = `a${aluno}n${qtdNotas}`;
    inputNota.type = "number";

    dadoNota.appendChild(inputNota);

    novaColuna = dadoNota;
    colunaReferencia = document.querySelector(`#media${aluno}`).parentElement;
    document
      .querySelector(`#linha${aluno}`)
      .insertBefore(novaColuna, colunaReferencia);
  }
}

function deletarNota() {
  let notaDeletar = document.querySelector("#media0").previousElementSibling;
  document.querySelector("#linha0").removeChild(notaDeletar);

  for (let aluno = 1; aluno <= qtdAlunos; aluno++) {
    notaDeletar = document.querySelector(
      `#a${aluno}n${qtdNotas}`
    ).parentElement;
    document.querySelector(`#linha${aluno}`).removeChild(notaDeletar);
  }
  qtdNotas = qtdNotas - 1;
}

function calcular() {
  let notaParcial;
  let notaSoma;
  let mediaFinal;
  //let situacao="";
  //let situacaoCor="";
  for (let aluno = 1; aluno <= qtdAlunos; aluno++) {
    notaParcial = 0;
    notaSoma = 0;
    mediaFinal = 0;
    //entrada de dados
    for (let nota = 1; nota <= qtdNotas; nota++) {
      notaParcial = Number(document.getElementById(`a${aluno}n${nota}`).value);
      notaSoma = notaSoma + notaParcial;
      //notaSoma += notaParcial
    }
    mediaFinal = notaSoma / qtdNotas;
    document.getElementById(`media${aluno}`).innerText = mediaFinal;
    //document.getElementById(`situacao${aluno}`).innerText = situacao;

    if (mediaFinal >= 70 && mediaFinal <= 100) {
      const situacao = document.getElementById(`situacao${aluno}`);
      situacao.innerText = "aprovado";
      situacao.style.backgroundColor = "green ";
      situacao.style.padding = "5px";
    } else if (mediaFinal < 70 && mediaFinal >= 50) {
      const situacao = document.getElementById(`situacao${aluno}`);
      situacao.innerText = "recuperação";
      situacao.style.backgroundColor = "yellow";
      situacao.style.padding = "5px";
    } else if (mediaFinal < 50) {
      const situacao = document.getElementById(`situacao${aluno}`);
      situacao.innerText = "reprovado";
      situacao.style.backgroundColor = "red";
      situacao.style.padding = "5px";
    }
  }
}
// function adicionarNota() {
//   qtdAlunos += 1;
//   const tabela = document.querySelector("#tabela");
//   alert("xd");

//   for(x = qtdNotas; x <=  ; x++){

//   }

// }

/* <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Nota 1</th>
          <th scope="col">Nota 2</th>
          <th scope="col">Nota 3</th>
          <th scope="col">Nota 4</th>
          <th scope="col">Média</th>
          <th scope="col">Situação</th> */

/*
    mediaFinal = (notaSoma)/qtdNotas;
    if(mediaFinal >=50){
        situacao = 'Aprovado';
        situacaoCor = "green";
    }else if(mediaFinal >=45 && mediaFinal < 50){
        situacao = 'Recuperação';
        situacaoCor = "yellow";
    }else if(mediaFinal < 45){
        situacao = 'Reprovado';
        situacaoCor = "red";
    }
    
    document.getElementsById(`situacao${aluno}`).innerText = situacao;
    document.getElementsById(`situacao${aluno}`).style.backgroudColor = "situacaoCor";



    
    let n2 = Number(document.getElementById("a1n2").value);
    let n3 = Number(document.getElementById("a1n3").value);
    let n4 = Number(document.getElementById("a1n4").value);

    processamento dos dados
    mediaFinal = (n1 + n2 + n3 + n4) / 4;

    saída de dados
  */
