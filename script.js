//get the elements

let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');



//Book class

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;


    }
}



class UI {


    static addToBookList(book) {
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href="#" class="delete">X</a></td>`;

        list.appendChild(row);

    

    }

   static clearfields() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";



    }

    static showalert(message, className) {

        let div = document.createElement('div');

        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");

        container.insertBefore(div, form);




         setTimeout(() => {

            document.querySelector(".alert").remove();

        }, 1500);
    }


//    static deleteFromBook(target) {
//          if(target.hasAttribute('href')){

//             target.parentElement.parentElement.remove();
//             Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
//             UI.showalert('Book Removed',"success");
//          }
    
    
//     }

  

}


// Local Storage class


class Store{

    static getBooks(){

        let books;
        
        if(localStorage.getItem('books') === null){
   
           books = [];
   
        }
   
   
        else{
            books = JSON.parse(localStorage.getItem('books'));
        }
   console.log(books.length);
    return books;
   
       }
   



       static addBook(book){
        let books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
            
       }

       static displayBooks(){
          let books = Store.getBooks();

          books.forEach(book =>{
            UI.addToBookList(book);
          });

       }



       static removeBook(isbn){
       let books = Store.getBooks();
    //    console.log(books);

       books.forEach((book,index) =>{
            if(book.isbn === isbn){
                books.splice('index',1);
            }
        localStorage.setItem('books',JSON.stringify('books'));

       });






       }
}





//add  event listener


form.addEventListener('submit', newBook);

bookList.addEventListener('click', removeBook);

document.addEventListener('DOMContentLoaded',Store.displayBooks());





//define function

function newBook(e) {

    let title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    

    if (title === '' || author === '' || isbn === '') {
        UI.showalert("Please fill all the fields!", "error");

    }

    else {



        let book = new Book(title, author, isbn);


        UI.addToBookList(book);
        UI.clearfields();
        UI.showalert("Book Added", "success");
        Store.addBook(book);


    }
    e.preventDefault();
}


function removeBook(e) {

    UI.deleteFromBook(e.target);
    
    e.preventDefault();

}