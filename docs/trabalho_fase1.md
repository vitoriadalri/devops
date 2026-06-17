# Trabalho - Fase 1: Configuracao e Automacao Inicial

## 1. Documentacao de Planejamento

### a) Descricao do projeto

Este projeto tem como objetivo demonstrar a configuracao inicial de um fluxo DevOps, contemplando integracao continua, testes automatizados e infraestrutura como codigo. A proposta e organizar um repositorio no GitHub contendo uma aplicacao simples em Node.js com TypeScript, um pipeline de CI com GitHub Actions e scripts Terraform para provisionamento de infraestrutura em nuvem.

O projeto foi estruturado para atender aos principais conceitos estudados nas aulas de Introducao ao DevOps, Integracao Continua, Entrega Continua e Infraestrutura como Codigo.

### Objetivos

- Criar um repositorio versionado no GitHub.
- Configurar um pipeline de integracao continua com GitHub Actions.
- Executar testes automatizados a cada envio de codigo ou abertura de pull request.
- Verificar tipos do projeto TypeScript durante a integracao continua.
- Validar os scripts de infraestrutura como codigo no pipeline.
- Documentar os requisitos, o plano de CI e a infraestrutura necessaria.

### Requisitos funcionais

- O repositorio deve conter uma aplicacao simples em Node.js com TypeScript para demonstracao.
- O projeto deve possuir testes automatizados.
- O pipeline deve executar os testes automaticamente.
- O pipeline deve validar a tipagem do codigo TypeScript.
- O pipeline deve validar os arquivos Terraform.
- Os scripts de infraestrutura devem estar organizados em pasta propria.

### Requisitos nao funcionais

- O codigo deve ser versionado no GitHub.
- O pipeline deve ser executado automaticamente em `push` e `pull_request`.
- A infraestrutura deve ser descrita de forma reprodutivel por meio de Terraform.
- O projeto deve possuir documentacao clara para execucao e manutencao.

### Link do repositorio

Repositorio do projeto:

https://github.com/vitoriadalri/devops


## b) Plano de Integracao Continua

A integracao continua sera realizada com GitHub Actions. O arquivo de configuracao do pipeline esta localizado em:

`.github/workflows/ci.yml`

### Estrategia do pipeline

O pipeline sera executado automaticamente nas seguintes situacoes:

- Quando houver envio de codigo para a branch `main`.
- Quando houver abertura ou atualizacao de um pull request direcionado para a branch `main`.

### Etapas do pipeline

1. Baixar o codigo do repositorio.
2. Configurar o ambiente Node.js.
3. Instalar as dependencias do projeto.
4. Verificar a tipagem do codigo TypeScript.
5. Executar os testes automatizados da aplicacao.
6. Configurar o Terraform.
7. Verificar a formatacao dos arquivos Terraform.
8. Inicializar o Terraform sem backend remoto.
9. Validar a sintaxe e a configuracao dos scripts Terraform.

### Beneficios esperados

- Identificacao rapida de erros.
- Padronizacao da validacao antes de integrar alteracoes.
- Maior confianca na evolucao do projeto.
- Reducao de falhas manuais no processo de entrega.

## c) Especificacao da infraestrutura necessaria

A infraestrutura proposta sera provisionada com Terraform na AWS. Para esta primeira fase, foi definido um recurso simples e seguro: um bucket S3 para armazenamento de artefatos do projeto.

### Recursos previstos

- Bucket Amazon S3 para armazenar artefatos.
- Bloqueio de acesso publico ao bucket.
- Versionamento habilitado.
- Criptografia no lado do servidor com AES256.
- Tags para identificacao do projeto, ambiente e ferramenta de gerenciamento.

### Justificativa da infraestrutura

O bucket S3 representa um recurso comum em ambientes DevOps, pois pode ser usado para armazenar artefatos de build, arquivos de deploy, logs ou outros arquivos gerados durante o ciclo de entrega. A configuracao tambem aplica boas praticas basicas de seguranca, como bloqueio de acesso publico, criptografia e versionamento.

### Ferramenta utilizada

A ferramenta escolhida foi o Terraform, por permitir a declaracao da infraestrutura em arquivos versionados, facilitando reproducao, revisao e automacao.

### Arquivos de infraestrutura

- `infra/terraform/provider.tf`: define versao do Terraform, provider AWS e regiao.
- `infra/terraform/variables.tf`: define variaveis configuraveis do projeto.
- `infra/terraform/main.tf`: descreve os recursos de infraestrutura.
- `infra/terraform/outputs.tf`: exibe informacoes importantes apos o provisionamento.

## 2. Pipeline de Integracao Continua configurado

O pipeline foi implementado com GitHub Actions no arquivo `.github/workflows/ci.yml`.

Ele possui dois jobs principais:

- `testes`: instala dependencias, verifica a tipagem TypeScript e executa os testes automatizados da aplicacao.
- `terraform`: valida formatacao e configuracao dos scripts de infraestrutura.

Exemplo de comando executado no job de testes:

```bash
npm install
npm run typecheck
npm test
```

Exemplo de comandos executados no job de Terraform:

```bash
terraform fmt -check
terraform init -backend=false
terraform validate
```

## 3. Scripts de Infraestrutura como Codigo

Os scripts de infraestrutura como codigo foram desenvolvidos com Terraform e armazenados na pasta `infra/terraform`.

Para executar localmente, e necessario ter o Terraform instalado e credenciais AWS configuradas. Os comandos principais sao:

```bash
cd infra/terraform
terraform init
terraform plan
terraform apply
```

Para destruir a infraestrutura criada, utiliza-se:

```bash
terraform destroy
```

## 4. Testes automatizados implementados e integrados

Os testes automatizados foram implementados com o test runner nativo do Node.js e escritos em TypeScript. Os testes estao localizados em:

`tests/main.test.ts`

Eles validam o comportamento das funcoes principais da aplicacao de exemplo, localizada em `src/main.ts`, incluindo:

- Retorno de pipeline aprovado quando testes e Terraform estao validos.
- Retorno de pipeline reprovado quando alguma validacao falha.
- Geracao de mensagem de boas-vindas com nome do projeto.
- Geracao de mensagem padrao quando o nome do projeto nao e informado.

Como os testes foram integrados ao GitHub Actions, eles serao executados automaticamente sempre que houver alteracoes no repositorio.

## Conclusao

A fase 1 do projeto foi atendida com a criacao da documentacao de planejamento, configuracao do pipeline de CI, desenvolvimento dos scripts de infraestrutura como codigo e integracao dos testes automatizados. Essa base permite evoluir o projeto nas proximas fases com maior controle, padronizacao e confianca.
