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
 - feat:     A new feature
 - fix:      A bug fix
 - docs:     Documentation only changes
 - style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
 - refactor: A code change that neither fixes a bug nor adds a feature
 - perf:     A code change that improves performance
 - test:     Adding missing tests or correcting existing tests
 - build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
 - ci:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
 - chore:    Other changes that don't modify src or test files
 - revert:   Reverts a previous commit

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

