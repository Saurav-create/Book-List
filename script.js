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



class UI {
    constructor() {

    }

    addToBookList(book) {
        let list = document.querySelector("#book-list");
        let row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href="#" class="delete">X</a></td>`;

        list.appendChild(row);



    }

    clearfields() {
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";



    }

   showalert(message,className){

    let div = document.createElement('div');

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
  console.log(div);
     let container = document.querySelector(".container");

     container.insertBefore(div,form);




     setTimeout(()=>{
        
            document.querySelector(".alert").remove();
        
     },1500);
    }


}





//add  event listener
form.addEventListener('submit', newBook);





//define function

function newBook(e) {

    let title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

        let ui = new UI();

    if (title === '' || author === '' || isbn === '' ) {
     ui.showalert("Please fill all the fields!","error");
     
    }

      else {



        let book = new Book(title, author, isbn);
       

        ui.addToBookList(book);
        ui.clearfields();
    ui.showalert("Book Added","success");


    }

    e.preventDefault();
}