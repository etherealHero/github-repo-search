# Интерфейс для поиска github репозиториев

lang [RU][home_ru] | [EN][home_en]

## 🚀 Технологии

- HTML x [SCSS][link0]
- [Yandex BEM][link1]
- JavaScript & [DOM API][link2] & [github API][link5]
- [Octokit][link3]
- [Webpack][link4]

## 📋 Описание

Этот репозиторий содержит интерфейс для поиска github репозиториев реализованный через Octokit (github API). [**Онлайн просмотр**][preview]

![asset0]

## 🏁 Точка входа

Для запуска приложения склонируйте репозиторий, выполните `npm i`, затем `npm run dev`.

## 📂 Структура проекта

```plaintext
src/
  style.scss
  index.js
  index.html
```

## 📝 TODO

- [x] Использовать методологию БЭМ в связке с SCSS
- [x] Использовать сборщик Webpack для минификации и сборки дистрибутива
- [x] поле ввода (для подстроки поиска)
  - [x] если символов недостаточно - сообщение об ошибке
- [x] форма срабатывает по кнопке или по enter
- [x] список с результатами (до первых десяти)
  - [x] название + пару полей
  - [x] название - ссылка на репозиторий target="_blank"
  - [x] изначально пустой список, если по запросу ничего не найдено, то вместо списка сообщение "Ничего не найдено"

> [!TIP]
> [Markdown UI kit][md_ui_kit] for README.md

## 📜 Лицензия

Этот проект лицензирован на условиях лицензии MIT. Подробности смотрите в [LICENSE][license].

<!-- navigation -->

[home_ru]: README.md
[home_en]: README.en.md
[license]: /LICENSE
[preview]: https://github-repo-search-zeta.vercel.app/
[md_ui_kit]: https://gist.github.com/etherealHero/ffe9de043f3c2639e864b4fddec8e9e4
[link0]: https://sass-scss.ru/
[link1]: https://ru.bem.info/
[link2]: https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model
[link3]: https://github.com/octokit
[link4]: https://webpack.js.org/
[link5]: https://docs.github.com/en/rest/search?apiVersion=2022-11-28

<!-- assets -->

[asset0]: assets/preview.gif "Preview"
[asset1]: /path.png "label on hover"
[asset2]: /path.png "label on hover"
[asset3]: /path.png "label on hover"
[asset4]: /path.png "label on hover"
[asset5]: /path.png "label on hover"
