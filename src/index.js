const lastEle = document.querySelector('.last') || document.querySelector('.current')
const lastEleHref = lastEle.getAttribute('href')
const lastPage = Number(new URLSearchParams(lastEleHref).get('page'))
const randomPage = Math.floor(Math.random() * lastPage) + 1
const params = new URLSearchParams(location.search)
params.set('page', randomPage)
const newWindow = open(location.pathname + '?' + params)
newWindow.addEventListener('DOMContentLoaded', () => {
    const links = newWindow.document.querySelectorAll('.gallery > a')
    const randomLink = Math.floor(Math.random() * links.length)
    links[randomLink].click()
})