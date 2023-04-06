import { getRepos } from "./api"
import "./style.scss"

// getRepos("avs_landing")

const form = document.forms["search"]
const list = document.querySelector(".gitrepo__inner")
let data = null

list.innerHTML = data

async function handleSubmit(event) {
  event.preventDefault()

  data = null
  const query = event.target.elements["query"].value.trim() || null

  if (!query || query?.length <= 2) {
    list.innerHTML = "Слишком короткий запрос!"

    return
  }

  list.innerHTML = "Поиск..."

  data = await getRepos(query)

  list.innerHTML = null

  for (let repo of data) {
    list.insertAdjacentHTML(
      `beforeend`,
      `
      <div class="gitrepo__item">
        <a href="${repo.href}" class="gitrepo__item-title" target="_blank">${
        repo.title
      }</a>
        ${
          repo.description
            ? `<p class="gitrepo__item-description">${repo.description}</p>`
            : ``
        }
        <div class="gitrepo__clone-wrapper">
          <div class="gitrepo__clone">
              <span class="gitrepo__clone-cmd">${repo.clone}</span>
          </div>
              <a href="#" class="gitrepo__clone-bufferbtn">
                <i class="small material-icons">content_copy</i>
              </a>
        
        </div>
        ${
          repo.language
            ? `<span class="gitrepo__item-lang">
            <i class="small material-icons">code</i>
            ${repo.language}
          </span>`
            : ``
        }
      </div>
      `
    )
  }

  if (data.length === 0)
    list.innerHTML = `Ничего не найдено по запросу "${query}"`
}

form.addEventListener("submit", handleSubmit)

document.body.classList.add()

document.addEventListener("click", function (e) {
  if (e.target.closest(".gitrepo__clone-bufferbtn")) {
    e.preventDefault()

    let btn = e.target.closest(".gitrepo__clone-bufferbtn")
    let item = e.target.closest(".gitrepo__item")
    let buffer = item.querySelector(".gitrepo__clone-cmd").textContent

    btn.classList.add("active")
    setTimeout(() => btn.classList.remove("active"), 400)

    navigator.clipboard.writeText(buffer)
  }
})
