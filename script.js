const mylibrary = []

function Book(id,title,author,publisher,publicationYear,edition,pages,language){
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.publisher = publisher
    this.publicationYear = publicationYear
    this.edition = edition
    this.pages = pages
    this.language = language
}

function addbooktolibrary(title,author,publisher,publicationYear,edition,pages,language){
    mylibrary.push(new Book(title,author,publisher,publicationYear,edition,pages,language))
}

function displaylibrary(){
    const library = document.getElementById("library")
    library.innerHTML = ""

    mylibrary.forEach(book =>{
        const card = document.createElement("div")
        card.dataset.id = book.id

        const title = document.createElement("h3")
        title.textContent = book.title

        const author = document.createElement("p")
        author.textContent = `Author: ${book.author}`

        const publisher = document.createElement("p")
        publisher.textContent = `Publisher: ${book.publisher}`

        const publicationYear = document.createElement("p")
        publicationYear.textContent = `Pulicationyear: ${book.publicationYear}`

        const edition = document.createElement("p")
        edition.textContent = `Author: ${book.edition}`

        const pages = document.createElement("p")
        pages.textContent = `Pages: ${book.pages}`


        const language = document.createElement("p")
        language.textContent = `Language: ${book.language}`

        const remove = document.createElement("button")
        remove.textContent = "remove"
        remove.onclick = () => removebook(book.id)

        card.append(title,author,publisher,publicationYear,edition,pages,language,remove)
        library.appendChild(card)
    })
}


const newbook = document.getElementById("new-book-btn")
const modal = document.getElementById("modal")
const form = document.getElementById("bookform")
const close = document.getElementById("close-btn")


newbook.onclick = () => modal.classList.remove("hidden")
close.onclick = () => modal.classList.add("hidden")

form.onsubmit = e => {
  e.preventDefault()

  addbooktolibrary(
    title.value,
    author.value,
    publisher.value,
    Number(publicationYear.value),
    Number(edition.value),
    Number(pages.value),
    language.value
  )

  form.reset()
  modal.classList.add("hidden")
  displaylibrary()
}

function removebook(id){
  const index = mylibrary.findIndex(book => book.id === id)
  if(index !== -1){
    mylibrary.splice(index,1)
    displaylibrary()
  }
}


displaylibrary()