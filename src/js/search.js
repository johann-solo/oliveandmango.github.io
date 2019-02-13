import Fuse from 'fuse.js'
const list = require('../../dist/index.json')

const options = {
  keys: ['title', 'tags'],
  minMatchCharLength: 3,
  threshold: 0.3
}

const fuse = new Fuse(list, options)

const button = document.getElementById('submitsearch')

button.onclick = function () {
  const search = searchquery.value
  if (search) {
    submitSearch(search)
  }
}

function submitSearch(query) {
  const results = fuse.search(query)
  const resultsContainer = document.getElementById('results')
  results.forEach(result => {
    const li = document.createElement('li')
    resultsContainer.appendChild(li)
    li.innerHTML = `<a href="${result.permalink}">${result.title}</a>`
  })
}
