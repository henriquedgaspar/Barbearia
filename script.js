const servicos = [
  { id: "corte", nome: "Corte masculino", preco: 35 },
  { id: "barba", nome: "Barba", preco: 25 },
  { id: "combo", nome: "Corte + barba", preco: 55 },
  { id: "acabamento", nome: "Acabamento", preco: 15 },
  { id: "sobrancelha", nome: "Sobrancelha", preco: 15 },
  { id: "pigmentacao", nome: "Pigmentação", preco: 20 }
];

function moeda(valor) {
  return valor.toFixed(2).replace(".", ",");
}

function limparPedido() {
  servicos.forEach(servico => {
    document.getElementById(servico.id).value = 0;
  });
  document.getElementById("resumo").textContent = "";
}

function calcularPedido() {
  let total = 0;
  let resumo = "";

  for (const servico of servicos) {
    const campo = document.getElementById(servico.id);
    const quantidade = Number(campo.value);

    if (!Number.isInteger(quantidade) || quantidade < 0) {
      document.getElementById("resumo").textContent =
        "Digite quantidades inteiras maiores ou iguais a zero.";
      campo.focus();
      return;
    }

    if (quantidade > 0) {
      const subtotal = quantidade * servico.preco;
      total += subtotal;
      resumo += `${quantidade} x ${servico.nome} — R$ ${moeda(subtotal)}\n`;
    }
  }

  if (resumo === "") {
    resumo = "Nenhum serviço selecionado.\n";
  }

  resumo += `\nTOTAL: R$ ${moeda(total)}`;
  document.getElementById("resumo").textContent = resumo;
}
