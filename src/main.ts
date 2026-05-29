export function calcularStatusPipeline(
  testesPassando: boolean,
  terraformValido: boolean,
): string {
  if (testesPassando && terraformValido) {
    return "aprovado";
  }

  return "reprovado";
}

export function gerarMensagemBoasVindas(nomeProjeto: string): string {
  const nomeLimpo = nomeProjeto.trim();

  if (!nomeLimpo) {
    return "Projeto DevOps pronto para automacao.";
  }

  return `Projeto ${nomeLimpo} pronto para automacao.`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(gerarMensagemBoasVindas("DevOps Fase 1"));
}
