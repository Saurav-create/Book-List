//get the elements

let form = document.querySelector('#book-form');




//Book class

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;


    }
}



class UI{
    constructor(){

    }

   addToBookList(book){
       console.log(book);
    }
}





//add  event listener
form.addEventListener('submit', newBook);





//define function

function newBook(e) {

        let title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn= document.querySelector('#isbn').value;


     let book = new Book(title,author,isbn);
     let ui = new UI();

      ui.addToBookList(book);

    //  console.log(book);


  e.preventDefault();
}