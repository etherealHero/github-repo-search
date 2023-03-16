import { getRepos } from "./api"
import "./style.scss"

// getRepos("avs_landing")

const form = document.forms["search"]

function handleSubmit(event) {
  event.preventDefault()

  const query = event.target.elements["query"].value || null

  getRepos(query)

  console.log(query)
}

form.addEventListener("submit", handleSubmit)

// console.log(form)
