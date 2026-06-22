# Projeto - Integração Contínua com GitHub Actions

## Objetivo

Implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução automatizada dos testes da aplicação.

---

## Tecnologias Utilizadas

* Node.js
* Mocha
* Mochawesome
* GitHub Actions

---

## Estratégia da Solução

A pipeline foi construída em um único arquivo YAML localizado em:

```text
.github/workflows/ci.yml
```

Ela executa os testes automatizados em três cenários:

### 1. Execução por Push

Sempre que ocorrer um push para a branche:

* main

a pipeline será executada automaticamente.

### 2. Execução Manual

Através do recurso:

```yaml
workflow_dispatch
```

é possível executar a pipeline manualmente pela interface do GitHub.

### 3. Execução Agendada

A pipeline também possui execução programada:

```yaml
schedule:
  - cron: '30 2 * * *'
```

Executando diariamente às 23:30 UTC-3.

---

## Execução dos Testes

Os testes são executados utilizando Mocha.

Comando:

```bash
npm run test:report
```

---

## Relatórios

Foi utilizado o reporter Mochawesome para geração dos relatórios.

Arquivos gerados:

* resultado.html
* resultado.json

Localização:

```text
reports/
```

---

## Armazenamento dos Relatórios

Após a execução dos testes, os relatórios são publicados como Artifact do GitHub Actions.

Trecho responsável:

```yaml
- name: Publicar relatório
  uses: actions/upload-artifact@v4
```

Os relatórios ficam disponíveis para download diretamente na execução da pipeline.

---

## Fluxo da Pipeline

1. Checkout do código.
2. Instalação do Node.js.
3. Instalação das dependências.
4. Execução dos testes.
5. Geração do relatório.
6. Publicação do relatório como Artifact.

---

## Evidências Esperadas

Ao final da execução:

* Todos os testes executados com sucesso.
* Relatório HTML gerado.
* Artifact disponível para download.
* Pipeline concluída com status Success.

---

## Conceitos Aplicados

### Continuous Integration (CI)

Prática de executar validações automáticas a cada alteração enviada ao repositório.

### GitHub Actions

Ferramenta nativa do GitHub para automação de pipelines.

### Workflow

Arquivo YAML responsável por definir os eventos e etapas da automação.

### Artifact

Arquivo gerado durante a execução da pipeline e armazenado pelo GitHub para consulta posterior.

### Schedule

Execução automática baseada em expressão cron.

### Workflow Dispatch

Permite disparar a execução manual da pipeline.
