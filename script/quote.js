let atual = 1
let anterior = 0

function adicionar() {
  anterior = atual
  var form = document.getElementById("form");

  let preRequisito = document.createElement("input");

  let label = document.createElement("label");
  label.textContent = "Pré requisito " + atual + ":";

  let quebraLinha = document.createElement("br")
  let quebraLinha2 = document.createElement("br")

  preRequisito.setAttribute("type", "text");
  preRequisito.setAttribute("class", "requisito");
  preRequisito.setAttribute("id", "input" + atual);
  preRequisito.setAttribute("placeholder", "Ex: banner grande na tela inicial");

  label.setAttribute("class", "inputText");
  label.setAttribute("id", "label" + atual);

  quebraLinha.setAttribute("id", "qbl1" + atual);
  quebraLinha2.setAttribute("id", "qbl2" + atual);

  form.appendChild(label);
  form.appendChild(quebraLinha);
  form.appendChild(preRequisito);
  form.appendChild(quebraLinha2);
  atual++;
  document.getElementById("BTNs").scrollIntoView();

}