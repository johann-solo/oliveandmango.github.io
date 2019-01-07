console.log('hello')

import Fuse from 'fuse.js'
const list = require('../../dist/index.json')

const options = {
  keys: ['title', 'tags'],
  minMatchCharLength: 3,
  threshold: 0.4
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

const query = getURLParameter('query')

const fuse = new Fuse(list, options)

const submitSearch = (query) => {
  const results = fuse.search(query)
  console.log(results)
}

submitSearch(query)
