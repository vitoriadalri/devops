# Projeto DevOps - Fase 1

Repositório de exemplo para a fase 1 do projeto: Configuração e Automação Inicial.

## Conteúdo

- Documentação de planejamento em `docs/trabalho_fase1.md`
- Pipeline de CI em `.github/workflows/ci.yml`
- Testes automatizados em `tests/`
- Scripts de infraestrutura como código em `infra/terraform/`

## Como executar os testes

```powershell
npm install
npm test
```

## Como verificar o TypeScript

```powershell
npm run typecheck
```

## Como validar o Terraform

```powershell
cd infra/terraform
terraform fmt -check
terraform init
terraform validate
```

## Link do repositório

Substitua este endereço pelo link real após criar o repositório no GitHub:

https://github.com/vitoriadalri/devops-fase1
