let myLibrary = [{title:'Nicola e i cavalieri', author:'Nicola De Sanctis', pages:110, read:true},
{title:'Nicola e i cavalieri', author:'Nicola De Sanctis', pages:110, read:true},];

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
    
    const formhtml = document.createElement('form');
    formhtml.classList.add('.formhtml');
    
    const divTitle = document.createElement('div');
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('type','text');
    inputTitle.setAttribute('id','title');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent='Title'
    divTitle.appendChild(titleLabel);
    divTitle.appendChild(inputTitle);
    formhtml.appendChild(divTitle);

    const divAuthor = document.createElement('div');
    const inputAuthor = document.createElement('input');
    inputAuthor.setAttribute('type','text');
    inputAuthor.setAttribute('id','author');
    const authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author');
    authorLabel.textContent='Author';
    divAuthor.appendChild(authorLabel);
    divAuthor.appendChild(inputAuthor);
    formhtml.appendChild(divAuthor);

    const divPages = document.createElement('div');
    const inputPages = document.createElement('input');
    inputPages.setAttribute('type','text');
    inputPages.setAttribute('id','pages');
    const pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'author');
    pagesLabel.textContent='Pages';
    divPages.appendChild(pagesLabel);
    divPages.appendChild(inputPages);
    formhtml.appendChild(divPages);

    const divRead = document.createElement('div');
    const inputRead = document.createElement('input');
    inputRead.setAttribute('type','checkbox');
    inputRead.setAttribute('id','read');
    const readLabel = document.createElement('label');
    readLabel.setAttribute('for', 'read');
    readLabel.textContent='Already read';
    divRead.appendChild(readLabel);
    divRead.appendChild(inputRead);
    formhtml.appendChild(divRead);

    const divSubmit = document.createElement('div');
    const submitButton = document.createElement('button');
    submitButton.setAttribute('class', 'submitbutton');
    submitButton.textContent = 'Add new book'
    divSubmit.appendChild(submitButton);
    const submitButton2 = document.createElement('button');
    submitButton2.setAttribute('class', 'deletebutton');
    submitButton2.textContent = 'Cancel'
    divSubmit.appendChild(submitButton2);
    

    form.appendChild(formhtml);

    form.appendChild(divSubmit);

    const submittextvalue = document.querySelector('.submitbutton');
    submittextvalue.addEventListener('click', ()=> {
        addBookToLibrary(inputTitle.value,inputAuthor.value,inputPages.value,inputRead.checked);
        displayLast(myLibrary);
        form.remove();
        formcontainer.remove();

    })

    const cancelOperation = document.querySelector('.deletebutton');
    cancelOperation.addEventListener('click', ()=> {
        form.remove();
        formcontainer.remove();

    })
    



})








































function displayLast(lista) {
    const containerBooks = document.querySelector('.containerBooks')
        const containerBook = document.createElement('div');
        containerBook.classList.add('containerBook');
        
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('titleContainer');
        titleContainer.textContent=lista[(lista.length-1)].title;
        containerBook.appendChild(titleContainer);
        
        const authorContainer = document.createElement('div');
        authorContainer.classList.add('authorContainer');
        authorContainer.textContent=lista[(lista.length-1)].author;
        containerBook.appendChild(authorContainer);

        const pagesContainer = document.createElement('div');
        pagesContainer.classList.add('pagesContainer');
        pagesContainer.textContent=lista[(lista.length-1)].pages;
        containerBook.appendChild(pagesContainer);

        const readContainer = document.createElement('div');
        readContainer.classList.add('readContainer');
        readContainer.textContent=lista[(lista.length-1)].read;
        containerBook.appendChild(readContainer);

        const removeBook = document.createElement('button');
        removeBook.classList.add('removeBook');
        removeBook.textContent='✕';
        containerBook.appendChild(removeBook);

        removeBook.addEventListener('click', ()=> {
            lista.pop();
            containerBook.remove();
        })

        const readStatus = document.createElement('button');
        readStatus.classList.add('readStatus');
        readStatus.textContent='Read';
        containerBook.appendChild(readStatus);

        readStatus.addEventListener('click', ()=> {
            readContainer.textContent=true;
        })
        

        

        containerBooks.appendChild(containerBook);


    
}




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

        const removeBook = document.createElement('button');
        removeBook.classList.add('removeBook');
        removeBook.textContent='✕';
        containerBook.appendChild(removeBook);

        removeBook.addEventListener('click', ()=> {
            lista.splice(i,1);
            containerBook.remove();
        })

        const readStatus = document.createElement('button');
        readStatus.classList.add('readStatus');
        readStatus.textContent='Read';
        containerBook.appendChild(readStatus);

        readStatus.addEventListener('click', ()=> {
            readContainer.textContent=true;
        })

        containerBooks.appendChild(containerBook);


    }
}






function addBookToLibrary(title,author,pages,read) {
    const book = new Book(title,author,pages,read);
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

