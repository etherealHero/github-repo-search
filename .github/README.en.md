# Interface for searching github repositories

lang [RU][home_ru] | [EN][home_en]

## 🚀 Technologies

- HTML x [SCSS][link0]
- [Yandex BEM][link1]
- JavaScript & [DOM API][link2] & [github API][link5]
- [Octokit][link3]
- [Webpack][link4]

## 📋 Description

This repository contains an interface for searching github repositories implemented via Octokit. [Online preview][preview]

![asset0]

## 🏁 Entry Point

To run the application, clone the repository, run `npm i`, then `npm run dev`.

## 📂 Project Structure

```plaintext
src/
  style.scss
  index.js
  index.html
```

## 📝 TODO

- [x] Use the BEM methodology in conjunction with SCSS
- [x] Use Webpack bundler to minify and build the distribution
- [x] input field (for search substring)
  - [x] if there are not enough characters - error message
- [x] the form is triggered by a button or by enter
- [x] list with results (top 10 records)
  - [x] title + a couple of fields
  - [x] title - link to the repository target="_blank"
  - [x] initially an empty list, if nothing was found by request, then instead of the list the message “Nothing found”

> [!TIP]
> [Markdown UI kit][md_ui_kit] for README.md

## 📜 License

This project is licensed under the MIT License. See [LICENSE](/LICENSE) for details.

<!-- navigation -->

[home_ru]: README.md
[home_en]: README.en.md
[license]: /LICENSE
[preview]: fix_after_deploy_vercel
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
