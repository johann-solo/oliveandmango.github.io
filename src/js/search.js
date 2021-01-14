import Fuse from 'fuse.js'

const options = {
  keys: ['title', 'tags'],
  minMatchCharLength: 3,
  threshold: 0.3
}

const submitSearch = async (query) => {
  try {
    const response = await fetch('/index.json')
    const list = await response.json()
    const fuse = new Fuse(list, options)
    const results = fuse.search(query)
    const resultsContainer = document.getElementById('results')
    document.getElementById('search_title').innerHTML = query
    if(results.length > 0) {
      results.forEach(result => {
        const li = document.createElement('li')
        resultsContainer.appendChild(li)
        li.innerHTML = `
          <a href="${result.item.permalink}">
            <img src="${result.item.thumbnail}" alt="${result.item.title}">
          </a>
          <a href="${result.item.permalink}">${result.item.title}</a>
        `
      })
    } else {
      document.getElementById('no-results').innerHTML = "Oops! It doesn't look like we have any of those! Why not try another search."
    }
  } catch (error) {
    console.log(error)
  }
}

if(window.location.href.includes('search')) {
  const urlParams = new URLSearchParams(window.location.search)
  const myParam = urlParams.get('query')
  if (myParam) {
    submitSearch(myParam)
  }
}
