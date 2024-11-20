const table = document.querySelector(".books-table");

const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author){
    let book = new Book(title, author);
    myLibrary.push(book);
}

addBookToLibrary('Daily Rituals', 'Mason Currey');
addBookToLibrary('Digital Minimalism', 'Cal Newport' );
addBookToLibrary('Atomic Habits','James Clear');

function displayBooks(arr){
  
  arr.forEach((element)=>{
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    tdTitle.textContent = element.title;
    tdAuthor.textContent = element.author;
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    table.appendChild(newRow);
  })
}

displayBooks(myLibrary);



const showButton=document.getElementById("showDialog");

const createBook = document.getElementById("createBook");

const confirmBtn = document.querySelector("#confirmBtn");


showButton.addEventListener("click", () => {
  createBook.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  
  addBookToLibrary(title,author);
  
  createBook.close();
  
    const newRow = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor =              document.createElement("td");
    tdTitle.textContent = title;
    tdAuthor.textContent = author;
    newRow.appendChild(tdTitle);
    newRow.appendChild(tdAuthor);
    table.appendChild(newRow);
  
});