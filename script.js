let myLibrary = [{title:'Nicola e i cavalieri', author:'Nicola De Sanctis', pages:110, read:true},
{title:'Nicola e i cavalieri', author:'Nicola De Sanctis', pages:110, read:true}];

display(myLibrary);

const desktop = document.querySelector('.desktop');

const newBook = document.querySelector('.newBook');
newBook.addEventListener('click', () => {
    const formcontainer = document.createElement('div');
    formcontainer.classList.add('formcontainer');
    desktop.appendChild(formcontainer);

    const form = document.createElement('div');
    form.classList.add('form');
    desktop.appendChild(form);

})















































function display(lista) {
    const containerBooks = document.querySelector('.containerBooks')
    for(let i =0; i<lista.length; i++) {
        const containerBook = document.createElement('div');
        containerBook.classList.add('containerBook');
        
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('titleContainer');
        titleContainer.textContent=lista[i].title;
        containerBook.appendChild(titleContainer);
        
        const authorContainer = document.createElement('div');
        authorContainer.classList.add('authorContainer');
        authorContainer.textContent=lista[i].author;
        containerBook.appendChild(authorContainer);

        const pagesContainer = document.createElement('div');
        pagesContainer.classList.add('pagesContainer');
        pagesContainer.textContent=lista[i].pages;
        containerBook.appendChild(pagesContainer);

        const readContainer = document.createElement('div');
        readContainer.classList.add('readContainer');
        readContainer.textContent=lista[i].read;
        containerBook.appendChild(readContainer);

        containerBooks.appendChild(containerBook);


    }
}






function addBookToLibrary() {
    let title = prompt('Title?');
    let author = prompt('author?');
    let pages = prompt('pages?');
    let read = prompt('read?');
    if(read == 'yes') {
        read = true;
    }
    else if (read == 'no') {
        read == false;
    }

    console.log(title,author,pages,read)
    const book = new Book(title,author,pages,read);
    console.log(book);
    myLibrary.push(book);
}




function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readyet = 'not read yet';
        if(this.read) {
            readyet = 'already read';
        }
        return(this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + readyet);
    }
}

