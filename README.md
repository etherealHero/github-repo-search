# Поиск GitHub репозиториев

## requirements:

- NodeJS
- npm or yarn

## installing || start development:

```
cd
git clone https://github.com/etherealHero/github-repo-search.git
cd github-repo-search/
yarn
yarn start
```

## try it without installation:

Open `dist/index.html` :

```
cd
git clone https://github.com/etherealHero/github-repo-search.git
cd github-repo-search/dist
./index.html
```

## todo

- блок поиска репозиториев github по подстроке <- ()3
  https://docs.github.com/en/rest/search?apiVersion=2022-11-28

  - поле ввода (для подстроки поиска)
    если символов недостаточно - сообщение об ошибке
  - форма срабатывает по кнопке или по enter
  - список с результатами
    до первых десяти
    - название + пару полей
    - название - ссылка на репозиторий target="\_blank"
    - изначально пустой список, если по запросу ничего не найдено, то вместо списка сообщение "Ничего не найдено"

- Steps

  [*] js ES modules

  [*] sass loader

  [*] structure

  [*] landing

  [*] connect Api

  [*] валидация на пустой запрос
