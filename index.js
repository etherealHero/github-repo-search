import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: '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'
})

const getRepos = async query => {
  const req = await octokit.request(
    'get /search/repositories?q={query}&per_page=10', {
      headers: {
        'x-github-api-version': '2022-11-28'
      },
      query
    }
  )
  
  const data = [...req.data.items.map(repo => ({
    title: repo.full_name,
    href: repo.html_url,
    description: repo.description,
    clone: `git clone ${repo.clone_url}`,
    language: repo.language,
  }))]
  
  console.log("Ratelimit: ", req.headers["x-ratelimit-remaining"])
  console.log(data)

  return data
}

getRepos('avs_landing')
