# Projeto DevOps

Repositorio de exemplo para o projeto DevOps, contemplando CI/CD, testes automatizados, containerizacao com Docker e infraestrutura como codigo com Terraform.

## Conteudo

- Documentacao da fase 1 em `docs/trabalho_fase1.md`
- Relatorio da fase 2 em `docs/trabalho_fase2.md`
- Pipeline de CI/CD em `.github/workflows/ci.yml`
- Testes automatizados em `tests/`
- Containerizacao em `Dockerfile` e `docker-compose.yml`
- Scripts de deploy em `scripts/`
- Scripts de infraestrutura como codigo em `infra/terraform/`

## Como executar os testes

```powershell
npm install
npm test
```

## Como verificar o TypeScript

```powershell
npm run typecheck
```

## Como executar a aplicacao

```powershell
npm run build
npm start
```

A aplicacao ficara disponivel em:

```text
http://localhost:3000
http://localhost:3000/health
```

## Como executar com Docker

```powershell
docker compose up --build -d
```

Ou:

```powershell
.\scripts\deploy.ps1
```

## Como validar o Terraform

```powershell
cd infra/terraform
terraform fmt -check
terraform init
terraform validate
```

## Link do repositorio

https://github.com/vitoriadalri/devops
