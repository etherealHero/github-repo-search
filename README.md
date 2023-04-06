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

(x) - блок поиска репозиториев github по подстроке <- ()3
  https://docs.github.com/en/rest/search?apiVersion=2022-11-28
  (x) - поле ввода (для подстроки поиска)
    если символов недостаточно - сообщение об ошибке
  (x) - форма срабатывает по кнопке или по enter
  (x) - список с результатами
    до первых десяти
    (x) - название + пару полей
    (x) - название - ссылка на репозиторий target="_blank"
    (x) - изначально пустой список, если по запросу ничего не найдено, то вместо списка сообщение "Ничего не найдено"
(x) - js ES modules
(x) - sass loader
(x) - structure
(x) - landing
(x) - connect Api
(x) - валидация на пустой запрос