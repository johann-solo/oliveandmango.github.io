import Fuse from 'fuse.js'
const list = require('../../dist/index.json')

console.log('search')

const options = {
  keys: ['title', 'tags'],
  minMatchCharLength: 3,
  threshold: 0.3
}

const fuse = new Fuse(list, options)

const button = document.getElementById('submitsearch')

button.onclick = function () {
  const search = searchquery.value
  localStorage.setItem('query', search)
  if (search) {
    window.location.href = `/search/?query=${search}` 
  }
}

function submitSearch(query) {
  const results = fuse.search(query)
  const resultsContainer = document.getElementById('results')
  results.forEach(result => {
    const li = document.createElement('li')
    resultsContainer.appendChild(li)
    li.innerHTML = `<a href="${result.permalink}"><img src="${result.thumbnail}" alt="${result.title}"></a><a href="${result.permalink}">${result.title}</a>`
  })
}

if(window.location.href.includes('search')) {
  const urlParams = new URLSearchParams(window.location.search)
  const myParam = urlParams.get('query')
  submitSearch(myParam)
}
