# Implement Changelog archive

## Create/update CHANGELOG.md
 - https://www.npmjs.com/package/gulp-conventional-changelog

## Project to control commits message for changelog
 - https://marionebl.github.io/commitlint/

## Commitlint.config.js example:
 - https://github.com/marionebl/commitlint/blob/master/%40commitlint/config-conventional/index.js

## Create commit message automatic
 - http://commitizen.github.io/cz-cli/

----

## Descrition of auto
 ### Select the type of change that you're committing
 _Selecione o tipo de alteração que você está cometendo_
 <details>
 <summary>feat: A new feature</summary>
  + Um novo recurso
 </details>
 <details>
 <summary>fix: A bug fix</summary>
  + Uma correção de bug
 </details>
 <details>
 <summary>docs: Documentation only changes</summary>
  + Muda apenas documentação
 </details>
 <details>
 <summary>style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)</summary>
  + Alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente, etc)
 </details>
 <details>
 <summary>refactor: A code change that neither fixes a bug nor adds a feature</summary>
  + Uma alteração de código que não corrige um bug nem adiciona um recurso
 </details>
 <details>
 <summary>perf: A code change that improves performance</summary>
  + Uma mudança de código que melhora o desempenho
 </details>
 <details>
 <summary>test: Adding missing tests or correcting existing tests</summary>
  + Adicionando testes ausentes ou corrigindo testes existentes
 </details>
 <details>
 <summary>build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)</summary>
  + Alterações que afetam o sistema de construção ou dependências externas (escopos de exemplo: gulp, broccoli, npm)
 </details>
 <details>
 <summary>ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)</summary>
  + Alterações em nossos arquivos e scripts de configuração de IC (escopos de exemplo: Travis, Circle, BrowserStack, SauceLabs)
 </details>
 <details>
 <summary>chore: Other changes that don't modify src or test files</summary>
  + Outras alterações que não modificam arquivos src ou de teste
 </details>
 <details>
 <summary>revert: Reverts a previous commit</summary>
  + Reverte um commit anterior
 </details>

### What is the scope of this change (e.g. component or file name)? (press enter to skip)
_Qual é o escopo dessa alteração (por exemplo, nome de componente ou arquivo)? (pressione enter para pular)_
    `Sugestão: referência da história (OSLO-123)`

### Write a short, imperative tense description of the change
_Escreva uma descrição breve e imperativa da mudança_
    `Breve descrição da alteração feita`

### Provide a longer description of the change: (press enter to skip)
_Forneça uma descrição mais longa da alteração: (pressione enter para pular)_
    `Descrição mais completa (opcional)`

### Are there any breaking changes? (y/N)
_Há alguma mudança de quebra? (y / N)_
`Obs.: Ao pressionar Enter, ele coloca "No"`
`Ao colocar "y" ele coloca a seguinte pergunta:`
 - Describe the breaking changes:
 _Descrever as alterações de quebra_
 `...`

### Does this change affect any open issues? (y/N)
_Essa alteração afeta algum problema em aberto? (y / N)_
`Obs.: Ao pressionar Enter, ele coloca "No"`
`Ao colocar "y" ele coloca a seguinte pergunta:`
 - Add issue references (e.g. "fix #123", "re #123".):
 _Adicione referências de problemas (e.g. "fix #123", "re #123".)_
 `...`

